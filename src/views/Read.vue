<template lang="pug">
.page.read(:class="`chapter-${position.chapter.id} section-${position.section.id}${isFirst ? ' first-section' : ''}`")
  nav
    button.back(@click="endReading()")
    .menu
      button.feedback-mode(v-if="feedbackEnabled" @click="overlay('feedbackMode')")
      button.playback(v-if="config.readOutLoud" 
        :class="{ playing: playback }" 
        @click="playback ? stopPlayback() : startPlayback()")
      button.collectables(v-if="config.items && itemCount + imageCount > 0" @click="overlay('collectables')")
      button.chapters(@click="overlay('chapters')")
      button.options(@click="overlay('options')")

  .content
    transition(name="section" mode="out-in" @before-enter="beforeSectionChanged" @after-enter="afterSectionChanged")
      .section(:key="`${position.chapter.id}-${position.section.id}`")
        .title
          .position(v-if="feedbackEnabled") {{ position.chapter.id }}-{{ position.section.id }}
          h2(v-if="isFirst") {{ position.chapter.title }}
          h3 {{ position.section.title }}

        TextElement.text(:elements="position.section.elements")

        .next.links(:class="'count-'+position.section.next.length" ref="links")
          button(
            v-for="link in position.section.next",
            @click="open(link)"
            :disabled="!enabled(link)"
            :class="{ selected: selected(link) }") {{ link.title }}
  transition(name="overlay" appear @after-leave="playerLeft")
    .player(v-if="playerVisible" :class="{ loading, failed: playbackFailed }")
      .playing(v-if="!playbackFailed")
        button.stop(@click="stopPlayback()")
        ProgressButton.play.progress(:class="{ paused }" @click.native="togglePlayPause()" :progress="progress")
        button.speed(@click="switchSpeed()") {{ playbackSpeed }}  
      .failed.backdrop(v-else @click="stopPlayback()")
        .overlay
          .title
          .content
            .text
              p.message
        .actions
          button.close(@click="stopPlayback()")
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import last from "lodash/last";
import { mapFields } from 'vuex-map-fields';
import { Link, SpecialLink, isSpecialLink, Reference } from "../shared/entities";
import TextElement from "../components/elements/TextElement.vue";
import { inPath, Items, Position } from "../store";
import book from "../book";
import { TextBase } from "@/utls/TextBase";
import logRemote from "@/utls/logRemote";
import { getVisibleParagraphs, resetVisibleParagraphs } from "@/components/elements/ParagraphElement.vue";
import { paragraphFilename, titleFilename, decisionFilename } from "../shared/audio";
import { warn, log, error, logJson } from "@/shared/util";
import ProgressButton from "@/components/ProgressButton.vue";
import { allImagesCollected } from "@/components/overlays/Collectables.vue";
import { Loader, Error, isError } from "@/utls/loader";

type PlaylistItem = {
  url: string;
  paragraph: string;
}

@Component({
  name: "Read",
  components: { TextElement, ProgressButton },
  computed: {
    ...mapFields(['paragraph',]),
  },
})
export default class Read extends TextBase {
  @State path!: Reference[];
  @State items!: Items;
  @State("overlay") currentOverlay;
  @State("page") currentPage;
  // @State paragraph;
  @Action page!: Function;
  @Action goto!: Function;
  @Action overlay!: Function;
  @Action reset!: Function;
  @Getter position!: Position;
  @Getter feedbackEnabled!: boolean;
  @Getter itemCount!: number;
  paragraph!: string;
  config = book.config;
  rootFolder = '/assets/audio/';
  audio = new Audio();
  player = false;
  playback = false;
  paused = true;
  current = 0;
  playbackSpeed = '1.0';
  playlist: PlaylistItem[] = [];
  loader?: Loader;
  loading = false;
  playbackFailed = false;

  enabled(link: Link | SpecialLink): boolean {
    // enabled if: decision taken before (in path); or if last in progress == current (any decision possible)
    if (this.path.length === 0 || isSpecialLink(link) || this.selected(link)) return true;
    const lastPos: Reference = last(this.path)!;
    return ((lastPos.chapterId === this.position.chapter.id) && lastPos.sectionId === this.position.section.id);
  }

  selected(link: Link | SpecialLink): boolean {
    if (isSpecialLink(link)) return false;
    return inPath(link, this.path);
  }

  get isFirst(): boolean {
    return this.position.chapter.sections.indexOf(this.position.section) === 0;
  }

  get imageCount() {
    return allImagesCollected(this.path).length;
  }

  async mounted() {
    logRemote('read', 'init', `${this.position.chapter.id}_${this.position.section.id}`);
    this.audio.autoplay = true;
    this.audio.addEventListener('ended', () => {
      this.next();
    });
    this.audio.addEventListener('error', () => {
      warn('Error playing audio:', this.playlist[this.current], this.audio.src);
      this.next();
    });
    setTimeout(() => this.playlist = this.createPlaylist(), 100)
  }

  beforeSectionChanged() {
    log('Read.beforeSectionChanged');
    this.playbackFailed = false;
    this.togglePlayPause(false);
    resetVisibleParagraphs();
    this.loader?.cancel();
  }

  afterSectionChanged() {
    log('Read.afterSectionChanged');
    this.playlist = this.createPlaylist();
    // continue playing after section has changed
    if (this.playback) this.startPlayback();
  }

  endReading() {
    this.stopPlayback();
    this.page('start');
  }

  startPlayback() {
    if (this.playlist.length < 1) {
      error('Read.startPlayback: empty playlist!');
    }
    try {
      this.playbackFailed = false;
      this.loader = new Loader(this.playlist.map(item => item.url), { startImmediately: true, timeout: 5000, retries: 6 });
    } catch (e) {
      warn('Read.startPlayback: error starting loader', e);
    }
    this.current = 0;
    this.playTrack();
    this.playback = true;
    this.showPlayer();
  }

  async playTrack() {
    if (this.playlist.length < 1) error('Read.playTrack: playlist empty', this.playlist);
    const item = this.playlist[this.current];
    try {
      this.loading = true;
      const blob = await this.loader!.get(item.url)!;
      this.audio.src = log(`Read.playTrack blob URL ${item.url}`, URL.createObjectURL(blob))!;
    } catch (e) {
      // situation: I get an error after 10 retries -> shows dialog
      // problem: it might be an audio file that doesn't exist (item text)
      // expected: it should notice 404 on first try and not try again
      // todo: what to return here ? error ? undefined ?
      // solution: return special error object with "abort" which means "skip this file"
      logJson('Read.playTrack: error loading track', e);
      if (isError(e) && e.abort) {
        this.next(); // skip 404 errors
      } else {
        this.playbackFailed = true;
      }
    }
    this.loading = false;
    this.paragraph = item.paragraph;
    this.audio.playbackRate = parseFloat(this.playbackSpeed);
    this.paused = false;
    if (item.paragraph === 'jingle') { // scroll to links at the end
      (this.$refs.links as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
    }
    log('Read.playTrack', this.audio.src);
  }

  stopPlayback() {
    log('Read.stopPlayback');
    if (!this.playback) return;
    this.playback = false;
    this.audio.pause();
    this.paused = true;
    this.paragraph = '';
    this.showPlayer(false);
  }

  async togglePlayPause(startPlaying = this.paused) {
    if (startPlaying) {
      this.paused = false;
      await this.audio.play();
    } else {
      this.audio.pause();
      this.paused = true;
    }
  }

  next() {
    if (this.current < this.playlist.length - 1) {
      this.current++
      this.playTrack();
    } else {
      this.current = 0;
      this.paused = true;
      this.showPlayer(false);
    }
  }

  async showPlayer(show = true) {
    this.player = show;
    const main = document.getElementsByTagName('main').item(0)!;
    if (show) main.classList.toggle('player-open', true);
    // else -- see below
  }

  playerLeft() { // remove only after player was animated out
    document.getElementsByTagName('main').item(0)!.classList.toggle('player-open', false);
  }

  get playerVisible() {
    if (this.currentOverlay) this.stopPlayback();
    return this.player && !this.currentOverlay;
  }

  createPlaylist(): PlaylistItem[] {
    const chapterId = this.position.chapter.id;
    const sectionId = this.position.section.id;
    const makeItem = (filename: string, paragraph: string): PlaylistItem => {
      return ({ url: this.rootFolder + filename, paragraph });
    };
    const visibleParagraphs = getVisibleParagraphs().map(p => makeItem(paragraphFilename(chapterId, sectionId, p.hash), '' + p.index));
    resetVisibleParagraphs();

    const list = log('Read.createPlaylist', [
      makeItem(titleFilename(chapterId, sectionId), 'title'),
      ...visibleParagraphs,
      makeItem('before-decision-jingle.mp3', 'jingle'), // TODO make jingle configurable
      makeItem(decisionFilename(chapterId, sectionId), 'decision'),
    ]);

    return list;
  }

  switchSpeed() {
    const speeds = ['1.0', '1.2', '1.5', '2.0', '0.5', '0.8'];
    this.playbackSpeed = speeds[(speeds.indexOf(this.playbackSpeed) + 1) % speeds.length];
    this.audio.playbackRate = parseFloat(this.playbackSpeed);
  }

  get progress(): number {
    if (!this.playback) return 0;
    return (this.current + 1) / this.playlist.length;
  }
}
</script>
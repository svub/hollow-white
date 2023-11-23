<template lang="pug">
.page.read(:class="`chapter-${position.chapter.id} section-${position.section.id}${isFirst ? ' first-section' : ''}`")
  nav
    button.back(@click="endReading()")
    .menu
      button.feedback-mode(v-if="feedbackEnabled" @click="overlay('feedbackMode')")
      button.playback(v-if="config.readOutLoud" 
        :class="{ playing: playback }" 
        @click="playback ? stopPlayback() : startPlayback()")
      button.items(v-if="config.items && itemCount > 0" @click="overlay('items')")
      button.chapters(@click="overlay('chapters')")
      button.options(@click="overlay('options')")

  .content
    transition(name="section" mode="out-in" v-on:after-enter="sectionChanged")
      .section(:key="`${position.chapter.id}-${position.section.id}`")
        .title
          .position(v-if="feedbackEnabled") {{ position.chapter.id }}-{{ position.section.id }}
          h2(v-if="isFirst") {{ position.chapter.title }}
          h3 {{ position.section.title }}

        TextElement.text(:elements="position.section.elements")

        .next.links(:class="'count-'+position.section.next.length")
          button(
            v-for="link in position.section.next",
            @click="open(link)"
            :disabled="!enabled(link)"
            :class="{ selected: selected(link) }") {{ link.title }}
  transition(name="overlay" appear @after-leave="playerLeft")
    .player(v-if="playerVisible")
      button.stop(@click="stopPlayback()")
      ProgressButton.play.progress(:class="{ paused }" @click.native="togglePlayPause()" :progress="progress")
      button.speed(@click="switchSpeed()") {{ playbackSpeed }}   
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
import { warn, log, logRaw } from "@/shared/util";
import ProgressButton from "@/components/ProgressButton.vue";

type PlaylistItem = {
  filename: string;
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

  mounted() {
    logRemote('read', 'init', `${this.position.chapter.id}_${this.position.section.id}`);
    this.playlist = this.createPlaylist();
    this.audio.autoplay = true;
    this.audio.addEventListener('ended', () => {
      this.next();
    });
    this.audio.addEventListener('error', () => {
      warn('Error playing audio:', this.playlist[this.current], this.audio.src);
      this.next();
    });
  }

  beforeUpdate() {
    log('Read.beforeUpdate');
    resetVisibleParagraphs();
  }

  sectionChanged() {
    // continue playing after section has changed
    this.playlist = this.createPlaylist();
    if (this.playback) this.startPlayback();
  }

  endReading() {
    this.stopPlayback();
    this.page('start');
  }

  open(link: Link | SpecialLink) {
    log('Read.open', link);
    resetVisibleParagraphs();
    return super.open(link);
  }

  startPlayback() {
    this.current = 0;
    this.playTrack();
    this.playback = true;
    this.showPlayer();
  }

  async playTrack() {
    const item = this.playlist[this.current];
    this.audio.src = this.rootFolder + item.filename;
    this.paragraph = item.paragraph;
    this.audio.playbackRate = parseFloat(this.playbackSpeed);
    this.paused = false;
    log('Read.playTrack', this.audio.src);
  }

  stopPlayback() {
    log('Read.stopPlayback');
    if (!this.playback) return;
    this.audio.pause();
    this.playback = false;
    this.paused = true;
    this.paragraph = '';
    this.showPlayer(false);
  }

  async togglePlayPause() {
    if (this.paused) {
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
    return this.player && !this.currentOverlay;
  }

  createPlaylist(): PlaylistItem[] {
    const chapterId = this.position.chapter.id;
    const sectionId = this.position.section.id;
    const makeItem = (filename: string, paragraph: string) => ({ filename, paragraph });

    // TODO make jingle configurable
    return logRaw('Read.createPlaylist', [
      makeItem(titleFilename(chapterId, sectionId), 'title'),
      ...getVisibleParagraphs().map(p => makeItem(paragraphFilename(chapterId, sectionId, p.hash), '' + p.index)),
      makeItem('before-decision-jingle.mp3', 'jingle'),
      makeItem(decisionFilename(chapterId, sectionId), 'decision'),
    ]);
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
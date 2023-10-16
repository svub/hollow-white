<template lang="pug">
.page.read(:class="`chapter-${position.chapter.id} section-${position.section.id}${isFirst ? ' first-section' : ''}`")
  nav
    button.back(@click="page('start')")
    .menu
      button.feedback-mode(v-if="feedbackEnabled" @click="overlay('feedbackMode')")
      button.playback(v-if="config.readOutLoud" @click="startPlayback()")
      button.items(v-if="config.items && itemCount > 0" @click="overlay('items')")
      button.chapters(@click="overlay('chapters')")
      button.options(@click="overlay('options')")

  .content
    transition(name="section" mode="out-in")
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
  .playback(v-if="playback")
    button.stop(@click="stopPlayback()")
    button.play(:class="{ playing: player.playing }" @click="player.toggle()")
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
import Player from '@/utls/player';
import { log, logRaw } from "@/shared/util";

@Component({
  name: "Read",
  components: { TextElement },
  computed: {
    ...mapFields(['currentParagraphId',]),
  },
})
export default class Read extends TextBase {
  @State path!: Reference[];
  @State items!: Items;
  @Action page!: Function;
  @Action goto!: Function;
  @Action overlay!: Function;
  @Action reset!: Function;
  @Getter position!: Position;
  @Getter feedbackEnabled!: boolean;
  @Getter itemCount!: number;
  currentParagraphId!: string;
  config = book.config;
  player = new Player('/assets/audio/', true);
  playback = false;
  playbackSpeed = '';

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
  }

  beforeUpdate() {
    log('Read.beforeUpdate');
    resetVisibleParagraphs();
  }

  open(link: Link | SpecialLink) {
    log('Read.open', link);
    resetVisibleParagraphs();
    return super.open(link);
  }

  startPlayback() {
    logRaw('playlist', this.player.playlist = this.createPlaylist());
    this.playback = true;
  }

  stopPlayback() {
    this.player.pause();
    this.playback = false;
  }

  createPlaylist() {
    const chapterId = this.position.chapter.id;
    const sectionId = this.position.section.id;
    return [titleFilename(chapterId, sectionId),
    ...getVisibleParagraphs().map(paragraph => paragraphFilename(chapterId, sectionId, paragraph.index)),
      'before-decision-jingle.mp3',
    decisionFilename(chapterId, sectionId)
    ];
  }

  switchSpeed() {
    const speeds = ['1.0', '1.2', '1.5', '2.0', '0.5', '0.8'];
    this.playbackSpeed = speeds[(speeds.indexOf(this.playbackSpeed) + 1) % speeds.length];
    this.player.speed = parseFloat(this.playbackSpeed);
  }
}
</script>

<style scoped lang="stylus"></style>

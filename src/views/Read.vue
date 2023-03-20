<template lang="pug">
.page.read(:class="`chapter-${position.chapter.id} section-${position.section.id}${isFirst ? ' first-section' : ''}`")
  nav
    button.back(@click="page('start')")
    .menu
      button.feedback-mode(v-if="feedbackEnabled" @click="overlay('feedbackMode')")
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
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import last from "lodash/last";
import { Link, SpecialLink, isSpecialLink, Reference } from "../shared/entities";
import TextElement from "../components/elements/TextElement.vue";
import { inPath, Items, Position } from "../store";
import book from "../book";
import { TextBase } from "@/utls/TextBase";
import logRemote from "@/utls/logRemote";

@Component({
  name: "Read",
  components: { TextElement },
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
  config = book.config;

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

  @Watch('position')
  pageChange() {
    logRemote('read', 'page-change', `${this.position.chapter.id}_${this.position.section.id}`);
  }
}
</script>

<style scoped lang="stylus"></style>

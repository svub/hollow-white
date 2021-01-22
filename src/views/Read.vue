<template lang="pug">
.page.read
  nav
    button.back(@click="page('start')")
    .menu
      button.chapters(@click="overlay('chapters')")

  .title
    //- .icon icon
    h2(v-if="position.chapter.sections.indexOf(position.section) === 0") {{ position.chapter.title }}
    h3 {{ position.section.title }}

  TextElement.text(:elements="position.section.elements")

  .next.links
    button(
      v-for="link in position.section.next",
      @click="open(link)"
      :disabled="!enabled(link)"
      :class="{ selected: selected(link) }") {{ link.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import last from "lodash/last";
import { Chapter, Link, Section, SpecialLink, isSpecialLink, Reference } from "../shared/entities";
import TextElement from "../components/elements/TextElement.vue";
import { Position } from "../store";

@Component({
  name: "Read",
  components: { TextElement },
})
export default class Read extends Vue {
  @State path: Reference[];
  @Action page: Function;
  @Action goto: Function;
  @Action overlay: Function;
  @Getter position: Position;

  enabled(link: Link | SpecialLink): boolean {
    // enabled if: decision taken before (in path); or if last in progress == current (any decision possible)
    if (this.path.length === 0 || isSpecialLink(link) || this.selected(link)) return true;
    const lastPos: Reference = last(this.path);
    return ((lastPos.chapterId === this.position.chapter.id) && lastPos.sectionId === this.position.section.id);
  }

  selected(link: Link | SpecialLink): boolean {
    if (isSpecialLink(link)) return false;
    // chapter and section in progress -> yes, we went through this decision
    // const chapter = this.progress.find(chapter => chapter.id === link.chapterId);
    // return !!chapter.sections.find(section => section.id === link.sectionId);
    this.path.indexOf(link as Reference) > -1;
  }

  open(link: Link | SpecialLink) {
    if (isSpecialLink(link)) {
      return this.overlay(link.id);
    }
    this.goto(link);
  }
}
</script>

<style scoped lang="stylus"></style>

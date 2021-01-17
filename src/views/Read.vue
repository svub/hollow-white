<template lang="pug">
.page.read
  nav
    button.back(@click="page('start')")
    .menu
      button.chapters(@click="overlay('chapters')")

  .title
    //- .icon icon
    h2(v-if="chapter.sections.indexOf(section) === 0") {{ chapter.title }}
    h3 {{ section.title }}

  TextElement.text(:elements="section.elements")

  .next.links
    button(
      v-for="link in section.next",
      @click="goto(link)"
      :disabled="!enabled(link)"
      :class="{ selected: selected(link) }") {{ link.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import last from "lodash/last";
import { Chapter, Link, Section, SpecialLink, isSpecialLink } from "../shared/entities";
import TextElement from "../components/elements/TextElement.vue";

@Component({
  name: "Read",
  components: { TextElement },
})
export default class Read extends Vue {
  @State((state) => state.chapter) chapter: Chapter;
  @State((state) => state.section) section: Section;
  @Action page: Function;
  @Action goto: Function;
  @Action overlay: Function;
  @Getter progress: Chapter[];

  enabled(link: Link | SpecialLink): boolean {
    // enabled if: decision taken before (in path); or if last in progress == current (any decision possible)
    if (isSpecialLink(link) || this.selected(link)) return true;
    const lastChapter: Chapter = last(this.progress);
    return ((lastChapter.id === this.chapter.id) && last(lastChapter.sections).id === this.section.id);
  }

  selected(link: Link | SpecialLink): boolean {
    if (isSpecialLink(link)) return false;
    // chapter and section in progress -> yes, we went through this decision
    const chapter = this.progress.find(chapter => chapter.id === link.chapterId);
    return !!chapter.sections.find(section => section.id === link.sectionId);
  }
}
</script>

<style scoped lang="stylus"></style>

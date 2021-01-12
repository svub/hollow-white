<template lang="pug">
.page.read
  nav
    .back(@click="page('start')")
    .menu
      .chapters(@click="overlay('chapters')")

  .title
    //- .icon icon
    h2(v-if="chapter.sections.indexOf(section) === 0") {{ chapter.title }}
    h3 {{ section.title }}

  TextElement.text(:elements="section.elements")

  .next.links
    button(v-for="link in section.next", @click="goto(link)") {{ link.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { Chapter, Section } from "../shared/entities";
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
}
</script>

<style scoped lang="stylus"></style>

<template lang="pug">
  .page.start
    .title
      .icon icon
      h2(v-if="chapter.sections.indexOf(section) === 0") {{ chapter.title }}
      h3 {{ section.title }}
    TextElement.text(:elements="section.elements")
    .buttons
      button(v-for="link in section.next" @click="goto(link)") {{ link.title }}
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class'
  import { Chapter, Section, Element } from '../shared/entities';
  import { log } from '../shared/util';
  import TextElement from '../components/elements/TextElement.vue';

  @Component({
    name: 'Read',
    components: {
      TextElement,
    }
  })
  export default class Start extends Vue {
    @State(state => state.chapter) chapter: Chapter;
    @State(state => state.section) section: Section;
    @State sectionId;
    @Action goto;
  }
</script>

<style scoped lang="stylus">
</style>

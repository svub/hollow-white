<template lang="pug">
  .page.start
    .title
      .logo
      h1 {{ book.title }}
      .sub-title(v-if="book.subTitle") {{ book.subTitle }}
    .buttons
      .status(v-if="started")
        span.chapter {{ chapter.id }}
        span.progress {{ Math.floor(progress * 100) }}%
      button(@click="start" :class="{ start: !started, continue: started }")
      button.options
      button.credits
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class'
import { Book, Chapter, Section } from '../shared/entities';

  @Component({
    name: 'Start',
  })
  export default class Start extends Vue {
    @State started: boolean;
    @Action start: Function;
    @State book: Book;
    @State chapter: Chapter;
    @State section: Section;

    get progress(): number {
      // calculate for chapters only
      // const index = this.book.chapters.map(chapter => chapter.id).indexOf(this.chapter.id);
      // return (index + 1) / this.book.chapters.length;

      // calculate over all sections
      let index = -1;
      let total = 0;
      for (const chapter of this.book.chapters) {
        for (const section of chapter.sections) {
          total++;
          if (chapter.id === this.chapter.id && section.id === this.section.id) index = total;
        }
      }
      return index/total;
    }
  }
</script>

<style scoped lang="stylus">
</style>

<template lang="pug">
.chapters
  .list(ref='scroll')
    .chapter(v-for="chapter in chapters", @click="toggle(chapter.id)")
      .chapter-id {{ chapter.id }}
      h3 {{ chapter.title }}
      .sections(:class="{ open:  opened === chapter.id}")
        button.section(v-for="section in chapter.sections" @click="goto({ chapterId: chapter.id, sectionId: section.id }); overlay()")
          h4 {{ section.title }}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { Chapter } from "../../shared/entities";
import { warn } from "../../shared/util";

@Component({
  name: "Chapters",
  components: {},
})
export default class Chapters extends Vue {
  @Prop(Array) chapters: Chapter[];
  @Action goto: Function;
  @Action overlay: Function;
  opened = '';

  mounted() {
    this.opened = this.chapters[this.chapters.length - 1].id;
    const scroll = this.$refs.scroll as HTMLElement;
    setTimeout(() => scroll.scrollTo(0, scroll.scrollHeight) , 1);
  }

  toggle(id: string) {
    this.opened = this.opened === id ? '' : id;
    return this.opened === id;
  }
}
</script>

<template lang="pug">
.chapters
  .list
    .chapter(v-for="chapter in chapters" @click="toggle(chapter.id)" :class="{ open: opened === chapter.id}")
      .chapter-id {{ chapter.id }}
      h3 {{ chapter.title }}
      .sections
        button.section(v-for="section in chapter.sections" @click="goto({ chapterId: chapter.id, sectionId: section.id }); overlay()" :class="{ current: section.id === position.section.id}")
          h4 {{ section.title }}
</template>

<script lang="ts">
import { Position } from "@/store";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { Chapter } from "../../shared/entities";

@Component({
  name: "Chapters",
  components: {},
})
export default class Chapters extends Vue {
  @Prop(Array) chapters: Chapter[];
  @Getter position!: Position;
  @Action goto: Function;
  @Action overlay: Function;
  opened = '';

  async mounted() {
    this.opened = this.position.chapter.id; // || this.chapters[this.chapters.length - 1].id;
    // const scroll = this.$refs.scroll as HTMLElement;
    // console.log(scroll, scroll.scrollHeight);
    // setTimeout(() => scroll.scrollTo(0, scroll.scrollHeight), 1000);
    // console.log(this.$el.querySelector('section.open'))
    await this.$nextTick();
    const top = (this.$el.querySelector('.chapter.open') as HTMLElement).offsetTop;
    (document.body.querySelector('.overlay.chapters') as HTMLElement).scrollTo(0, top);
  }

  toggle(id: string) {
    this.opened = this.opened === id ? '' : id;
    return this.opened === id;
  }
}
</script>

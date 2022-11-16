<template lang="pug">
.chapters
  .list
    .chapter(v-for="chapter in chapters" @click="toggle(chapter.id)" :class="{ open: opened === chapter.id}")
      .chapter-id {{ chapter.id }}
      h3(:key="chapter.id") {{ chapter.title }}
      .sections
        button.section(v-for="section in chapter.sections" @click="goto({ chapterId: chapter.id, sectionId: section.id }); overlay()" :class="{ current: section.id === position.section.id}")
          h4(:key="section.id") {{ section.title }}
</template>

<script lang="ts">
import { Position } from "@/store";
import { scrollTo } from "@/utls/scroll";
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
  @Getter position!: Position;
  @Prop(Array) chapters!: Chapter[];
  @Action goto!: Function;
  @Action overlay!: Function;
  opened = '';

  async mounted() {
    this.opened = this.position.chapter.id;
    await this.$nextTick();
    const top = (this.$el.querySelector('.chapter.open') as HTMLElement).offsetTop;
    // (document.body.querySelector('.overlay.chapters') as HTMLElement).scrollTo(0, Math.max(top - 24, 0));
    // scrollContainer().scrollTo(0, Math.max(top - 24, 0));
    scrollTo(Math.max(top - 24, 0));
  }

  toggle(id: string) {
    this.opened = this.opened === id ? '' : id;
    return this.opened === id;
  }
}
</script>

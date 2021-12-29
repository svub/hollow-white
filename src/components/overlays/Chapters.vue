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
  @Prop(Array) private chapters!: Chapter[];
  @Getter private position!: Position;
  @Action private goto!: Function;
  @Action private overlay!: Function;
  private opened = '';

  async mounted() {
    this.opened = this.position.chapter.id;
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

<template lang="pug">
.chapters(:class="`open-${ current }`")
  .center
    .list
      transition(:name="previous < current ? 'left' : 'right'")
        .chapter(v-for="(chapter, i) in chapters" :key="i" :class="{ open: i === current, left: i < current, right: i > current }" v-if="i === current")
          .chapter-id {{ chapter.id }}
          h3(:key="chapter.id") {{ chapter.title }}
          .sections
            button.section(v-for="section in chapter.sections" @click="goto({ chapterId: chapter.id, sectionId: section.id }); overlay()" :class="{ current: section.id === position.section.id}")
              h4(:key="section.id") {{ section.title }}
    .go.left(:class="{ enabled: current > 0 }" @click="previous = current--") &laquo;
    .go.right(:class="{ enabled: current < chapters.length -1 }" @click="previous = current++") &raquo;
  .dots
    button.dot(v-for="(chapter, index) in chapters" @click="show(index)" :class="{ open: index === current }") {{ chapter.id }}
</template>

<script lang="ts">
import { Position } from "@/store";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { Chapter } from "../../shared/entities";
import { warn } from "@/shared/util";
import { findIndex } from "lodash";

@Component({
  name: "Chapters",
  components: {},
})
export default class Chapters extends Vue {
  @Getter position!: Position;
  @Prop(Array) chapters!: Chapter[];
  @Action goto!: Function;
  @Action overlay!: Function;
  previous = 0;
  current = 0;

  created() {
    this.current = warn('Chapters.created: initial index', findIndex(this.chapters, chapter => chapter.id === this.position.chapter.id))!;
  }

  show(index = this.current) {
    this.current = index;
  }
}
</script>

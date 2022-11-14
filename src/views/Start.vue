<template lang="pug">
.page.start
  .title
    .logo
    h1 {{ book.title }}
    .sub-title(v-if="book.subTitle") {{ book.subTitle }}
  .buttons
    .status(v-if="started")
      span.chapter {{ position.chapter.id }}
      span.progress {{ Math.floor(progress * 100) }}%
    button(@click="startReading", :class="{ start: !started, continue: started }")
    button.options(@click="overlay('options')")
    button.credits(@click="overlay('credits')" v-if="hasCredits")
    button.imprint(@click="overlay('imprint')" v-if="hasImprint")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import intersection from 'lodash/intersection';
import keys from 'lodash/keysIn';
import book from "../book";
import { Specials } from "../shared/entities";
import { Position } from "../store";

@Component({
  name: "Start",
})
export default class Start extends Vue {
  @Action start!: Function;
  @Action overlay!: Function;
  @Getter position!: Position;
  @Getter started!: boolean;
  book = book;
  fullscreenElement = document.body;

  mounted() {
    if (book.config.fullscreen && document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  startReading() {
    if (book.config.fullscreen && !document.fullscreenElement) {
      const prefixes = ['', 'webkit', 'moz', 'ms'].map((prefix) => prefix ? prefix + 'Request' : 'request');
      const methodNames = prefixes.map((prefix) => prefix + 'Fullscreen').concat(prefixes.map((prefix) => prefix + 'FullScreen'));
      const requestMethod = this.fullscreenElement[intersection(keys(this.fullscreenElement), methodNames)?.[0]];
      
      if (requestMethod) {
        requestMethod.call(this.fullscreenElement);
      } 
    }
    this.start();
  }

  get progress(): number {
    // calculate over all sections
    let index = -1;
    let total = 0;
    for (const chapter of this.book.chapters) {
      for (const section of chapter.sections) {
        total++;
        if (chapter.id === this.position.chapter.id && section.id === this.position.section.id)
          index = total;
      }
    }
    return index / total;
  }

  get hasCredits(): boolean {
    return !!this.book!.specials[Specials.credits];
  }
  get hasImprint(): boolean {
    return !!this.book!.specials[Specials.imprint];
  }
}
</script>

<style scoped lang="stylus"></style>

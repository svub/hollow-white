<template lang="pug">
p.paragraph(v-html="element.text" :class="{ current }")
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Paragraph } from "../../shared/entities";
import { log } from "@/shared/util";
import { State } from "vuex-class";

const map = new Map<number, Paragraph>();
let trace = true;

export function getVisibleParagraphs(): Paragraph[] {
  return [...map.values()].sort((a, b) => a.index - b.index);
}

export function resetVisibleParagraphs() {
  return map.clear();
}

export function enableVisibleParagraphTracing(enable = true) {
  log('paragraph map: trace ', enable);
  trace = enable;
}

@Component({
  name: "ParagraphElement",
})
export default class ParagraphElement extends Vue {
  @Prop(Object) element!: Paragraph;
  @State paragraph;

  mounted() {
    log('paragraph map: add?', trace, this.element.index);
    if (trace) {
      map.set(this.element.index, this.element);
    }
  }

  beforeUnmount() {
    log('paragraph map: remove ', this.element.index);
    map.delete(this.element.index);
  }

  get current() {
    const isCurrent = `` + this.element.index == this.paragraph;
    if (isCurrent && this.$el) {
      const elementRect = this.$el.getBoundingClientRect();
      // -120: leave some space for the player below
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight) - 120;

      if (elementRect.bottom > viewHeight) {
        this.$el.scrollIntoView({ behavior: "smooth" });
      }
    }
    return isCurrent;
  }
}
</script>
<style scoped lang="stylus"></style>

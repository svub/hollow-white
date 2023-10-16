<template lang="pug">
p.paragraph(v-html="element.text")
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Paragraph } from "../../shared/entities";
import { log } from "@/shared/util";

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

  mounted() {
    if (trace) {
      log('paragraph map: add ', this.element.index);
      map.set(this.element.index, this.element);
    }
  }

  beforeUnmount() {
    log('paragraph map: remove ', this.element.index);
    map.delete(this.element.index);
  }
}
</script>
<style scoped lang="stylus"></style>

<template lang="pug">
p.paragraph(v-html="text")
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Paragraph } from "../../shared/entities";
import showdown from 'showdown';

@Component({
  name: "ParagraphElement",
})
export default class ParagraphElement extends Vue {
  @Prop(Object) private element: Paragraph;

  get text(): string {
    return new showdown.Converter().makeHtml(this.element.text)
  }
}

// Vue.component('paragraph-element', ParagraphElement);
</script>
<style scoped lang="stylus"></style>

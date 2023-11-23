<template lang="pug">
.text
  .element(v-for="element in elements", :class="componentName(element)")
    component(:is="componentName(element)", :element="element")
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Element } from "../../shared/entities";
import ParagraphElement, { enableVisibleParagraphTracing } from "./ParagraphElement.vue";
import IfElement from "./IfElement.vue";
import ElseElement from "./ElseElement.vue";
import AddItemElement from "./AddItemElement.vue";
import RemoveItemElement from "./RemoveItemElement.vue";
import ChangeStateElement from "./ChangeStateElement.vue";
import StyleElement from "./StyleElement.vue";
import ImageElement from "./ImageElement.vue";

@Component({
  name: "TextElement",
  components: {
    "paragraph-element": ParagraphElement,
    "if-element": IfElement,
    "else-element": ElseElement,
    "addItem-element": AddItemElement,
    "removeItem-element": RemoveItemElement,
    "state-element": ChangeStateElement,
    "style-element": StyleElement,
    "image-element": ImageElement,
  },
})
export default class TextElement extends Vue {
  @Prop(Array) elements!: Element[];
  @Prop({ type: Boolean, default: false }) dontTrace!: boolean;

  // beforeMount() {
  //   if (this.dontTrace) enableVisibleParagraphTracing(false);
  // }
  // mounted() {
  //   if (this.dontTrace) enableVisibleParagraphTracing(true);
  // }

  componentName(element: Element): string {
    return `${element.type}-element`;
  }
}

</script>
<style scoped lang="stylus"></style>

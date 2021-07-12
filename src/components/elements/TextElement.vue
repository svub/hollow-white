<template lang="pug">
.text
  .element(v-for="element in elements", :class="componentName(element)")
    component(:is="componentName(element)", :element="element")
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Element } from "../../shared/entities";
import ParagraphElement from "./ParagraphElement.vue";
import IfElement from "./IfElement.vue";
import ElseElement from "./ElseElement.vue";
import AddItemElement from "./AddItemElement.vue";
import RemoveItemElement from "./RemoveItemElement.vue";
import ChangeStateElement from "./ChangeStateElement.vue";
import StyleElement from "./StyleElement.vue";
import { logJson } from "../../shared/util";

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
  },
})
export default class TextElement extends Vue {
  @Prop(Array) private elements: Element[];

  // mounted() {
  //   logJson('text elements:', this.elements);
  // }

  componentName(element: Element): string {
    return `${element.type}-element`;
  }
}

</script>
<style scoped lang="stylus"></style>

<template lang="pug">
.else
  //- else {{ element.ifCondition }} = {{ !conditionFits }}
  TextElement.text(v-if="!conditionFits", :elements="element.elements")
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Else } from "../../shared/entities";
import { evaluateCondition } from "./IfElement.vue";

@Component({
  name: "ElseElement",
  components: {
    TextElement: () => import("./TextElement.vue"),
  },
})
export default class ElseElement extends Vue {
  @Prop(Object) private element: Else;

  get conditionFits(): boolean {
    return evaluateCondition(this.element.ifCondition, this.$store);
  }
}
</script>
<style scoped lang="stylus"></style>

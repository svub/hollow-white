<template lang="pug">
.style(:class="element.classes")
  //- style {{ element.classes }}
  TextElement.text(:elements="element.elements")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Style } from "../../shared/entities";

@Component({
  name: "StyleElement",
  components: {
    TextElement: () => import("./TextElement.vue"),
  },
})
export default class StyleElement extends Vue {
  @Prop(Object) private element!: Style;
}
</script>
<style scoped lang="stylus"></style>

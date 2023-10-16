<template lang="pug">
img.image(:src="sources[0]" :srcset="sources" :alt="element.alt")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Image } from "../../shared/entities";

@Component({
  name: "ImageElement",
  components: {
    TextElement: () => import("./TextElement.vue"),
  },
})
export default class StyleElement extends Vue {
  @Prop(Object) element!: Image;

  get sources() {
    // TODO add config for what resolutions will be available instead of hard coding ["@1x", "@2x", "@3x"]
    return ["1x", "2x", "3x"].map(modifier => `assets/images/${this.element.id}@${modifier}.jpg ${modifier}`);
  }
}
</script>

<style scoped lang="stylus">
img 
  max-width 100%
</style>

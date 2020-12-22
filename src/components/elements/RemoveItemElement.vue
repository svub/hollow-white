<template lang="pug">
// removeItem {{ element }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Store } from "vuex";
import { Action } from "vuex-class";
import { RemoveItem, Item } from "../../shared/entities";
import { AppState } from "../../store";

@Component({
  name: "RemoveItemElement",
})
export default class RemoveItemElement extends Vue {
  @Prop(Object) private element: RemoveItem;

  @Action removeItem;

  mounted() {
    this.removeItem({ item: this.element });
  }
}
</script>

<style scoped lang="stylus"></style>

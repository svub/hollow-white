<template lang="pug">
//- removeItem {{ element }}
</template>

<script lang="ts">
import { log, logJson } from "../../shared/util";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Action } from "vuex-class";
import { RemoveItem, Item } from "../../shared/entities";

@Component({
  name: "RemoveItemElement",
})
export default class RemoveItemElement extends Vue {
  @Prop(Object) private element: RemoveItem;

  @Action removeItem;

  beforeMount() {
    log('RemoveItemElement.mounted');
    this.doRemoveItem();
  }

  @Watch('element.id', { deep: true }) doRemoveItem() {
    logJson('RemoveItemElement element.id changed', this.element);
    this.removeItem({ item: this.element });
  }
}
</script>

<style scoped lang="stylus"></style>

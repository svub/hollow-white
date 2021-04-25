<template lang="pug">
.add.item(v-observe-visibility="visibilityChanged")
  //- addItem {{ element }} {{ item }}
  ItemElement(:item="item")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { logJson } from "../../shared/util";
import { AddItem, Item } from "../../shared/entities";
import book from "../../book";
import ItemElement from './ItemElement.vue';

@Component({
  name: "AddItemElement",
  components: { ItemElement },
})
export default class AddItemElement extends Vue {
  @Prop(Object) private element: AddItem;
  @State items;
  @Action addItem;

  visibilityChanged(isVisible) {
    logJson("AddItemElement.visibilityChanged", this.element, isVisible);
    if (isVisible) {
      // wait two seconds before adding the item
      setTimeout(() => this.addItem({ item: this.element }), 2000);
    }
  }

  get item(): Item {
    return book.config.items.find((item) => item.id === this.element.id)!;
  }
}
</script>

<style scoped lang="stylus"></style>

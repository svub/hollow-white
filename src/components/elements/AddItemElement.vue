<template lang="pug">
//- .add.item(v-observe-visibility="{ callback: visibilityChanged, once: true, intersection: { threshold: 1 } }")
.add.item(v-observe-visibility="visibilityChanged")
  h3 {{ item.title }}
  img(:src="item.thumbnail")
  //- button(@click="addItem({ item: element })" v-if="!items[element.id]") add
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Store } from "vuex";
import { Action, State } from "vuex-class";
import { log } from "../../../../importer/src/shared/util";
import { AddItem, Item } from "../../shared/entities";
import { AppState } from "../../store";

@Component({
  name: "AddItemElement",
})
export default class AddItemElement extends Vue {
  @Prop(Object) private element: AddItem;

  @State items;
  @Action addItem;

  visibilityChanged(isVisible, entry) {
    log('AddItemElement.visibilityChanged: visible', isVisible);
    if (isVisible) {
      // wait two seconds before adding the item
      setTimeout(() => this.addItem({ item: this.element }), 2000);
    }
  }

  get item(): Item {
    return (this.$store.state as AppState).config.items.find(
      (item) => item.id === this.element.id
    );
  }
}
</script>

<style scoped lang="stylus"></style>

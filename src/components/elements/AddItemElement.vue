<template lang="pug">
.add-item(v-observe-visibility="visibilityChanged")
  ItemElement(v-if="item" :item="item")
  .error(v-else)
    .title Item not found
    .message Item with ID "{{ element.id }}" not found. Did you configure it correctly? Example config:
    pre.example.
      // itemdef {{ element.id }} item link https://github.com/svub/text-adventure-app

      A title for the item

      Some description for the item. Can be multiple lines.

      About the "itemdef" line you see above:
      The item can have a category, here it's "item" and a type, here it's "link" - both are optional.
      There are three types: link, audio, and video
      After the type, add the URL to the link or media file.
      For videos: encode them in the WebM format to support all browsers.

      // enditemdef
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { logJson } from "../../shared/util";
import { AddItem, Item } from "../../shared/entities";
import ItemElement from './ItemElement.vue';
import book from "../../book";

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

  get item(): Item | undefined {
    return book.config.items.find((item) => item && item.id === this.element.id);
  }
}
</script>

<style scoped lang="stylus"></style>

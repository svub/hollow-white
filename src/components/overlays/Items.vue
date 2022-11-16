<template lang="pug">
.items
  .count #[span.current {{ itemCount }}] #[span.total {{ totalItems }}]

  ItemElement(v-for="item in items" :class="[item.id, item.category].join(' ')" :item="item")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TextElement from '../elements/TextElement.vue';
import { Item } from '../../shared/entities';
import { Getter } from 'vuex-class';
import book from '../../book';
import ItemElement from '../elements/ItemElement.vue';

@Component({
  name: 'Items',
  components: { TextElement, ItemElement }
})
export default class Items extends Vue {
  @Prop(Array) itemIds!: string[];
  // @Getter itemCount!: number; // TODO why not this.itemIds.length?

  itemIndex(item: Item): number {
    return this.itemIds.indexOf(item.id);
  }

  get items(): Item[] {
    return this.itemIds.map(id => book.config.items.find(item => item.id === id)!);
  }

  get itemCount(): number {
    return this.items.length;
  }

  get totalItems(): number {
    return book.config.items.length
  }
}
</script>

<style scoped lang="stylus">
</style>

<template lang="pug">
.items
  .item(v-for="item in items")
    .number #[span.current {{ itemIndex(item) }}] #[span.total {{ totalItems }}]
    h3 {{ item.title }}
    img(:src="item.media")
    p(v-if="item.description") {{ item.description }}
    p(v-if="item.category") {{ item.category }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class'
import { Config, Item } from '../../shared/entities';

@Component({
  name: 'Items',
  components: {}
})
export default class Items extends Vue {
  @Prop(Array) items: Item[];
  // @State items: { [id: string]: Item };
  @State config: Config;

  itemIndex(item: Item): number {
    return this.items.map(i => i.id).indexOf(item.id);
  }

  get totalItems(): number {
    return Object.keys(this.items).length;
  }
}
</script>

<style scoped lang="stylus">
</style>

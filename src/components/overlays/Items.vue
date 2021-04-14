<template lang="pug">
.items
  .count #[span.count {{ itemCount }}] #[span.total {{ totalItems }}]

  .item(v-for="item in items" :class="[item.id, item.category].join(' ')")
    .title
      .number #[span.current {{ itemIndex(item) }}] #[span.total {{ totalItems }}]
      h3 {{ item.title }}

    .content
      TextElement.description(:elements="item.elements")
      .media(v-if="item.mediaUrl" :class="item.mediaType")
        a.link(:href="item.mediaUrl") {{ item.title }}
        audio(v-if="item.mediaType == 'audio'" controls :src="item.mediaUrl")
          Your browser does not support embedded audio.
        video(v-if="item.mediaType == 'video'" controls)
          source(:src="item.mediaUrl")
          Your browser does not support embedded video.
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TextElement from '../elements/TextElement.vue';
import { Item } from '../../shared/entities';
import { Getter } from 'vuex-class';

@Component({
  name: 'Items',
  components: { TextElement }
})
export default class Items extends Vue {
  @Prop(Array) items: Item[];
  @Getter itemCount: number;

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

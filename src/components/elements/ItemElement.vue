<template lang="pug">
  .item(:class="[item.id, item.category].join(' ')")
    .title
      .number #[span.current {{ itemIndex(item)+1 }}] #[span.total {{ itemCount }}]
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
import { Getter, State } from 'vuex-class';
import TextElement from './TextElement.vue';
import { Items } from '../../store';
import { Item } from '../../shared/entities';

@Component({
  name: 'ItemElement',
  components: { TextElement }
})
export default class ItemElement extends Vue {
  @Prop(Array) item: Item;
  @State items: Items;
  @Getter itemCount: number;

  itemIndex(): number {
    return this.items.indexOf(this.item.id);
  }
}
</script>

<style scoped lang="stylus">
</style>

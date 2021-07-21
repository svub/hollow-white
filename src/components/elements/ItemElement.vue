<template lang="pug">
  transition(name="flip")
    .item(:class="[item.id, item.category, { flipped }]")
      .flipper
        .title(@click="flipped = true")
          .number #[span.current {{ itemIndex(item)+1 }}] #[span.total {{ itemCount }}]
          h3 {{ item.title }}

        .content
          TextElement.description(@click.native="flipped = false" :elements="item.elements")
          .media(v-if="item.mediaUrl" :class="item.mediaType")
            a.link(v-if="item.mediaType == 'link'" :href="item.mediaUrl") {{ item.title }}
            audio(v-else-if="item.mediaType == 'audio'" controls :src="item.mediaUrl")
              | Your browser does not support embedded audio.
            video(v-else-if="item.mediaType == 'video'" controls)
              source(:src="item.mediaUrl")
              | Your browser does not support embedded video.
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, State } from 'vuex-class';
import { Items } from '../../store';
import { Item } from '../../shared/entities';

@Component({
  name: 'ItemElement',
  components: {
    // avoid error due to recursive use of TextElement
    // alternative solutions: https://stackoverflow.com/a/58875919/548955
    TextElement: () => import('./TextElement.vue'),
  }
})
export default class ItemElement extends Vue {
  @Prop(Object) item: Item;
  @State items: Items;
  @Getter itemCount: number;
  flipped = false;

  itemIndex(): number {
    return this.items.indexOf(this.item.id);
  }
}
</script>

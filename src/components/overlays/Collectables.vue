<template lang="pug">
.collectables(:class="showing")
  .count
    span.current {{ showing == 'images' ? images.length : items.length }} 
    span.total {{ showing == 'images' ? allImages.length : totalItems }}

  .tabs
    button(v-for="list in ['images', 'items']" :class="`${list} ${list === showing ? 'current' : ''}`" @click="showing = list")

  .list
    transition
      .images(v-if="showing === 'images'" key="images")
        ImageElement(v-for="image in images" :class="image.id" :element="image")
      .items(v-if="showing === 'items'" key="items")
        ItemElement(v-for="item in items" :class="[item.id, item.category].join(' ')" :item="item")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TextElement from '../elements/TextElement.vue';
import { ElementType, Image, Item, Reference } from '../../shared/entities';
import book from '../../book';
import ItemElement from '../elements/ItemElement.vue';
import ImageElement from '../elements/ImageElement.vue';
import { State } from 'vuex-class';
import { getAllElements } from '@/shared/util';
import { find, uniqBy } from 'lodash';

@Component({
  name: 'Collectables',
  components: { TextElement, ItemElement, ImageElement }
})
export default class Collectables extends Vue {
  @Prop(Array) itemIds!: string[];
  @State path!: Reference[];
  allImages = uniqBy(getAllElements<Image>(book, ElementType.image), ir => ir.chapterId + ir.sectionId);
  showing = 'images';

  itemIndex(item: Item): number {
    return this.itemIds.indexOf(item.id);
  }

  get items(): Item[] {
    return this.itemIds.map(id => book.config.items.find(item => item.id === id)!);
  }

  get images(): Image[] {
    const sectionIds = this.path.map(ref => ref.sectionId);
    return this.allImages
      .filter(imageRef => find(this.path, ref => imageRef.chapterId === ref.chapterId && imageRef.sectionId === ref.sectionId))
      .map(ref => ref.element);
  }

  // get itemCount(): number {
  //   return this.items.length;
  // }

  // get imageCount(): number {
  //   return this.items.length;
  // }

  get totalItems(): number {
    return book.config.items.length
  }
}
</script>

<style scoped lang="stylus">
</style>

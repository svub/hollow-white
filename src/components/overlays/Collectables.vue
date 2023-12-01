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
import { ElementType, Image, Item, Reference, sameRef } from '../../shared/entities';
import book from '../../book';
import ItemElement from '../elements/ItemElement.vue';
import ImageElement from '../elements/ImageElement.vue';
import { State } from 'vuex-class';
import { getAllElements } from '@/shared/util';
import { find, uniqBy } from 'lodash';


export function allImages() {
  return uniqBy(getAllElements<Image>(book, ElementType.image), ir => ir.chapterId + ir.sectionId);
}

export function allImagesCollected(path: Reference[]) {
  return allImages() // filter out images that belong to sections in the path
    .filter(imageRef => find(path, ref => sameRef(imageRef, ref)))
    .map(ref => ref.element);
}

@Component({
  name: 'Collectables',
  components: { TextElement, ItemElement, ImageElement }
})
export default class Collectables extends Vue {
  @Prop(Array) itemIds!: string[];
  @State path!: Reference[];
  allImages = allImages()
  showing = this.images.length > 0 ? 'images' : 'items';

  itemIndex(item: Item): number {
    return this.itemIds.indexOf(item.id);
  }

  get items(): Item[] {
    return this.itemIds.map(id => book.config.items.find(item => item.id === id)!);
  }

  get images(): Image[] {
    return allImagesCollected(this.path);
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

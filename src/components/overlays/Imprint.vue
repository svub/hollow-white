<template lang="pug">
.imprint
  TextElement.text(:elements="imprint.elements")
  .next.links(v-if="imprint.next && imprint.next.length > 0" :class="'count-'+imprint.next.length")
    button(v-for="link in imprint.next" @click="open(link)") {{ link.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Functions, Overlays, Section, SpecialLink, Specials } from '../../shared/entities';
import { error, logJson } from '../../shared/util';
import book from "../../book";
import TextElement from '../elements/TextElement.vue';

@Component({
  name: 'Imprint',
  components: { TextElement }
})
export default class Imprint extends Vue {
  @Action overlay!: Function;
  private book = book;

  get imprint(): Section {
    logJson('Imprint', this.book.specials, this.book.specials[Specials.imprint]);
    return this.book.specials[Specials.imprint] ?? error('Imprint not found!');
  }

  open(link: SpecialLink) {
    if (link.id === Functions.share) return this.share(link.title, link.data);
    if (Overlays[link.id]) return this.overlay(link.id);
  }

  async share(title: string, url?: string) {
    if (!url) error('Imprint.share: url not defined', title);
    const data = { title, url };
    let nativeFailed = false;
    if (navigator.share) {
      try { await navigator.share(data); }
      catch (e) { nativeFailed = true }
    }
    if (!navigator.share || nativeFailed) {
      this.overlay({ overlay: Overlays.shareOverlay, data });
    }
  }
}
</script>

<style scoped lang="stylus">
</style>

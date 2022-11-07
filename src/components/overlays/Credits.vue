<template lang="pug">
.credits
  TextElement.text(:elements="credits.elements")
  .next.links(v-if="credits.next && credits.next.length > 0" :class="'count-'+credits.next.length")
    button(v-for="link in credits.next" @click="open(link)") {{ link.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Functions, Overlays, Section, Link, SpecialLink, Specials, isSpecialLink } from '../../shared/entities';
import { error, logJson } from '../../shared/util';
import book from "../../book";
import TextElement from '../elements/TextElement.vue';

@Component({
  name: 'Credits',
  components: { TextElement }
})
export default class Credits extends Vue {
  @Action overlay!: Function;
  private book = book;

  get credits(): Section {
    logJson('Credits', this.book.specials, this.book.specials[Specials.credits]);
    return this.book.specials[Specials.credits] ?? error('Credits not found!');
  }
  
  open(link: SpecialLink | Link) {
    if (isSpecialLink(link)) {
      if (link.id === Functions.share) return this.share(link.title, link.data);
      if (Overlays[link.id]) return this.overlay(link.id);
    }
  }

  async share(title: string, url?: string) {
    if (!url) error('Credits.share: url not defined', title);
    const data = { title, url };
    let nativeFailed = false;
    if (navigator.share) {
      if (!(navigator.canShare(data))) {
        alert(`Can't share data ${JSON.stringify(data)}`);
      } else {
        try { await navigator.share(data); }
        catch (e) { 
          alert(e);
          alert((e as Error).message);
          nativeFailed = true;
        }
      }
    }
    if (!navigator.share || nativeFailed) {
      this.overlay({ overlay: Overlays.shareOverlay, data });
    }
  }
}
</script>

<style scoped lang="stylus">
</style>

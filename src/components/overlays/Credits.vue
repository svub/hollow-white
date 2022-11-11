<template lang="pug">
.credits
  TextElement.text(:elements="credits.elements")
  .next.links(v-if="credits.next && credits.next.length > 0" :class="'count-'+credits.next.length")
    button(v-for="link in credits.next" @click="open(link)") {{ link.title }}
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Section, Specials } from '../../shared/entities';
import { error, logJson } from '../../shared/util';
import book from "../../book";
import TextElement from '../elements/TextElement.vue';
import { TextBase } from '@/utls/TextBase';

@Component({
  name: 'Credits',
  components: { TextElement }
})
export default class Credits extends TextBase {
  @Action overlay!: Function;
  private book = book;

  get credits(): Section {
    logJson('Credits', this.book.specials, this.book.specials[Specials.credits]);
    return this.book.specials[Specials.credits] ?? error('Credits not found!');
  }  
}
</script>

<style scoped lang="stylus">
</style>

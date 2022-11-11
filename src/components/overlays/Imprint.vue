<template lang="pug">
.imprint
  TextElement.text(:elements="imprint.elements")
  .next.links(v-if="imprint.next && imprint.next.length > 0" :class="'count-'+imprint.next.length")
    button(v-for="link in imprint.next" @click="open(link)") {{ link.title }}
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
  name: 'Imprint',
  components: { TextElement }
})
export default class Imprint extends TextBase {
  @Action overlay!: Function;
  private book = book;

  get imprint(): Section {
    logJson('Imprint', this.book.specials, this.book.specials[Specials.imprint]);
    return this.book.specials[Specials.imprint] ?? error('Imprint not found!');
  }
}
</script>

<style scoped lang="stylus">
</style>

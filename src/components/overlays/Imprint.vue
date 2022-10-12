<template lang="pug">
.imprint
  TextElement.text(:elements="imprint.elements")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Section, Specials } from '../../shared/entities';
import { error, logJson } from '../../shared/util';
import book from "../../book";
import TextElement from '../elements/TextElement.vue';

@Component({
  name: 'Imprint',
  components: { TextElement }
})
export default class Imprint extends Vue {
  private book = book;

  get imprint(): Section {
    logJson('Imprint', this.book.specials, this.book.specials[Specials.imprint]);
    return this.book.specials[Specials.imprint] ?? error('Imprint not found!');
  }
}
</script>

<style scoped lang="stylus">
</style>

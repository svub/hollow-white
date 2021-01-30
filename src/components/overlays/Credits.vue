<template lang="pug">
.credits
  .title
    h2.credits

  TextElement.text(:elements="credits.elements")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class'
import { Book, Section, Specials } from '../../shared/entities';
import { error, logRaw } from '../../shared/util';
import book from "../../book";

@Component({
  name: 'Credits',
  components: {}
})
export default class Credits extends Vue {
  book = book;

  get credits(): Section {
    logRaw('credits', this.book.specials);
    logRaw('credits', this.book!.specials[Specials.credits]);
    if (this.book!.specials[Specials.credits] !== undefined) {
      error('Credits not found!');
    }
    return this.book!.specials[Specials.credits];
  }
}
</script>

<style scoped lang="stylus">
</style>

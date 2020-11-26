<template lang="pug">
  .page.start
    .title
      .logo logo
      h1 hollow white
      .tag Das interaktive mystery Textadventure
    .buttons
      button.start(@click="start") {{ started ? 'Fortsetzen' : 'Beginnen' }}
      button.options Optionen
      button.imprint Impressum
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class'

  @Component({
    name: 'Start',
  })
  export default class Start extends Vue {
    @State started;
    @Action start;
  }
</script>

<style scoped lang="stylus">
</style>

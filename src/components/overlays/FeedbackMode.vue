<template lang="pug">
.feedback-mode
  .state
    h3
    p
    textarea {{ stateString }}

  a.feedback-link(:href="config.feedbackLink")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import config from '../../config';

@Component({
  name: 'FeedbackMode',
  components: {}
})
export default class FeedbackMode extends Vue {
  config = config;

  get stateString(): string {
    return JSON.stringify(this.$store.state, undefined, ' ');
  }
}
</script>

<style scoped lang="stylus">
textarea
  width 100%
  height 20em
</style>

<template lang="pug">
.feedback-mode
  .state
    h3 Feedback
    p For giving feedback or reporting issues, please include the following text as is.
    textarea {{ stateString }}

  a.feedback-link(v-if="config.feedbackMode && config.feedbackMode.enabled" :href="config.feedbackMode.feedbackLink") Feedback link
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import book from '../../book';

@Component({
  name: 'FeedbackMode',
  components: {}
})
export default class FeedbackMode extends Vue {
  config = book.config;

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

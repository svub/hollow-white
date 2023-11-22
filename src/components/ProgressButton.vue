<template lang="pug">
button.progress-button(:style="`--progress: ${progress}`" :data-progress="progress")
  .progress(:class="{ beyondHalf: progress > 0.5 }")
    .circle
    .circle.right
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ProgressButton',
  components: {}
})
export default class ProgressButton extends Vue {
  @Prop({ type: Number, default: 0, required: true }) progress;
}
</script>

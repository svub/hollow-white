<template lang="pug">
.share
  .title
    h2 {{ title }}

  p.intro

  input.url(:value="url")

  p.copied(v-if="copied")

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Share',
  components: {}
})
export default class Share extends Vue {
  @Prop(String) url: string;
  @Prop(String) title: string;

  copied = false;

  mounted() {
    setTimeout(this.copy.bind(this), 0);
  }

  async copy() {
    await this.$nextTick();
    const input = this.$el.querySelector('input');
    input.focus();
    input.select();
    try {
      this.copied = document.execCommand('copy');
    } catch (e) {
      console.warn('copy failed', e);
    }
  }

}
</script>

<style scoped lang="stylus">
</style>

<template lang="pug">
.options
  .title
    h2.options

  .list
    .option(v-for="option in config.options")
      label {{ option.label }}
      .choices
        .choice(v-for="choice in option.choices")
          button(@click="choose(option, choice)" :class="") {{ choice.label }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class'
import { Choice, Config, Option } from '../../shared/entities';
import { error, logRaw } from '../../shared/util';

@Component({
  name: 'Options',
  components: {},
})
export default class Options extends Vue {
  @State config: Config;
  @State options: Options;
  @Action setOption: Function;

  choose(option: Option, choice: Choice) {
    this.setOption(option.id, choice.id);
  }
}
</script>

<style scoped lang="stylus">
</style>

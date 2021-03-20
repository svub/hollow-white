<template lang="pug">
.options
  .title
    h2.options

  .reset(v-if="started")
    label
    button(@click="confirm = true")
    transition(name="fade" appear)
      .confirm(v-if="confirm")
        h2
        p
        button.ok(@click="reset(); confirm = false")
        button.cancel(@click="confirm = false")

  .list
    .option(v-for="option in config.options" :class="option.id")
      label {{ option.title }}
      .choices
        .choice(v-for="choice in option.choices" :class="choice.id")
          button(@click="choose(option, choice)" :class="{ active: options[option.id] === choice.id }") {{ choice.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class'
import { Choice, Option } from '../../shared/entities';
import { Options as OptionsType} from '../../store';
import config from '../../config';

@Component({
  name: 'Options',
  components: {
  },
})
export default class Options extends Vue {
  @State options: OptionsType;
  @Getter started: boolean;
  @Action setOption: Function;
  @Action reset: Function;
  config = config;
  confirm = false;

  choose(option: Option, choice: Choice) {
    this.setOption({ option, choice });
  }

  // doReset() {
  //   if (confirm('Really start from scratch?')) this.reset()
  // }
}
</script>

<style scoped lang="stylus">
</style>

<template lang="pug">
.options
  .reset(v-if="started")
    label
    button(@click="confirm = true")
    transition(name="fade" appear)
      .confirm(v-if="confirm")
        h2
        p
        button.ok.progress(@click="reset({ keepItems: true }); confirm = false")
        button.ok.all(@click="reset(); confirm = false")
        button.cancel(@click="confirm = false")

  .list
    .option(v-for="option in config.options" v-if="option.choices.length > 1" :class="option.id")
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
import book from '../../book';

@Component({
  name: 'Options',
  components: {
  },
})
export default class Options extends Vue {
  @Action private setOption!: Function;
  @State options!: OptionsType;
  @Getter started!: boolean;
  @Action reset!: Function;
  config = book.config;
  confirm = false;

  choose(option: Option, choice: Choice) {
    this.setOption({ option, choice });
  }
}
</script>

<style scoped lang="stylus">
</style>

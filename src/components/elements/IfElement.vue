<template lang="pug">
  .if
    p if {{ element.condition }} = {{ conditionFits }}
    TextElement.text(v-if="conditionFits" :elements="element.elements")
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { If } from '../../shared/entities';
  import { log } from '../../shared/util';
  import { AppState } from '../../store';
  import TextElement from './TextElement.vue';

  export function evaluateCondition(condition: string, store: Store<AppState>): boolean {
    // examples conditions (case insensitive), "IF" is not part of condition:
    // // IF STATE karma > 0
    // // IF ITEM banana
    const elements = condition.split(' ')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const appState = store.state;
    const name = elements[1];
    log('if test', elements[0].toLowerCase(), name);
    /* eslint-disable no-case-declarations */
    switch (elements[0].toLowerCase()) {
      case 'state':
        if (elements.length != 4) {
          throw new Error(`Failed to parse condition "${condition}": should be four elements; example: STATE x > 0`);
        }
        const state = appState.states[name];
        if (!state) {
          throw new Error(`State ${elements[1]} not found`);
        }
        log('if test state', state);
        const value = parseInt(elements[3]);
        log('if test value', value);
        switch (elements[2]) {
          case '=':
          case '==':
          case '===': return state.value == value;
          case '<': return state.value < value;
          case '<=': return state.value <= value;
          case '>': return state.value > value;
          case '>=': return state.value >= value;
          case '!=':
          case '!==': return state.value != value;
          default:
            throw new Error(`Operator ${elements[2]} not supported. Support: =, <, <=, >, >=, !=`);
        }
      case 'item':
        return !!appState.items[name];
      default:
        throw new Error(`Type ${elements[0]} not supported. Supported: state, item`);
    }
  }

  @Component({
    name: 'IfElement',
    components: {
      TextElement: () => import('./TextElement.vue'),
    },
  })
  export default class IfElement extends Vue {
    @Prop(Object) private element: If;

    get conditionFits(): boolean {
      return evaluateCondition(this.element.condition, this.$store);
    }
  }

</script>
<style scoped lang="stylus">
</style>

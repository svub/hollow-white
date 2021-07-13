<template lang="pug">
.if
  //- if {{ element.condition }} = {{ conditionFits }}
  TextElement.text(v-if="conditionFits", :elements="element.elements")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Store } from "vuex";
import { If } from "../../shared/entities";
import { log, warn, error } from "../../shared/util";
import { AppState } from "../../store";
import TextElement from "./TextElement.vue";

export function evaluateCondition(condition: string, store: Store<AppState>): boolean {
  // examples conditions (case insensitive), "IF" is not part of condition:
  // // IF STATE karma > 0
  // // IF ITEM banana
  const elements = condition
    .split(" ")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const appState = store.state;
  const name = elements[1].toLowerCase();
  const type = elements[0].toLowerCase();
  /* eslint-disable no-case-declarations */
  const evaluate = () => {
    switch (type) {
      case "state":
        if (elements.length != 4) {
          error(`Failed to parse condition "${condition}": should be four elements; example: STATE x > 0`);
        }
        if (!appState.states[name]) {
          warn(`State ${elements[1]} not found`);
        }
        const state = appState.states[name]?.value ?? 0;
        const value = parseInt(elements[3]);
        log("if.evaluate: state, value", state, value);
        switch (elements[2]) {
          case "=":
          case "==":
          case "===":
            return state == value;
          case "<":
            return state < value;
          case "<=":
            return state <= value;
          case ">":
            return state > value;
          case ">=":
            return state >= value;
          case "!=":
          case "!==":
            return state != value;
          default:
            throw new Error(
              `Operator ${elements[2]} not supported. Support: =, <, <=, >, >=, !=`
            );
        }
      case "item":
        return appState.items.indexOf(name) >= 0;
      default:
        throw new Error(
          `Type ${elements[0]} not supported. Supported: state, item`
        );
    }
  };
  const result = evaluate();
  log("if.evaluate: type, var, rest, result", type, name, elements.slice(2), result);
  return result;
}

@Component({
  name: "IfElement",
  components: {
    TextElement: () => import("./TextElement.vue"),
  },
})
export default class IfElement extends Vue {
  @Prop(Object) private element: If;

  get conditionFits(): boolean {
    return evaluateCondition(this.element.condition, this.$store);
  }
}
</script>
<style scoped lang="stylus"></style>

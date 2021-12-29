<template lang="pug">
//- changeState {{ element }}
</template>

<script lang="ts">
import { log, logJson } from "../../shared/util";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Action } from "vuex-class";
import { ChangeState } from '../../shared/entities';

@Component({
  name: "ChangeStateElement",
})
export default class ChangeStateElement extends Vue {
  @Prop(Object) private element!: ChangeState;
  @Action private changeState;

  beforeMount() {
    log('ChangeStateElement.mounted');
    this.stateChange();
  }

  @Watch('element.id', { deep: true }) stateChange() {
    logJson('ChangeStateElement element.id changed', this.element);
    this.changeState({ state: this.element });
  }
}
</script>

<style scoped lang="stylus"></style>

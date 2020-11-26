<template lang="pug">
  // changeState {{ element }}
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Action } from 'vuex-class';
  import { ChangeState } from '../../shared/entities';
  import { AppState } from '../../store';

  @Component({
    name: 'ChangeStateElement',
  })
  export default class ChangeStateElement extends Vue {
    @Prop(Object) private element: ChangeState;

    @Action changeState;

    mounted() {
      this.changeState(this.element);
    }
  }

</script>

<style scoped lang="stylus">
</style>

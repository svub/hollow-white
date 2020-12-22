<template lang="pug">
  .style(:class="element.classes")
    TextElement.text(v-if="conditionFits" :elements="element.elements")
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Style } from '../../shared/entities';
  import { log } from '../../shared/util';
  import { AppState } from '../../store';
  import TextElement from './TextElement.vue';

  @Component({
    name: 'StyleElement',
    components: {
      TextElement: () => import('./TextElement.vue'),
    },
  })
  export default class StyleElement extends Vue {
    @Prop(Object) private element: Style;
  }

</script>
<style scoped lang="stylus">
</style>

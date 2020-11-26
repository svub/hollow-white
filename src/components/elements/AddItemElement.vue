<template lang="pug">
  .add.item
    // addItem {{ element }} {{ item }}
    h3 {{ item.title }}
    img(:src="item.thumbnail")
    button(@click="addItem({ item: element })" v-if="!added") add
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Store } from 'vuex';
  import { Action } from 'vuex-class';
  import { AddItem, Item } from '../../shared/entities';
  import { AppState } from '../../store';

  @Component({
    name: 'AddItemElement',
  })
  export default class AddItemElement extends Vue {
    @Prop(Object) private element: AddItem;

    @Action addItem;

    get item(): Item {
      return (this.$store.state as AppState).config.items
        .find(item => item.id === this.element.id);
    }

    get added(): boolean {
      return !!(this.$store.state as AppState).items[this.element.id];
    }
  }

</script>
<style scoped lang="stylus">
</style>

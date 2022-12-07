<template lang="pug">
transition(name="flip")
  .item(:class="[item.id, item.category, { flipped, visible }]" v-observe-visibility="visibilityChanged")
    .flipper
      .title(@click="flipped = true")
        .number #[span.current {{ itemIndex+1 }}] #[span.total {{ itemCount }}]
        h3 {{ item.title }}
      .content()
        TextElement.description(@click.native="flipped = false" :elements="item.elements")
        .media(v-if="item.mediaUrl" :class="[ item.mediaType, { playing: mediaPlaying }]" :style="`--progress: ${mediaProgress}`")
          a.link(v-if="item.mediaType == 'link'" :href="item.mediaUrl") {{ item.title }}
          .audio(v-else-if="item.mediaType == 'audio'")
            audio(ref="audio" :src="url")
            button(@click="toggleAudio()")
              .progress(:class="{ beyondHalf: mediaProgress > 0.5 }")
                .circle
                .circle.right
          video(v-else-if="item.mediaType == 'video'" controls)
            source(:src="url")
            | Your browser does not support embedded video.
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, State } from 'vuex-class';
import { Items } from '../../store';
import { Item } from '../../shared/entities';
import { log, logRaw } from '@/shared/util';
import { throttle } from 'lodash';

@Component({
  name: 'ItemElement',
  components: {
    // avoid error due to recursive use of TextElement
    // alternative solutions: https://stackoverflow.com/a/58875919/548955
    TextElement: () => import('./TextElement.vue'),
  }
})
export default class ItemElement extends Vue {
  @Prop(Object) item!: Item;
  @State items!: Items;
  @Getter itemCount!: number;
  flipped = false;
  visible = false;
  mediaPlaying = false;
  mediaProgress = 0;

  visibilityChanged(isVisible) {
    log("ItemElement.visibilityChanged", isVisible);
    this.visible = isVisible;
    if (!isVisible) {
      this.flipped = false;
      this.toggleAudio(false);
    }
  }

  // mounted() {
  //   this.toggleAudio(false);
  // }

  toggleAudio(play = !this.mediaPlaying) {
    if (!this.audio) return;
    logRaw("toggleAudio", play, this.mediaPlaying, this.mediaProgress);
    const updateAudioProgress = throttle(() => {
      logRaw("media prgress update", this.mediaProgress, this.audio.currentTime, this.audio.duration);
      this.mediaProgress = this.audio.currentTime / this.audio.duration;
    }, 1000);
    const ended = () => this.toggleAudio(false);
    if (play) {
      this.audio.play();
      this.audio.addEventListener("timeupdate", updateAudioProgress);
      this.audio.addEventListener("ended", ended);
    }
    else {
      this.audio.pause();
      this.audio.removeEventListener("timeupdate", updateAudioProgress);
      this.audio.removeEventListener("ended", ended);
      this.mediaProgress = this.audio.currentTime = 0;
    }
    this.mediaPlaying = play;
  }

  get itemIndex(): number {
    return this.items.indexOf(this.item.id);
  }

  get audio(): HTMLAudioElement {
    return this.$refs.audio as HTMLAudioElement;
  }

  // get mediaPlaying(): boolean {
  //   return !this.audio.paused;
  // }

  get url(): string | undefined {
    // TODO put the "silent.mp3" into a var of some sorts
    return this.flipped ? this.item.mediaUrl : '/assets/items/silent.mp3'; // load when flipping to the backside only
  }
}
</script>

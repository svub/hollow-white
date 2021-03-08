<template lang="pug">
.page.read
  nav
    button.back(@click="page('start')")
    .menu
      button.feedback-mode(v-if="config.feedbackMode" @click="overlay('feedbackMode')")
      button.chapters(@click="overlay('chapters')")

  .title
    //- .icon icon
    .position(v-if="config.feedbackMode") {{ position.chapter.id }}-{{ position.section.id }}
    h2(v-if="position.chapter.sections.indexOf(position.section) === 0") {{ position.chapter.title }}
    h3 {{ position.section.title }}

  TextElement.text(:elements="position.section.elements")

  .next.links(:class="'count-'+position.section.next.length")
    button(
      v-for="link in position.section.next",
      @click="open(link)"
      :disabled="!enabled(link)"
      :class="{ selected: selected(link) }") {{ link.title }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import last from "lodash/last";
// import hyphenopoly from "hyphenopoly";
import { Link, SpecialLink, isSpecialLink, Reference, Overlays, Functions, Places, Pages } from "../shared/entities";
import TextElement from "../components/elements/TextElement.vue";
import { inPath, Position } from "../store";
import config from "../config";
import { error, logJson } from "../shared/util";

@Component({
  name: "Read",
  components: { TextElement },
})
export default class Read extends Vue {
  @State path!: Reference[];
  @Action page!: Function;
  @Action goto!: Function;
  @Action overlay!: Function;
  @Action reset!: Function;
  @Getter position!: Position;
  // translator: Function;
  config = config;

  // not working :( - can't find a suitable version that works for dynamic languages
  // might have to do that as part of the parsing process
  // async created() {
  //   const lang = config.language || "en-us";
  //   log('Read created', lang);
  //   const hyphenator = hyphenopoly.config({ "require": [lang] });
  //   logRaw('create hypenator', hyphenator);
  //   this.translator = await hyphenator.get(lang);
  //   logRaw('create translator', this.translator);
  // }

  enabled(link: Link | SpecialLink): boolean {
    // enabled if: decision taken before (in path); or if last in progress == current (any decision possible)
    if (this.path.length === 0 || isSpecialLink(link) || this.selected(link)) return true;
    const lastPos: Reference = last(this.path)!;
    return ((lastPos.chapterId === this.position.chapter.id) && lastPos.sectionId === this.position.section.id);
  }

  selected(link: Link | SpecialLink): boolean {
    if (isSpecialLink(link)) return false;
    return inPath(link, this.path);
  }

  open(link: Link | SpecialLink) {
    if (isSpecialLink(link)) {
      // Special functions
      if (link.id === Functions.reset) return this.reset();
      if (link.id === Functions.share) return this.share(link.title, link.data);
      // Pages
      if (Pages[link.id]) return this.goto(link);
      // Overlays
      if (Overlays[link.id]) return this.overlay(link.id);
    }
    this.goto(link);
  }

  share(title: string, url?: string) {
    if (!url) error('Read.share: url not defined', title);
    const data = { title, url };
    if (navigator.share) {
      navigator.share(data);
    }
    else {
      this.overlay({ overlay: Overlays.shareOverlay, data });
    }
  }

  @Watch('position') pageChange() {
    logJson('page change', this.position.section);
  }
}
</script>

<style scoped lang="stylus"></style>

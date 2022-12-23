<template web lang="pug">
main(:class="page" :lang="lang")
  transition(name="page")
    //- use dynamic component: component(:is=page)
    Start(key="1", v-if="page === 'start'")
    Read(key="2", v-if="page === 'read'")
    Tester(key="3", v-if="page === 'test'")
  transition(name="overlay" appear)
    .backdrop(v-if="!!overlay" @click.self="setOverlay('')")
      .overlay(:class="overlay")
        .title
          h2
        .content
          Chapters(v-if="overlay === 'chapters'" :chapters="chapters")
          Items(v-if="overlay === 'items'" :itemIds="items")
          Credits(v-if="overlay === 'credits'")
          Imprint(v-if="overlay === 'imprint'")
          Options(v-if="overlay === 'options'")
          FeedbackMode(v-if="overlay === 'feedbackMode'")
          Share(v-if="overlay === 'shareOverlay'" :url="overlayData.url" :title="overlayData.title")
      .actions
        button.close(@click="setOverlay('')")
  //- HelloWorld(:msg="msg")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import uniq from "lodash/uniq";
// import localforage from "localforage";
import Start from "./views/Start.vue";
import Read from "./views/Read.vue";
import Tester from "./views/Tester.vue";
import book from "./book";
import { clone, logJson, warn } from "./shared/util";
import appState from "./store";
import { Option, Reference } from "./shared/entities";
import Chapters from './components/overlays/Chapters.vue';
import Items from './components/overlays/Items.vue';
import Credits from './components/overlays/Credits.vue';
import Imprint from './components/overlays/Imprint.vue';
import Options from './components/overlays/Options.vue';
import FeedbackMode from './components/overlays/FeedbackMode.vue';
import Share from './components/overlays/Share.vue';
import logRemote from './utls/logRemote';

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

@Component({
  name: "home",
  components: { Start, Read, Tester, Chapters, Items, Credits, Imprint, Options, FeedbackMode, Share },
})
export default class App extends Vue {
  @State page;
  @State overlay;
  @State overlayData;
  @State theme;
  @State items;
  @State path!: Array<Reference>;
  @State options!: { [id: string]: Option };
  @Action init;
  @Action("page") setPage;
  @Action("overlay") setOverlay;

  config = book.config;


  created() {
    logJson('App.created state', this.$store.state);

    // start on particular page for testing
    const testPage = localStorage.getItem("testPage");
    if (testPage) {
      warn("TEST: going to page ", testPage);
      this.setPage(testPage);
    }
    // open particular overlay for testing
    const testOverlay = localStorage.getItem("testOverlay");
    if (testOverlay) {
      warn("TEST: opening overlay ", testOverlay);
      this.setOverlay(testOverlay);
    }

    // add import and export functionality for indexedDB for testing purposes
    // localforage.config({ name: "vuex" });
    // const store = localforage;
    // console.log(store);
    // window["exportDb"] = async () => {
    //   const result: Array<Record<string, any>> = [];
    //   console.log(await store.keys());
    //   await store.iterate((value, key) => {
    //     console.log(key, value);
    //     result.push({ key, value });
    //   });
    //   return result;
    // };

    // set root lang
    document.documentElement.lang = this.lang;

    // for debugging and testing
    window["appState"] = appState;

    document.title = book.title;

    logRemote(`init_${location.search.replace('?', '')}`);
  }

  mounted() {
    this.updateClasses();
  }

  get chapters() {
    return logJson('progress',
      uniq(this.path.map(ref => ref.chapterId))
      .map(id => clone(book.chapters.find(chapter => chapter.id === id)))
      .filter(chapter => !!chapter)
      .map((chapter) => {
        chapter!.sections = chapter!.sections
          .filter(section => !!this.path.find(r => r.chapterId === chapter!.id && r.sectionId === section.id))
          .map(section => ({ id: section.id, title: section.title, next: [], elements: [] }));
        return chapter;
      }))!;
  }

  get lang() {
    return this.config.language || 'en';
  }

  @Watch('options', { deep: true, immediate: true })
  @Watch('overlay', { immediate: true })
  updateClasses() {
    document.documentElement.className = Object.values(this.options).join(' ') + (this.overlay ? ' overlay-open' : '');
  }
}
</script>

<style web lang="stylus" src="styles/web/index.styl"></style>
<style native lang="stylus" src="styles/mobile/index.styl"></style>

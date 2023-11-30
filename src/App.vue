<template web lang="pug">
main(:class="page" :lang="lang")
  transition(name="page")
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
          Collectables(v-if="overlay === 'collectables'" :itemIds="items")
          Credits(v-if="overlay === 'credits'")
          Imprint(v-if="overlay === 'imprint'")
          Options(v-if="overlay === 'options'")
          FeedbackMode(v-if="overlay === 'feedbackMode'")
          Share(v-if="overlay === 'shareOverlay'" :url="overlayData.url" :title="overlayData.title")
          //- ConsentOverlay(v-if="overlay === 'consent'")
      .actions
        button.close(@click="closeOverlay()")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { mapFields } from 'vuex-map-fields';
import uniq from "lodash/uniq";
import Start from "./views/Start.vue";
import Read from "./views/Read.vue";
import Tester from "./views/Tester.vue";
import book from "./book";
import { clone, logJson, waitFor, warn } from "./shared/util";
import appState from "./store";
import { Option, Overlays, Reference } from "./shared/entities";
import Chapters from './components/overlays/Chapters.vue';
import Collectables from './components/overlays/Collectables.vue';
import Credits from './components/overlays/Credits.vue';
import Imprint from './components/overlays/Imprint.vue';
import Options from './components/overlays/Options.vue';
import FeedbackMode from './components/overlays/FeedbackMode.vue';
import Share from './components/overlays/Share.vue';
// import ConsentOverlay from './components/overlays/ConsentOverlay.vue';
import logRemote from './utls/logRemote';
import { scrollUpThen } from "./utls/scroll";

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

@Component({
  name: "home",
  components: { Start, Read, Tester, Chapters, Collectables, Credits, Imprint, Options, FeedbackMode, Share },
  // computed: {
  //   ...mapFields(['consent',]),
  // },
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
  // consent?: Consent;

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

    // set root lang
    document.documentElement.lang = this.lang;

    // for debugging and testing
    // Example use: window.appState.dispatch('goto', { chapterId: '8', sectionId: '008' }); 
    window["appState"] = appState;

    document.title = book.title;

    logRemote('app', 'init', location.search.replace('?', ''));
  }

  mounted() {
    this.updateClasses();

    // setTimeout(() => {
    //   const MAX_CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000; // days
    //   // warn('consent age', this.consent?.date.getTime(), new Date().getTime(), new Date().getTime() - MAX_CONSENT_DURATION);
    //   if (!this.consent || (this.consent.date.getTime() < new Date().getTime() - MAX_CONSENT_DURATION)) {
    //     this.consent = undefined;
    //     this.setOverlay(Overlays.consent);
    //   }
    // }, 1000);
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

  async closeOverlay() {
    scrollUpThen();
    await waitFor(250);
    this.setOverlay('')
  }
}
</script>

<style web lang="stylus" src="styles/web/index.styl"></style>
<style native lang="stylus" src="styles/mobile/index.styl"></style>

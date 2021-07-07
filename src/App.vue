<template web lang="pug">
main(:class="page" :lang="config.language || 'en'")
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
          Items(v-if="overlay === 'items'" :itemIds="Object.values(items)")
          Credits(v-if="overlay === 'credits'")
          Options(v-if="overlay === 'options'")
          FeedbackMode(v-if="overlay === 'feedbackMode'")
          Share(v-if="overlay === 'shareOverlay'" :url="overlayData.url" :title="overlayData.title")
        .actions
          button.close(@click="setOverlay('')")
  //- HelloWorld(:msg="msg")
</template>
<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <GridLayout rows="auto, auto">
      <HelloWorld :msg="msg" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// import HelloWorld from './components/HelloWorld.vue';
import Start from "./views/Start.vue";
import Read from "./views/Read.vue";
import Tester from "./views/Tester.vue";
import { State, Action } from "vuex-class";
import book from "./book";
import { clone, logJson, warn } from "./shared/util";
import appState from "./store";
import { Chapter, Option } from "./shared/entities";
import Chapters from './components/overlays/Chapters.vue';
import Items from './components/overlays/Items.vue';
import Credits from './components/overlays/Credits.vue';
import Options from './components/overlays/Options.vue';
import FeedbackMode from './components/overlays/FeedbackMode.vue';
import Share from './components/overlays/Share.vue';
import uniq from "lodash/uniq";

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

@Component({
  name: "home",
  components: { Start, Read, Tester, Chapters, Items, Credits, Options, FeedbackMode, Share },
})
export default class App extends Vue {
  private navbarTitle = `App.vue`;
  // private msg = `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`;

  @State page;
  @State overlay;
  @State overlayData;
  @State theme;
  @State items;
  @State path;
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

    // for debugging and testing
    window["appState"] = appState;
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
          .filter(section => !!this.path.find(r => r.chapterId === chapter!.id && r.sectionId === section.id));
        return chapter;
      }))!;
  }

  @Watch('options', { deep: true, immediate: true })
  @Watch('overlay', { immediate: true })
  updateClasses() {
    document.documentElement.className = Object.values(this.options).join(' ') + (this.overlay ? ' overlay-open' : '');
  }
  //   document.body.className = Object.values(this.options).join(' ');
  // }
}
</script>

<style web lang="stylus" src="styles/web/index.styl"></style>
<style native lang="stylus" src="styles/mobile/index.styl"></style>

<template web lang="pug">
main(:class="mainClass")
  transition(name='pages')
    //- use dynamic component: component(:is=page)
    Start(key="1", v-if="page === 'start'")
    Read(key="2", v-if="page === 'read'")
    Tester(key="3", v-if="page === 'test'")
  transition(name='overlay' appear)
    .overlay(:class="overlay" v-if="!!overlay")
      Chapters(v-if="overlay === 'chapters'" :chapters="progress")
      Items(v-if="overlay === 'items'" :items="Object.values(items)")
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
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from './components/HelloWorld.vue';
import Start from "./views/Start.vue";
import Read from "./views/Read.vue";
import Tester from "./views/Tester.vue";
import { State, Action, Getter } from "vuex-class";
import book from "./book";
import config from "./config";
import { load, warn } from "./shared/util";
import appState from "./store";
import { Chapter } from "./shared/entities";
import Chapters from './components/overlays/Chapters.vue';
import Items from './components/overlays/Items.vue';

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

@Component({
  name: "home",
  components: {
    // HelloWorld,
    Start,
    Read,
    Tester,
    Chapters,
    Items,
  },
})
export default class App extends Vue {
  private navbarTitle = `App.vue`;
  // private msg = `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`;

  @State page;
  @State overlay;
  @State theme;
  @State items;
  @Action init;
  @Action("page") setPage;
  @Action("overlay") setOverlay;
  @Getter progress: Chapter[];


  created() {
    this.init({ book, config });

    // start on particular page for testing
    const testPage = localStorage.getItem("testPage");
    if (testPage) {
      warn("TEST: going to page ", testPage);
      this.setPage(testPage);
    }
    const testOverlay = localStorage.getItem("testOverlay");
    if (testOverlay) {
      warn("TEST: opening overlay ", testOverlay);
      this.setOverlay(testOverlay);
    }

    // for debugging and testing
    window["appState"] = appState;
  }

  get mainClass(): string {
    return `${this.page} ${this.theme}`;
  }
}
</script>

<style web lang="stylus" src="styles/web.styl"></style>
<style native lang="stylus" src="styles/mobile.styl"></style>

<template web lang="pug">
main(:class="page")
  transition
    Start(key="1", v-if="page === 'start'")
    Read(key="2", v-if="page === 'read'")
    Tester(key="3", v-if="page === 'test'")
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
import { State, Action } from "vuex-class";
import book from "./book";
import config from "./config";
import { warn } from "./shared/util";
import appState from "./store";

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

@Component({
  name: "home",
  components: {
    // HelloWorld,
    Start,
    Read,
    Tester,
  },
})
export default class App extends Vue {
  private navbarTitle = `App.vue`;
  // private msg = `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`;

  @State page;
  @Action init;
  @Action("page") setPage;

  created() {
    this.init({ book, config });
    console.log(this.init);
    console.log(this.$store);
    const testPage = localStorage.getItem("testPage");
    if (testPage) {
      warn("TEST: going to page ", testPage);
      this.setPage(testPage);
    }

    // for debugging and testing
    window["appState"] = appState;
  }
}
</script>

<style web lang="stylus">
@import '~styles/reset';
@import '~styles/typography';
@import '~styles/layout';
@import '~styles/style-bright';
@import '~styles/style-dark';

main {
  height 100%
  width 100%
  max-width 60em
  margin auto
}
</style>
<style native lang="stylus">
</style>

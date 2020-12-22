<template lang="pug">
.tester
  .judge
    button.good(@click="next(true)") good, next!
    button.bad(@click="next(false)") bad
  Read
</template>

<script lang="ts">
import Read from "~/views/Read.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import CryptoJs from "crypto-js";
import { error, log } from "../shared/util";
import { AppState } from "../store";
import TextElement from "./TextElement.vue";
import book from "../book";
import { Section } from "../shared/entities";
import { set } from "vue/types/umd";

type SectionThing = {
  section: Section;
  sectionId: string;
  chapterId: string;
  hash: string;
  tested: boolean;
};

@Component({
  name: "Tester",
  components: { Read },
})
export default class Tester extends Vue {
  private hashes: string[] = [];
  private sections: SectionThing[] = [];
  private current: SectionThing;

  @Mutation setSection;

  mounted() {
    const m = localStorage.getItem("tested");
    if (m) {
      this.hashes = JSON.parse(m);
    }
    for (const chapter of book.chapters) {
      for (const section of chapter.sections) {
        const hash = CryptoJs.MD5(JSON.stringify(section)).toString();
        this.sections.push({
          section,
          chapterId: chapter.id,
          sectionId: section.id,
          hash,
          tested: this.hashes.indexOf(hash) >= 0,
        });
      }
    }
    this.current = this.findNext();
    this.setSection(this.current);
  }

  next(result: boolean) {
    this.current.tested = result;
    if (result) {
      if (this.hashes.indexOf(this.current.hash) >= 0) {
        error('section was already tested!', this.current, this.hashes);
      }
    this.hashes.push(this.current.hash.toString());
      localStorage.setItem("tested", JSON.stringify(this.hashes));
    }
    this.current = this.findNext();
    this.setSection(this.current);
  }

  findNext(): SectionThing {
    for (const section of this.sections) {
      if (!section.tested) return section;
    }
  }
}
</script>
<style scoped lang="stylus"></style>

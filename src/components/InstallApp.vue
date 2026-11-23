<template lang="pug">
.install-app(v-if="visible")
  button.install-link(@click="install")
    svg(viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true")
      rect(x="6" y="2.5" width="12" height="19" rx="2.5")
      path(d="M12 8v6M9 11l3 3 3-3")
    span Als App installieren

  transition(name="install-hint")
    .install-hint(v-if="showIosHint" @click.self="close")
      .sheet(role="dialog" aria-modal="true" aria-labelledby="install-hint-title")
        .grab
        button.x(@click="close" aria-label="Schließen")
          svg(viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true")
            path(d="M6 6l12 12M18 6L6 18")
        h3#install-hint-title Hollow White als App
        p.lead Ohne App Store – in 4 kurzen Schritten.
        ol
          li
            span.n 1
            span.t Tippe unten in der Adressleiste auf das #[b Menü-Symbol].
            span.i
              svg(viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true")
                path(d="M5 7h14M5 12h14M5 17h9")
          li
            span.n 2
            span.t Tippe auf #[b Teilen].
            span.i
              svg(viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true")
                path(d="M12 3v12M8 7l4-4 4 4")
                path(d="M7 10H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1")
          li
            span.n 3
            span.t Scrolle nach unten und wähle #[b Zum Home-Bildschirm].
            span.i
              svg(viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true")
                rect(x="4" y="4" width="16" height="16" rx="4")
                path(d="M12 8.5v7M8.5 12h7")
          li
            span.n 4
            span.t Tippe oben rechts auf #[b Hinzufügen].
            span.i
              svg(viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true")
                path(d="M5 12.5l4.5 4.5L19 7.5")
        p.tip
          | Kein Menü-Symbol zu sehen? Dann tippe direkt auf das Teilen-Symbol unten in der Leiste.
          br
          | Gut zu wissen: Die App startet mit einem eigenen, neuen Spielstand.
        button.ok(@click="close") Alles klar
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Android / Chromium fire `beforeinstallprompt` early, possibly before the
// start page is mounted, so the event is captured as soon as this module loads.
const installState = Vue.observable({
  prompt: null as any,
  installed: false,
});

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (event: Event) => {
    event.preventDefault(); // show our own button instead of Chrome's mini-infobar
    installState.prompt = event;
  });
  window.addEventListener('appinstalled', () => {
    installState.installed = true;
    installState.prompt = null;
  });
}

function isStandalone(): boolean {
  return (navigator as any).standalone === true
    || window.matchMedia('(display-mode: standalone)').matches;
}

function isIos(): boolean {
  const ua = navigator.userAgent;
  return /iPhone|iPad|iPod/.test(ua)
    || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1); // iPadOS
}

/**
 * "Als App installieren" on the start page.
 * - Android (Chrome, Edge, Samsung Internet): opens the native install dialog.
 * - iOS: Safari has no install API, so it shows a short how-to sheet.
 * Hidden inside the installed app, on desktop and in browsers that can't install.
 */
@Component({ name: 'InstallApp' })
export default class InstallApp extends Vue {
  showIosHint = false;
  ios = isIos();
  standalone = isStandalone();

  get visible(): boolean {
    if (this.standalone || installState.installed) return false;
    if (this.ios) return true;
    return !!installState.prompt && window.matchMedia('(pointer: coarse)').matches;
  }

  async install() {
    const prompt = installState.prompt;
    if (prompt) {
      prompt.prompt();
      try {
        const choice = await prompt.userChoice;
        if (choice && choice.outcome === 'accepted') installState.installed = true;
      } finally {
        installState.prompt = null; // a prompt event can only be used once
      }
    } else if (this.ios) {
      this.showIosHint = true;
    }
  }

  close() {
    this.showIosHint = false;
  }
}
</script>

<style scoped lang="stylus">
sheetBg = #12191f

.install-app
  position absolute
  top 0
  left 0
  right 0
  padding-top 14px
  text-align center
  z-index 2

.install-link
  display inline-flex
  align-items center
  gap 8px
  min-height 44px
  padding 0 18px 0 14px
  border 1px solid rgba(255, 255, 255, .45)
  border-radius 999px
  background rgba(10, 18, 24, .45)
  -webkit-backdrop-filter blur(10px)
  backdrop-filter blur(10px)
  box-shadow 0 2px 10px rgba(0, 0, 0, .25)
  color #fff
  font inherit
  font-size 15px
  font-weight 400
  letter-spacing .5px
  cursor pointer

  svg
    flex none
    opacity .9

.install-hint
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  display flex
  align-items flex-end
  justify-content center
  background rgba(0, 0, 0, .6)
  z-index 10

.sheet
  position relative
  width 100%
  max-width 450px
  box-sizing border-box
  margin 0 10px calc(10px + env(safe-area-inset-bottom))
  padding 12px 20px 18px
  border-radius 24px
  background sheetBg
  box-shadow 0 -4px 30px rgba(0, 0, 0, .4)
  color #fff
  text-align left
  font-size 16px
  line-height 1.4

  &, *
    -webkit-hyphens none
    hyphens none

  .grab
    width 40px
    height 5px
    margin 0 auto 14px
    border-radius 3px
    background rgba(255, 255, 255, .25)

  .x
    position absolute
    top 12px
    right 12px
    width 34px
    height 34px
    display flex
    align-items center
    justify-content center
    border none
    border-radius 50%
    background rgba(255, 255, 255, .1)
    color #fff
    cursor pointer

  h3
    margin 6px 0
    font-size 21px
    font-weight 500
    text-align center

  .lead
    margin 0 0 18px
    text-align center
    font-size 15px
    color rgba(255, 255, 255, .7)

  ol
    list-style none
    margin 0 0 16px
    padding 0

  li
    display flex
    align-items center
    gap 12px
    padding 10px 0
    border-top 1px solid rgba(255, 255, 255, .08)

    &:first-child
      border-top none

  .n
    flex none
    width 26px
    height 26px
    display flex
    align-items center
    justify-content center
    border-radius 50%
    background #fff
    color sheetBg
    font-size 14px
    font-weight 600

  .t
    flex 1

  .i
    flex none
    width 36px
    height 36px
    display flex
    align-items center
    justify-content center
    border-radius 10px
    background rgba(255, 255, 255, .1)
    color #8fd3ff

  .tip
    margin 0 0 16px
    padding 10px 12px
    border-radius 12px
    background rgba(255, 255, 255, .06)
    font-size 13.5px
    color rgba(255, 255, 255, .7)

  .ok
    width 100%
    height 50px
    border none
    border-radius 50px
    background #fff
    color sheetBg
    font inherit
    font-size 17px
    font-weight 500
    letter-spacing .5px
    cursor pointer

// transition
.install-hint-enter-active, .install-hint-leave-active
  transition opacity .25s ease

  .sheet
    transition transform .3s ease

.install-hint-enter, .install-hint-leave-to
  opacity 0

  .sheet
    transform translateY(40px)
</style>

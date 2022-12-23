import { Vue } from 'vue-property-decorator';
import { Functions, Overlays, Link, SpecialLink, Specials, isSpecialLink, Pages } from '../shared/entities';
import { error } from '../shared/util';
import store from '../store/index';
import logRemote from './logRemote';

export class TextBase extends Vue {
  open(link: Link | SpecialLink) {
    if (isSpecialLink(link)) {
      // Special functions
      if (link.id === Functions.reset) return store.dispatch('reset', { keepItems: true });
      if (link.id === Functions.share) return this.share(link.title, link.data);
      // Pages
      if (Pages[link.id]) return store.dispatch('page', link.id);
      // Overlays
      if (Overlays[link.id]) return store.dispatch('overlay', link.id);
    }
    store.dispatch('goto', link);
  }

  async share(title: string, url?: string) {
    if (!url) error('Credits.share: url not defined', title);
    const data = { title, url };
    let nativeFailed = false;
    if (navigator.share) {
      if (navigator.canShare && !(navigator.canShare(data))) {
        error('Can\'t share data. Please notify the Hollow White team about this.', data);
      } else {
        try { await navigator.share(data); }
        catch (e) {
          if ((e+'').indexOf('AbortError') < 0) nativeFailed = true;
        }
      }
    }
    if (!navigator.share || nativeFailed) {
      store.dispatch('overlay', { overlay: Overlays.shareOverlay, data });
    }
    logRemote(`share_${nativeFailed ? 'overlay' : 'native'}`);
  }
}
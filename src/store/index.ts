import Vue from 'vue'
import Vuex from 'vuex'
import { Chapter, Link, Reference, Section, Item, State, ChangeState, AddItem, RemoveItem, Option, Choice } from '../shared/entities';
import { equal, warn } from '../shared/util';
import { error } from '../shared/util';
import VuexPersistence from 'vuex-persist';
import book from '@/book';
import config from '@/config';

Vue.use(Vuex)

const dontStore = ['page', 'overlay'];

export interface Settings {
  page: string;
  overlay?: string;
  options: { [id: string]: Option };
}

const dontReset = ['items'];
export interface BookState {
  position: Reference | null;
  path: Array<Reference>;
  items: { [id: string]: Item };
  states: { [id: string]: State };
}

export interface AppState extends Settings, BookState {}

const defaultOptions = {}
config.options.forEach(option => defaultOptions[option.id] = option.choices.find(c => c.default) ?? option.choices[0]);

function initialSettings(): Settings {
  return {
    page: 'start',
    overlay: undefined,
    options: defaultOptions,
  };
}
function initialBookState(): BookState {
  return {
    position: null,
    path: [],
    items: {},
    states: {},
  };
}
function initialState(): AppState {
  return {
    ...initialSettings(),
    ...initialBookState(),
  }
}

const state: AppState = initialState();

// export interface Getters {
//   progress({ path }, getters): Chapter[];
//   chapter({ chapterId }, getters): Chapter;
//   section({ sectionId }, getters): Section;
// }

// const getters: Getters = {

// }

export interface Position { chapter: Chapter; section: Section }

const find = (chapterId?: string | null, sectionId?: string | null): Position => {
  const chapter = book.chapters.find(chapter => chapter.id === chapterId) ?? book.chapters[0];
  const section = chapter.sections.find(section => section.id === sectionId) ?? chapter.sections[0];
  return { chapter, section };
};

export default new Vuex.Store({
  state,
  mutations: {
    page(state, { page }) {
      state.page = page;
    },
    overlay(state, { overlay }) {
      state.overlay = overlay;
    },
    // init(state, { book, config }: { book: Book; config: Config }) {
    //   // restore state from local storage
    //   // for (const key in state) {
    //   //   const value = load(key);
    //   //   if (value) {
    //   //     state[key] = value;
    //   //   }
    //   // }
    //   // load theme, use default, or none
    //   // state.theme = load('theme') ?? config?.themes?.[0] ?? '';

    //   state.config = config;
    //   state.book = book;
    // },
    setSection(state, { chapterId, sectionId }: { chapterId: string; sectionId: string }) {
      // if (!book) {
      //   throw new Error("Book not defined - forgot to call init?");
      // }
      // const { chapter, section } = find(book, chapterId, sectionId);
      // log('setSection', chapterId, chapter.id, sectionId, section.id);
      // state.chapter = chapter ?? book.chapters[0];
      // state.section = section ?? state.chapter.sections[0];
      // log('setSection:', state.chapter.id, state.section.id);

      // persist
      // store('chapterId', state.chapter.id);
      // store('sectionId', state.section.id);

      state.position = { chapterId, sectionId };
    },
    addToPath({ position, path }) {
      if (!position) {
        throw new Error("Can not add to path, no current chapter/section");
      }
      // const ref: Reference = { chapterId: state.chapterId, sectionId: state.sectionId };
      if (path.length > 0 && equal(position, path[path.length - 1])) {
        warn("Trying to add same state to path", path, position);
      } else {
        path.push(position);
        // store('path', state.path);
      }
    },
    changeState(appState, { state }: { state: ChangeState }) {
      // appState.states[state.id] = state;
      const currentState: State = appState.states[state.id] ?? { id: state.id, value: 0 };
      currentState.value += parseInt(state.modifier);
      appState.states = {
        ...appState.states,
        [currentState.id]: currentState,
      }
    },
    addItem(state, { item }: { item: AddItem }) {
      if (state.items[item.id]) {
        return warn(`addItem: item ${ item.id } already in inventory`);
      }
      const itemDefinition: Item | undefined = config.items.find(i => i.id === item.id);
      if (!itemDefinition) {
        return error(`Definition for item ${ item.id } not found!`, config.items);
      }
      Vue.set(state.items, itemDefinition.id, itemDefinition);
    },
    removeItem(state, { item }: { item: RemoveItem }) {
      if (!state.items[item.id]) {
        return warn(`removeItem: item ${ item.id } not in inventory`);
      }
      // TODO is it enough to just remove the item? or do I need to recreate the map?
      Vue.delete(state.items, item.id);
    },
    // changeTheme(state, { theme }: { theme: string }) {
    //   if (config.themes && config.themes?.indexOf(theme) < 0) {
    //     return warn(`changeTheme: theme ${ theme } not configured`);
    //   }
    //   state.theme = theme;
    //   // store('theme', theme);
    // },
    setOption(state, { option, choice }: { option: Option; choice: Choice }) {
      if (!option.choices.find(c => c.id === choice.id)) {
        error('setOption: given choice is not a choice of given option.', option, choice);
      }
      Vue.set(state.options, option.id, choice.id);
    },
    reset(state) {
      warn('resetting...');
      const initial = initialBookState();
      for (const field of Object.keys(initial)) {
        if (dontReset.indexOf(field) < 0) state[field] = initial[field];
      }
    },
  },
  actions: {
    // init({ commit }, setup: { book: Book; config: Config }) {
    //   commit('init', setup);
    //   // commit('setSection', loadAll('chapterId', 'sectionId'));
    //   log('post init state', state.page, state.path, state.started, state.chapter, state.section);
    // },
    page({ commit }, page) {
      if (['start', 'read', 'tester'].indexOf(page) < 0) error('Page not found', page);
      commit('page', { page });
    },
    overlay({ commit }, overlay = '') {
      if (['chapters', 'items', 'options', 'credits', 'feedbackMode', ''].indexOf(overlay) < 0) error('Overlay not found', overlay);
      commit('overlay', { overlay });
    },
    start({ commit, dispatch }) {
      const p = find();
      commit('setSection', {
        chapterId: p.chapter.id,
        sectionId: p.section.id,
      });
      dispatch('page', 'read');
    },
    goto({ commit }, link: Link) {
      commit('setSection', link);
      commit('addToPath');
      window.scrollTo(0, 0);
    },
    changeState({ commit }, payload: { state: ChangeState }) {
      commit('changeState', payload);
    },
    addItem({ commit }, payload: { item: AddItem }) {
      commit('addItem', payload);
    },
    removeItem({ commit }, payload: { item: RemoveItem }) {
      commit('removeItem', payload);
    },
    // changeTheme({ commit }, theme: string) {
    //   commit('changeTheme', { theme });
    // },
    setOption({ commit }, payload: { option: Option; choice: Choice }) {
    // setOption({ commit }, payload: { option: Option; choice: Choice }) {
      commit('setOption', payload);
    },
    reset({ commit, dispatch }) {
      commit('reset');
      dispatch('page', 'start');
      dispatch('overlay', '');
    },
  },
  getters: {
    progress({ path }, getters): Position[] {
      // return logRaw('progress',
      //   uniq(path.map(ref => ref.chapterId))
      //   .map(id => book!.chapters.find(chapter => chapter.id === id))
      //   .filter(chapter => !!chapter)
      //   .map(chapter => clone(chapter)!)
      //   .map((chapter: Chapter) => {
      //     chapter.sections = chapter.sections
      //       .filter(section => !!path.find(r => r.chapterId === chapter.id && r.sectionId === section.id));
      //       // .map(section => { return { id: section.id, title: section.title, elements: [], next: [] } });
      //     return chapter;
      //   }));
      return (path.map(ref => find(ref.chapterId, ref.sectionId)));
    },
    position({ position }, getters): Position {
      return find(position?.chapterId, position?.sectionId);
    },
    started({ position }): boolean {
      return !!position;
    }
  },
  modules: {
  },
  plugins: [
    new VuexPersistence<AppState>({
      storage: window.localStorage,
      reducer: (state) => {
        const reduced = {}
        Object.keys(state).forEach(key => {
          if (dontStore.indexOf(key) < 0) reduced[key] = state[key];
        });
        return reduced;
      },
      filter: (mutation) => dontStore.indexOf(mutation.type) < 0
    }).plugin
  ],
})

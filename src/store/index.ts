import Vue from 'vue'
import Vuex from 'vuex'
import { Book, Chapter, Link, Reference, Section, Item, State, Config, ChangeState, AddItem, RemoveItem } from '../shared/entities';
import { equal, log, warn, load, store, loadAll } from '../shared/util';
import { error } from '../shared/util';

Vue.use(Vuex)

export interface AppState {
  page: string;
  started: boolean;
  config: Config | null;
  book: Book | null;
  chapter: Chapter | null;
  section: Section | null;
  theme: string;
  path: Array<Reference>;
  items: { [id: string]: Item };
  states: { [id: string]: State };
}

const state: AppState = {
  page: 'start',
  started: false,
  config: null,
  book: null,
  chapter: null,
  section: null,
  theme: '',
  path: [],
  items: {},
  states: {},
}

const find = (book, chapterId, sectionId): { chapter: Chapter; section: Section } => {
  const chapter = book.chapters.find(chapter => chapter.id === chapterId) || book.chapters[0];
  const section = chapter?.sections.find(section => section.id === sectionId) || chapter.sections[0];
  return { chapter, section };
};

export default new Vuex.Store({
  state,
  mutations: {
    page(state, { page }) {
      state.page = page;
    },
    start(state) {
      store('started', state.started = true);
    },
    init(state, setup: { book: Book; config: Config }) {
      // load states
      for (const key in state) {
        const value = load(key);
        if (value) {
          state[key] = value;
        }
      }
      // load theme, use default, or none
      state.theme = load('theme') ?? setup.config?.themes?.[0] ?? '';

      state.config = setup.config;
      state.book = setup.book;
    },
    setSection(state, { chapterId, sectionId }: { chapterId: string; sectionId: string }) {
      if (!state.book) {
        throw new Error("Book not defined - forgot to call init?");
      }
      const { chapter, section } = find(state.book, chapterId, sectionId);
      // log('setSection', chapterId, chapter.id, sectionId, section.id);
      state.chapter = chapter ?? state.book.chapters[0];
      state.section = section ?? state.chapter.sections[0];
      log('setSection:', state.chapter.id, state.section.id);

      // persist
      store('chapterId', state.chapter.id);
      store('sectionId', state.section.id);
    },
    addToPath(state) {
      if (!state.chapter) {
        throw new Error("Can not add to path, no current chapter");
      }
      if (!state.section) {
        throw new Error("Can not add to path, no current section");
      }
      const ref: Reference = { chapterId: state.chapter.id, sectionId: state.section.id };
      if (state.path.length > 0 && equal(ref, state.path[state.path.length - 1])) {
        warn("Trying to add same state to path", state.path, state.chapter.id, state.section.id);
      } else {
        state.path.push(ref);
        store('path', state.path);
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
      const itemDefinition: Item | undefined = state.config!.items.find(i => i.id === item.id);
      if (!itemDefinition) {
        return error(`Definition for item ${ item.id } not found!`, state.config!.items);
      }
      // state.items = {
      //   ...state.items,
      //   [itemDefinition.id]: itemDefinition,
      // }
      Vue.set(state.items, itemDefinition.id, itemDefinition);
    },
    removeItem(state, { item }: { item: RemoveItem }) {
      if (!state.items[item.id]) {
        return warn(`removeItem: item ${ item.id } not in inventory`);
      }
      // TODO is it enough to just remove the item? or do I need to recreate the map?
      Vue.delete(state.items, item.id);
    },
    changeTheme(state, { theme }: { theme: string }) {
      if (state.config?.themes && state.config?.themes?.indexOf(theme) < 0) {
        return warn(`changeTheme: theme ${ theme } not configured`);
      }
      state.theme = theme;
      store('theme', theme);
    },
  },
  actions: {
    init({ commit }, setup: { book: Book; config: Config }) {
      commit('init', setup);
      commit('setSection', loadAll('chapterId', 'sectionId'));
      log('post init state', state.page, state.path, state.started, state.chapter, state.section);
    },
    page({ commit }, page) {
      commit('page', { page });
    },
    start({ commit, dispatch }) {
      commit('start');
      dispatch('page', 'read');
    },
    goto({ commit }, link: Link) {
      commit('setSection', link);
      commit('addToPath');
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
    changeTheme({ commit }, theme: string) {
      commit('changeTheme', { theme });
    },
  },
  modules: {
  }
})

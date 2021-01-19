import Vue from 'vue'
import Vuex from 'vuex'
import { Book, Chapter, Link, Reference, Section, Item, State, Config, ChangeState, AddItem, RemoveItem, Option } from '../shared/entities';
import { equal, log, warn, load, store, loadAll, logRaw } from '../shared/util';
import { error } from '../shared/util';
import { clone } from '../../../importer/src/shared/util';
import uniq from 'lodash/uniq';
import { optionalCallExpression } from '@babel/types';

Vue.use(Vuex)

export interface AppState {
  page: string;
  overlay?: string;
  started: boolean;
  config: Config | null;
  book: Book | null;
  chapter: Chapter | null;
  section: Section | null;
  theme: string;
  path: Array<Reference>;
  items: { [id: string]: Item };
  states: { [id: string]: State };
  options: { [id: string]: Option };
}

const state: AppState = {
  page: 'start',
  overlay: undefined,
  started: false,
  config: null,
  book: null,
  chapter: null,
  section: null,
  theme: '',
  path: [],
  items: {},
  states: {},
  options: {},
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
    overlay(state, { overlay }) {
      state.overlay = overlay;
    },
    start(state) {
      store('started', state.started = true);
    },
    init(state, { book, config }: { book: Book; config: Config }) {
      // restore state from local storage
      for (const key in state) {
        const value = load(key);
        if (value) {
          state[key] = value;
        }
      }
      // load theme, use default, or none
      state.theme = load('theme') ?? config?.themes?.[0] ?? '';

      state.config = config;
      state.book = book;
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
    setOption(state, { option, choice }: { option: Option, choice: Option }) {
      if (option.choices.indexOf(choice) < 0) {
        error('setOption: given choice is not a choice of given option.', option, choice);
      }
      Vue.set(state.options, option.id, choice.id);
    }
  },
  actions: {
    init({ commit }, setup: { book: Book; config: Config }) {
      commit('init', setup);
      commit('setSection', loadAll('chapterId', 'sectionId'));
      log('post init state', state.page, state.path, state.started, state.chapter, state.section);
    },
    page({ commit }, page) {
      if (['start', 'read', 'tester'].indexOf(page) < 0) error('Page not found', page);
      commit('page', { page });
    },
    overlay({ commit }, overlay = '') {
      if (['chapters', 'items', 'options', 'credits', ''].indexOf(overlay) < 0) error('Overlay not found', overlay);
      commit('overlay', { overlay });
    },
    start({ commit, dispatch }) {
      commit('start');
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
    changeTheme({ commit }, theme: string) {
      commit('changeTheme', { theme });
    },
    setOption({ commit, state }, payload: { option: Option, choice: Option }) {
      commit('setOption', payload);
    }
  },
  getters: {
    progress({ path, book }): Chapter[] {
      if (book === undefined) error('book not loaded');
      return logRaw('progress',
        uniq(path.map(ref => ref.chapterId))
        .map(id => book!.chapters.find(chapter => chapter.id === id))
        .filter(chapter => !!chapter)
        .map(chapter => clone(chapter)!)
        .map((chapter: Chapter) => {
          chapter.sections = chapter.sections
            .filter(section => !!path.find(r => r.chapterId === chapter.id && r.sectionId === section.id));
            // .map(section => { return { id: section.id, title: section.title, elements: [], next: [] } });
          return chapter;
        }));
    }
  },
  modules: {
  }
})

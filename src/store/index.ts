import Vue from 'vue'
import Vuex from 'vuex'
import { Chapter, Link, Reference, Section, State, ChangeState, AddItem, RemoveItem, Option, Choice, Overlays, SpecialLink, isSpecialLink } from '../shared/entities';
import { equal, warn, logJson, log, error } from '../shared/util';
import createPersistedState from "vuex-persist-indexeddb";
import book from '@/book';
import { scrollContainer, scrollUpThen } from '@/utls/scroll';
import logRemote from './logRemote';

Vue.use(Vuex)

const dontStore = ['page', 'overlay'];

export type Options = { [id: string]: string }
export interface Settings {
  page: string;
  overlay?: string;
  overlayData?: any;
  options: Options;
}

export type Items = string[];
export type States = { [id: string]: State };
export interface BookState {
  position: Reference | null;
  path: Array<Reference>;
  items: string[]; // item IDs
  states: States;
}

export interface AppState extends Settings, BookState {}

export function inPath(link: Reference | Link, path: Array<Reference>): boolean {
  return !!path.find(pathItem => pathItem.chapterId === link.chapterId && pathItem.sectionId === link.sectionId);
}

const defaultOptions: { [id: string]: string } = {};
book.config.options.forEach(option => defaultOptions[option.id] = (option.choices.find(c => c.default) ?? option.choices[0]).id);

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
    items: [],
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
    overlay(state, { overlay, data}: { overlay: string; data: any | undefined }) {
      state.overlay = overlay;
      state.overlayData = data;
    },
    setSection(state, { chapterId, sectionId }: { chapterId: string; sectionId: string }) {
      state.position = { chapterId, sectionId };
    },
    addToPath({ position, path }) {
      if (!position) {
        throw new Error("Can not add to path, no current chapter/section");
      }
      if (path.length > 0 && equal(position, path[path.length - 1])) {
        warn("Trying to add same state to path", path, position);
      } else {
        path.push(position);
      }
    },
    changeState(appState, { state }: { state: ChangeState }) {
      const currentState: State = appState.states[state.id] ?? { id: state.id, value: 0 };
      logJson('changeState from', currentState, 'to', state);
      if (state.modifier.indexOf('=') > -1) // allow =1 to set a state
        currentState.value = parseInt(state.modifier.replace('=', ''));
      else
        currentState.value += parseInt(state.modifier);
      logJson('changeState result', currentState);
      appState.states = {
        ...appState.states,
        [currentState.id]: currentState,
      }
      logJson('changeStates result', appState.states);
    },
    addItem(state, { item }: { item: AddItem }) {
      if (state.items.includes(item.id)) {
        return log(`addItem: item ${ item.id } already in inventory`);
      }
      if (!book.config.items.find(i => i.id === item.id)) {
        return error(`Definition for item ${ item.id } not found!`, book.config.items);
      }
      // Vue.set(state.items, itemDefinition.id, itemDefinition);
      state.items.push(item.id);
    },
    removeItem(state, { item }: { item: RemoveItem }) {
      const index = state.items.indexOf(item.id);
      if (index < 0) {
        return warn(`removeItem: item ${ item.id } not in inventory`);
      }
      // TODO is it enough to just remove the item? or do I need to recreate the map?
      // Vue.delete(state.items, item.id);
      state.items.splice(index, 1);
    },
    setOption(state, { option, choice }: { option: Option; choice: Choice }) {
      if (!option.choices.find(c => c.id === choice.id)) {
        error('setOption: given choice is not a choice of given option.', option, choice);
      }
      Vue.set(state.options, option.id, choice.id);
    },
    reset(state, { keepItems = false }: { keepItems: boolean }) {
      warn('resetting... keep items?', keepItems);
      const initial = initialBookState();
      for (const field of Object.keys(initial)) {
        if (field === 'items' && keepItems) continue;
        state[field] = initial[field];
      }
    },
  },
  actions: {
    page({ commit }, page) {
      if (['start', 'read', 'tester'].indexOf(page) < 0) error('Page not found', page);
      logRemote('action', 'page', page);
      scrollUpThen(() => {
        commit('page', { page });
      });
    },
    overlay({ commit }, overlay: string | { overlay: string; data: any } = '') {
      const entry = typeof overlay === 'string' ? { overlay, data: undefined } : overlay;
      if (entry.overlay !== '' && !Overlays[entry.overlay]) error('Overlay not found', overlay);
      if (!entry.overlay) scrollUpThen(); // scroll up when closing overlay
      logRemote('action', 'overlay', entry.overlay);
      commit('overlay', entry);
    },
    start({ getters, dispatch }) {
      if (!getters.started) {
        const startingPoint = find();
        dispatch('goto', {
          chapterId: startingPoint.chapter.id,
          sectionId: startingPoint.section.id,
        });
      }
      dispatch('page', 'read');
    },
    goto({ commit, state }, link: Reference) {
      setTimeout(() => scrollContainer().scrollTo(0, 0), book.config.pageScrollUpDelay ?? 1);
      logRemote('action', 'goto', `${link.chapterId}_${link.sectionId}`);
      commit('setSection', link);
      if (!inPath(link, state.path)) commit('addToPath');
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
    setOption({ commit }, payload: { option: Option; choice: Choice }) {
      commit('setOption', payload);
    },
    reset({ commit, dispatch }, payload: { keepItems: boolean } = { keepItems: false }) {
      commit('reset', payload);
      logRemote('action', 'reset', `keep items = ${payload.keepItems}`);
      dispatch('page', 'start');
      dispatch('overlay', '');
    },
  },
  getters: {
    progress({ path }, getters): Position[] {
      return (path.map(ref => find(ref.chapterId, ref.sectionId)));
    },
    position({ position }, getters): Position {
      return find(position?.chapterId, position?.sectionId);
    },
    started({ position }): boolean {
      return !!position;
    },
    feedbackEnabled(): boolean {
      if (!book.config.feedbackMode || !book.config.feedbackMode?.enabled) return false;
      if (book.config.feedbackMode.urlFragments) {
        return !!book.config.feedbackMode.urlFragments.find(test => location.href.indexOf(test) >= 0)
      }
      return true;
    },
    itemCount({ items }): number {
      // return Object.values(items).length; // NOTE maybe was a relict of when items was an array of item objects, keyed by their ID?
      return items.length;
    },
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      reducer(state, paths) {
        const reduced = {}
        Object.keys(state).forEach(key => {
          if (dontStore.indexOf(key) < 0) reduced[key] = state[key];
        });
        return reduced;
      }
    })
  ],
  devtools: true,
})

import Vue from 'vue'
import Vuex from 'vuex'
import { Chapter, Link, Reference, Section, Item, State, ChangeState, AddItem, RemoveItem, Option, Choice, Overlays, SpecialLink, isSpecialLink } from '../shared/entities';
import { equal, warn, logJson } from '../shared/util';
import { error } from '../shared/util';
import VuexPersistence from 'vuex-persist';
import book from '@/book';
import config from '@/config';

Vue.use(Vuex)

const dontStore = ['page', 'overlay'];

export type Options = { [id: string]: string }
export interface Settings {
  page: string;
  overlay?: string;
  overlayData?: any;
  options: { [id: string]: string };
}

const dontReset = ['items'];
export interface BookState {
  position: Reference | null;
  path: Array<Reference>;
  items: { [id: string]: Item };
  states: { [id: string]: State };
}

export interface AppState extends Settings, BookState {}

export function inPath(link: Reference | Link, path: Array<Reference>): boolean {
  return !!path.find(pathItem => pathItem.chapterId === link.chapterId && pathItem.sectionId === link.sectionId);
}

const defaultOptions: { [id: string]: string } = {};
config.options.forEach(option => defaultOptions[option.id] = (option.choices.find(c => c.default) ?? option.choices[0]).id);

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
    page({ commit }, page) {
      if (['start', 'read', 'tester'].indexOf(page) < 0) error('Page not found', page);
      commit('page', { page });
    },
    overlay({ commit }, overlay: string | { overlay: string; data: any } = '') {
      const entry = typeof overlay === 'string' ? { overlay, data: undefined } : overlay;
      if (entry.overlay !== '' && !Overlays[entry.overlay]) error('Overlay not found', overlay);
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
      commit('setSection', link);
      if (!inPath(link, state.path)) commit('addToPath');
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
    setOption({ commit }, payload: { option: Option; choice: Choice }) {
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
  devtools: true,
})

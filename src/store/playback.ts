import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

export interface PlaybackState {
  currentParagraphId?: string;
}

const state: PlaybackState = {
};

export default new Vuex.Store({
  state,
  getters: {
    getField, 
  },
  mutations: {
    updateField,
  }
})

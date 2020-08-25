import Vue from 'vue';
import Vuex from 'vuex';

import {pagging} from './modules/pagging';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    pagging: pagging
  }
});
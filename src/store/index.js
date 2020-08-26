import Vue from 'vue';
import Vuex from 'vuex';

import {trainings} from './modules/trainings';
import {exercises} from './modules/exercises';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    trainings: trainings,
    exercises: exercises
  }
});
import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

// Uma Store administra o estado dos dados
const store = new Vuex.Store({
    modules: modules
});

console.log("store", store);

export default store;
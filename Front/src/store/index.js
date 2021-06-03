import { createStore } from "vuex";
import Model from "../model/Model.js";
export default createStore({
  state: {
    Model: new Model(),
  },
  mutations: {
    START(state) {
      state.Model.start();
    },
    CHECK(state, input) {
      state.Model.check(input);
    },
  },
  actions: {
    START({ commit }) {
      commit("START");
    },
    CHECK({ commit }, input) {
      commit("CHECK", input);
    },
  },
  modules: {},
});

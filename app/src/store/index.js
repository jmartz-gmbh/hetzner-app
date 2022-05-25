import { createStore } from "vuex";
import messages from "./messages.js";

const moduleB = {
  state: () => ({}),
  mutations: {},
};

const store = createStore({
  modules: {
    messages: messages,
    b: moduleB,
  },
});

export default store;

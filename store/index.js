import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      message: "Hello! Vuex!"
    }
  });
};

export default createStore;

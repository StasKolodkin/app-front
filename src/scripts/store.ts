import { createStore } from "vuex";
import Craft from "../components/Craft/module";

const store = createStore({
  modules: {
    Craft
  },
});

export default store;
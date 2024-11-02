import { Module } from "vuex"
import { Craft, CraftData, CraftHistory, CraftStore } from "./types/Craft";
import { CategoryList } from "./types/Category";

const Craft: Module<Craft, unknown> = ({
  state: {
    craftData: {
      department: "Los Santos Police Department",
      materials: 450,
      weight: 2.90,
    },
    craftStore: [
      {
        id: 0,
        name: "Assault Rifle MK2",
        category: CategoryList.rifle,
        subValue: 7.62
      },
      {
        id: 1,
        name: "Assault Rifle MK2",
        category: CategoryList.rifle,
        subValue: 7.64
      },
    ],
    craftHistory: [
      
    ]
  },
  getters: {
    getCraftData: (state) => state.craftData,
    getCraftStore: (state) => state.craftStore,
    getCraftHistory: (state) => state.craftHistory,
  },
  mutations: {
    setCraftData(state , payload: CraftData) {
      state.craftData = payload;
    },
    setCraftStore(state , payload: CraftStore[]) {
      state.craftStore = payload;
    },
    setCraftHistory(state, payload: CraftHistory[]) {
      state.craftHistory = payload
    }
  },
});

export default Craft;
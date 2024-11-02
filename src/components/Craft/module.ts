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
        name: "Assault Rifle MK3",
        category: CategoryList.rifle,
        subValue: 7.62,
        weightAmount: 2.90,
        materialsAmount: 430
      },
      {
        id: 3,
        name: "Assault Rifle MK2",
        category: CategoryList.glock,
        subValue: 7.62,
        weightAmount: 2.40,
        materialsAmount: 80
      },
      {
        id: 1,
        name: "Assault Rifle MK2",
        category: CategoryList.rifle,
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
    ],
    craftHistory: [
      {
        name: "Source Insensitive",
        date: "20.02.2020, 12:00",
        quantity: 702,
        listItem: ["Assault Rifle MK2", "Revolver", "Sniper Rifle"]
      },
      {
        name: "Stas",
        date: "23.06.2024, 11:40",
        quantity: 209,
        listItem: ["Assault Rifle MK2", "Revolver"]
      },
      {
        name: "EzeQel",
        date: "03.10.2023, 21:40",
        quantity: 590,
        listItem: ["Assault Rifle MK2", "Revolver", "Revolver"]
      }
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
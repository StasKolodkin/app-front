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
        uid: 5,
        id: 0,
        name: "M16",
        category: CategoryList.rifle,
        image: "https://i.postimg.cc/fytT41jx/pngwing-com-6.png",
        subValue: 7.56,
        weightAmount: 2.90,
        materialsAmount: 430
      },
      {
        uid: 2,
        id: 1,
        name: "Assault Rifle MK2",
        category: CategoryList.rifle,
        image: "https://i.postimg.cc/9XsVs84B/Assault-Rifle.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 23,
        id: 0,
        name: "Shotgun",
        category: CategoryList.shotgun,
        image: "https://i.postimg.cc/R0tb6dCv/pngwing-com.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 1,
        id: 1,
        name: "Revolver",
        category: CategoryList.glock,
        image: "https://i.postimg.cc/59HdbBLN/pngwing-com-3.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 56,
        id: 22,
        name: "Police Bulletproof",
        category: CategoryList.equipment,
        image: "https://i.postimg.cc/ZnngwdzR/pngwing-com-11.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 66,
        id: 1,
        name: "Revolver",
        category: CategoryList.ammo,
        image: "https://i.postimg.cc/bdX4F5wV/pngwing-com-4.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 99,
        id: 2,
        name: "M1911",
        category: CategoryList.glock,
        image: "https://i.postimg.cc/85132WDD/pngwing-com-1.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 256,
        id: 12,
        name: "Bulletproof",
        category: CategoryList.equipment,
        image: "https://i.postimg.cc/tJmvLMCG/pngwing-com-5.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 24,
        id: 12,
        name: "AK47",
        category: CategoryList.rifle,
        image: "https://i.postimg.cc/1X1nHpq0/pngwing-com-9.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 34,
        id: 12,
        name: "Knife",
        category: CategoryList.edgedWeapon,
        image: "https://i.postimg.cc/rwYW52Zk/pngwing-com-7.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 80,
        id: 12,
        name: "Blood knife",
        category: CategoryList.edgedWeapon,
        image: "https://i.postimg.cc/KjrBTKwq/pngwing-com-8.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 20,
        id: 3,
        name: "Camouflage Bulletproof",
        category: CategoryList.equipment,
        image: "https://i.postimg.cc/2STC9nPd/pngwing-com-12.png",
        subValue: 7.64,
        weightAmount: 1.90,
        materialsAmount: 300
      },
      {
        uid: 77,
        id: 3,
        name: "Skull glock",
        category: CategoryList.glock,
        image: "https://i.postimg.cc/wvQ2DTtB/pngwing-com-10.png",
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
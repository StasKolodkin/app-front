import router from "../../scripts/router"
import store from "../../scripts/store"
import { CraftData, CraftHistory, CraftStore } from "./types/Craft";

export enum Events {
  MakingCrafting = "CEF:SERVER:Craft:MakingCrafting",
  EmptyCart = "CEF:SERVER:Craft:EmptyCart",
  ExitCraft = "CEF:SERVER:Craft:ExitCraft",
}

if (window.mp && window.mp.events) {
  window.mp.events.add("CEF:SERVER:Craft:Show", () => {
    if (router.currentRoute.value.name === 'Craft') return;
    router.push({ name: 'Craft' });
  });

  window.mp.events.add("CEF:SERVER:Craft:setCraftData", (json: string) => {
    const payload: CraftData = JSON.parse(json);
    store.commit('setCraftData', payload);
  });

  window.mp.events.add("CEF:SERVER:Craft:setCraftStore", (json: string) => {
    const payload: CraftStore = JSON.parse(json);
    store.commit('setCraftStore', payload);
  });

  window.mp.events.add("CEF:SERVER:Craft:setCraftHistory", (json: string) => {
    const payload: CraftHistory = JSON.parse(json);
    store.commit('setCraftHistory', payload);
  });
} else {
  console.warn('window.mp или window.mp.events не определены');
}


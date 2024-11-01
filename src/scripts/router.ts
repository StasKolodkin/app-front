import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Craft",
    name: "Craft",
    component: () => import("../components/Craft/Craft.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
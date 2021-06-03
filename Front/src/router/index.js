import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import help from "../views/help.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/help",
    name: "help",
    component: help,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

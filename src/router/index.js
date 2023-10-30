import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/Home/HomeIndex.vue";
import CategoryView from "../components/Category/CategoryIndex.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category",
    name: "category",
    component: CategoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

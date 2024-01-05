import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../pages/Home/HomeIndex.vue";
import CategoryView from "../pages/Category/CategoryIndex.vue";
import ContentView from "../pages/Content/ContentIndex.vue";
import LoginView from "../pages/Login/LoginIndex.vue";

import { state } from "../state";

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
  {
    path: "/content",
    name: "content",
    component: ContentView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  if (!state.loading) state.setLoading(true);
  setTimeout(() => {
    state.setLoading(false);
  }, 1500);
});

export default router;

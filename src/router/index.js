import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home/HomePage.vue";
import Category from "../pages/Category/CategoryPage.vue";
import All from "../pages/Category/AllCategory/AllCategory.vue";
import Specific from "../pages/Category/SpecificCategory/SpecificCategory.vue";
import Content from "../pages/Content/ContentPage.vue";
import Login from "../pages/Login/LoginPage.vue";
import LoginPart from "../pages/Login/LoginPart.vue";
import RegisterPart from "../pages/Login/RegisterPart.vue";
import Subscribe from "../pages/Subscribe/SubscribePage.vue";
import { state } from "../state/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/category",
    name: "category",
    component: Category,
    children: [
      {
        path: "",
        name: "allCategory",
        component: All,
      },
      {
        path: ":activedUrl",
        name: "specificCategory",
        component: Specific,
      },
    ],
  },
  {
    path: "/content",
    name: "content",
    component: Content,
    children: [
      {
        path: ":id",
        component: Content,
      },
    ],
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: Subscribe,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    children: [
      {
        path: "",
        name: "loginPart",
        component: LoginPart,
      },
      {
        path: "register",
        name: "registerPart",
        component: RegisterPart,
      },
    ],
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: Home,
  // },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  if (!state.loading) state.setLoading(true);
  console.log("state", state);
  setTimeout(() => {
    state.setLoading(false);
  }, 1000);
});

export default router;

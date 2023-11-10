import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tabs from "@/components/Tabs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "myList",
        component: () => import("../views/MyListPage.vue"),
      },
      {
        path: "home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "search",
        component: () => import("../views/SearchPage.vue"),
      },
      {
        path: "/movie/:id",
        component: () => import("../views/ViewMoviePage.vue"),
      },
      {
        path: "/videoGame/:id",
        component: () => import("../views/ViewVideoGamePage.vue")
      }
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;

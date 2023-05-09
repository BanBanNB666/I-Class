import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import app from '../App.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/1",
    name: "test",
    component: () => import("../view/MainView.vue"),
  },
  {
    path: "/",
    name: "test1",
    component: () => import("../view/Login.vue"),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {

  // 路由守卫逻辑


  // 通过 return turn;
  // 不通过 return false;
  return true;
});

export default router;

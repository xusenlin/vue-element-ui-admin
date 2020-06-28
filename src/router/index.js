import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import Common from "./common.js";
import Dashboard from "./dashboard.js";
import ArticleManage from "./articleManage.js";

Vue.use(VueRouter);

export const contentRoute = [...Dashboard, ...ArticleManage];

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Dashboard",
    redirect: "/home",
    meta: {
      title: "仪表盘"
    },
    children: contentRoute
  },
  Common
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;

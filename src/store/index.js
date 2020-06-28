import Vue from "vue";
import Vuex from "vuex";
import { menu } from "./modules/menu.js"; //菜单
import { system } from "./modules/system.js"; //布局需要的一些数据
import { routes } from "./modules/routes.js"; //路由链，当有多层子路由时，需要保存每一级路由所有参数，方便面包屑使用，并且刷新不丢失
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { system, menu, routes }
});

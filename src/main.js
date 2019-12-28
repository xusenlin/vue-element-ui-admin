import Vue from "vue";
import App from "./App.vue";
import elementUi from "element-ui";
import Config from "@/config/app";
import "@/assets/css/style.scss";
import router from "./router";
import store from "./store";
import "@/utils/v-auth.js";
import { getToken } from "@/utils/common";
import "./components";

Vue.config.productionTip = false;
Vue.prototype.GlobalCfg = Config;
Vue.use(elementUi);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
    ? to.meta.title + "-" + Config.siteName
    : Config.siteName;
  if (!getToken() && to.path !== "/login") {
    next({ path: "/login" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

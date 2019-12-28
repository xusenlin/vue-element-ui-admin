import Vue from "vue";
import Vuex from "vuex";
import Storage from "good-storage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    system: {
      hideSidebar: Storage.get("HideSidebar"),
      miniSidebar: Storage.get("MiniSidebar"),
      navType: parseInt(Storage.get("NavType") || 1)
    }
  },
  mutations: {
    MINI_SIDEBAR_TOGGLE(state) {
      let miniSidebar = state.system.miniSidebar === 1 ? 0 : 1;
      state.system.miniSidebar = miniSidebar;
      Storage.set("MiniSidebar", miniSidebar);
    },
    HIDE_SIDEBAR_TOGGLE(state) {
      let hideSidebar = state.system.hideSidebar === 1 ? 0 : 1;
      state.system.hideSidebar = hideSidebar;
      Storage.set("HideSidebar", hideSidebar);
    },
    NAV_TYPE_TOGGLE(state, type) {
      state.system.navType = type;
      Storage.set("NavType", type);
    }
  },
  actions: {},
  modules: {}
});

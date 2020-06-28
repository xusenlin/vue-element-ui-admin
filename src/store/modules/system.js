import Storage from "good-storage";

export const system = {
  state: {
    hideSidebar: Storage.get("HideSidebar"),
    miniSidebar: Storage.get("MiniSidebar"),
    navType: parseInt(Storage.get("NavType") || 1)
  },
  mutations: {
    MINI_SIDEBAR_TOGGLE(state) {
      let miniSidebar = state.miniSidebar === 1 ? 0 : 1;
      state.miniSidebar = miniSidebar;
      Storage.set("MiniSidebar", miniSidebar);
    },
    HIDE_SIDEBAR_TOGGLE(state) {
      let hideSidebar = state.hideSidebar === 1 ? 0 : 1;
      state.hideSidebar = hideSidebar;
      Storage.set("HideSidebar", hideSidebar);
    },
    NAV_TYPE_TOGGLE(state, type) {
      state.navType = type;
      Storage.set("NavType", type);
    }
  }
};

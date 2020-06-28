import allMenu from "@/menu/index.js";

export const menu = {
  state: allMenu,
  mutations: {},
  getters: {
    displayMenu: state => {
      //实际的菜单，在这里通过权限过滤菜单
      return state;
    }
  }
};

import Storage from "good-storage";

export const routes = {
  state: {
    routesChain: Storage.get("RoutesChain") || []
  },
  mutations: {
    BUILD_ROUTES_CHAIN(state, route) {
      //生成路由链，面包屑用。每个路由链都会有参数
      //路由链还用来支持无限级的子路由
      if (!route.name) {
        //解决刷新浏览器会执行一次当前路由没有 name 和 meta 的情况，导致之前保存的路由链 参数 query 丢失
        //如果没有这个判断，在打开多个层级的子路由时，刷新浏览器也能定位路由链，但是上一级参数将会丢失，
        //主要是因为没有 meta（下面判断找不到父级） 会导致路由链重新生成，重新生成的路由链是不会带上参数的。因此想保留每一级的路由参数，就应该避免重新生成路由链
        return;
      }
      let routesChain = [];
      let newRoutesChain = true; //是否需要重新递归生成路由链
      let tmpChain = [];

      for (let i = 0; i < state.routesChain.length; i++) {
        //为了把每一个子路由的参数保留住
        let chain = state.routesChain[i];
        tmpChain.push(chain);
        if (
          route.meta &&
          route.meta.parentName &&
          route.meta.parentName === chain.name
        ) {
          //如果当前跳转的路由是子路由，并且他的父路由已经在路由链里就不需要重新生成路由链，这样可以保留一级一级下来的参数值。刷新则会从本地拿
          tmpChain.push({
            name: route.name,
            meta: route.meta,
            path: route.path,
            query: route.query
          });
          routesChain = tmpChain;
          newRoutesChain = false;
          break; //非常重要，用来防止 tmpChain 被添加多个层级
        }
      }
      if (newRoutesChain) {
        routesChain = buildRoutesChain(route);
      }
      Storage.set("RoutesChain", routesChain);
      state.routesChain = routesChain;
    }
  }
};

function routesChainFunc(routesChain, route) {
  if (routesChain.length > 10) {
    alert("路由层级超过 10 条，请检查 meta.parentName 是否相互指定。");
    return;
  }
  routesChain.unshift({
    name: route.name,
    meta: route.meta,
    path: route.path,
    query: route.query
  });
}
export function buildRoutesChain(route) {
  let routesChain = [];
  routesChainFunc(routesChain, route);
  return routesChain;
}

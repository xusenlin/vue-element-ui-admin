import nprogress from "nprogress"
import "nprogress/nprogress.css"
import {appName} from "@/config/app"
import {Router} from "vue-router"
import {whiteList} from "@/router"
import {getUserInfoByKey} from "@/stores/user";


nprogress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

export const routerHook = (router: Router): Router => {

  router.beforeEach((to, _from, next) => {
    nprogress.start();
    if (getUserInfoByKey("token") || whiteList.indexOf(to.path) !== -1) {
      document.title = `${to.meta.title ? to.meta.title :"404"}-${appName}`
      next()
    } else {
      next("/login");
      document.title = `${to.meta.title}-${appName}`
    }
  });

  router.afterEach((to, _from) => {
    nprogress.done();
  });

  return router
}

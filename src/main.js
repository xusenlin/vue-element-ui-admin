import Vue from 'vue'
import store from './store/'
import ElementUI from 'element-ui'
import './theme/index.css'
import './assets/css/font-awesome.min.css'
import './assets/css/style.css'
import router from './router/'
import Config from './config/'
import Api from './api/'
import Function from './utils/'

import App from './App.vue'
Vue.prototype.$Api = Api
Vue.prototype.$Config = Config
Vue.prototype.$Func = Function

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;

  if (!sessionStorage.getItem(Config.tokenKey) && to.path != '/login') {
    next({path: '/login'});

  } else {
    next();
  }
});
router.afterEach(transition => {

});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

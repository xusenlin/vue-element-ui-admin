import App from './App.vue'
import {createApp} from 'vue'
import {createPinia} from "pinia"
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import Router from "@/router/index"
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {loadCommonComponents} from "@/utils/loadComponents"
import {routerHook} from "@/utils/routerHook"

const Pinia = createPinia()
const app = createApp(App)


loadCommonComponents(app).use(Pinia).use(routerHook(Router)).use(ElementPlus, {locale: zhCn,}).mount('#app')

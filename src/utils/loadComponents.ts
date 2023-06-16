import {App} from "vue"
import ActionBar from "@/components/ActionBar.vue"
import Pagination from "@/components/Pagination.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export const loadCommonComponents = (app: App): App => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.component("ActionBar",ActionBar)
  app.component("Pagination",Pagination)

  return app
}

import {App} from "vue"
import FormEdit from "@/components/crudForm/Edit.vue"
import Columns from "@/components/crudForm/Columns.vue"
import Pagination from "@/components/crudForm/Pagination.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export const loadCommonComponents = (app: App): App => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.component("Columns",Columns)
  app.component("FormEdit",FormEdit)
  app.component("Pagination",Pagination)
  return app
}

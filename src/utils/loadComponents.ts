import {App} from "vue"
import Columns from "@/components/crudForm/Columns.vue"
import Sel from "@/components/formItem/select/Index.vue"
import FormEdit from "@/components/crudForm/FormEdit.vue"
import SetColumn from "@/components/crudForm/SetColumn.vue"
import ActionBar from "@/components/crudForm/ActionBar.vue"
import Pagination from "@/components/crudForm/Pagination.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import CreateFileUrl from "@/components/formItem/CreateFileUrl.vue"

export const loadCommonComponents = (app: App): App => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.component("Sel",Sel)
  app.component("Columns",Columns)
  app.component("FormEdit",FormEdit)
  app.component("ActionBar",ActionBar)
  app.component("SetColumn",SetColumn)
  app.component("Pagination",Pagination)
  app.component("CreateFileUrl",CreateFileUrl)
  return app
}

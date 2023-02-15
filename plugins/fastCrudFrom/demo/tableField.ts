import {ref} from "vue";
import {useRoute} from "vue-router";
import {showFieldsByLocal} from "@/utils/app";
import { TableColumns } from "@/components/crudForm/type"


export default function () {
  const tableFields = ref<TableColumns[]>([])
  const routePath = useRoute().path
  //TODO 对接你们的展示字段
  tableFields.value = showFieldsByLocal(routePath,[
    {"field":"id","title":"ID","show":true},
    {"field":"name","title":"名字","show":true,},
    {"field":"title","title":"标题","show":true},
  ])

  return {tableFields}
}

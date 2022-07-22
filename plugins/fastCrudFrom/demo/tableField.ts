import {ref} from "vue";
import Storage from "good-storage" ;
import {useRoute} from "vue-router";


export default function () {
  const tableFields = ref([])
  const routePath = useRoute().path
  let userSetCol = Storage.get("userSetTableColumn:" + routePath, [])

  //TODO 对接你们的展示字段
  tableFields.value = userSetCol.length > 0 ? userSetCol :
      [
        {"field": "id", title: "ID", "show": true}
      ]
  return {tableFields}
}

<template>
  <div class="box">
    dsv
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import {List} from "@/api/demo";
// import SearchContent from "./SearchContent.vue"
// import { uploadDataApi } from "@/api/common.js"
// import useTableField from "./tableField.js"
// import useTableData from "./tableData.js"
// import useBtnAction from "./btnAction.js"
// import useAddEdit from "./formEdit.js"
//

onMounted(()=>{
  List({}).then(r=>{
    console.log(r)
  }).catch(()=>{})
})
// let {tableFields} = useTableField()
// let {
//   searchParams, tableData, paginationRef,
//   getDataFunc, setTableData, refreshTable,resetParams,cellDblclick
// } = useTableData()
//
// let { deleteRow,literature,material,successImport } = useBtnAction(refreshTable)
// let { editRef,rules,formDesc,submitForm } = useAddEdit(refreshTable)


</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #FFF;
  padding: 10px 0;
}
</style>

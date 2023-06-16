<template>
  <div class="box">
    <ActionBar @reset="resetParams" @refresh="refreshTable">
      <template #left>
        <el-button
            type="primary"
        >添加
        </el-button>
      </template>
      <template #right>
        <el-input v-model="searchParams.id" placeholder="请输入ID"  clearable />
      </template>
    </ActionBar>
    <el-table :data="tableData" style="width: 100%" max-height="calc(100vh - 225px)">
      <el-table-column prop="id" label="ID"/>
      <el-table-column fixed="right" width="170">
        <template #header>
          <div style="display: flex;justify-content: center;align-items: center">
            <div style="margin-right: 10px">操作</div>
          </div>
        </template>
        <template #default="scope">
          <el-button type="primary">
            编辑
          </el-button>
          <el-button type="danger" @click.prevent="deleteRow(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="paginationRef" :params="searchParams" :reqFunc="paginationList" @pageData="setTableData" />
  </div>
</template>

<script setup lang="ts">
import { paginationList,save } from "@/api/demo/index.ts"
import usePagination from "@/compositionApi/pagination.ts"
import useExtraAction from "./extraAction"

paginationList("").then(r=>{
  r.length
})

const {searchParams, tableData, paginationRef, setTableData, refreshTable,resetParams} =  usePagination()
// const {tableFields} = useTableField()
// const { openForm,rules,formDesc,submitForm ,editRef} = useFromEdit(refreshTable)
const { deleteRow } = useExtraAction(refreshTable)




</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 10px 0;
}
</style>

<template>
  <div class="box">
    <ActionBar @reset="resetParams" @refresh="refreshTable">
      <template #left>
        <el-button
            @click="openForm(null,'添加')"
            type="primary"
        >添加
        </el-button>
      </template>
      <template #right>
        <el-input v-model="searchParams.id" placeholder="请输入ID"  clearable />
      </template>
    </ActionBar>
    <el-table :data="tableData" style="width: 100%" max-height="calc(100vh - 225px)">
      <Columns :fields="tableFields"/>
      <el-table-column fixed="right" width="170">
        <template #header>
          <div style="display: flex;justify-content: center;align-items: center">
            <div style="margin-right: 10px">操作</div>
            <SetColumn v-model:fields="tableFields"/>
          </div>
        </template>
        <template #default="scope">
          <el-button type="primary" @click.prevent="openForm(scope.row,'编辑')">
            编辑
          </el-button>
          <el-button type="danger" @click.prevent="deleteRow(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="paginationRef" :params="searchParams" :reqFunc="getListFunc" @pageData="setTableData" />
    <FormEdit ref="editRef" :formDesc="formDesc" :rules="rules" @submit="submitForm"/>
  </div>
</template>

<script setup lang="ts">
import useTableField from "./tableField"
import useTableData from "./tableData"
import useExtraAction from "./extraAction"
import useFromEdit from "./formEdit"


const {searchParams, tableData, paginationRef, getListFunc, setTableData, refreshTable,resetParams} =  useTableData()
const {tableFields} = useTableField()
const { openForm,rules,formDesc,submitForm ,editRef} = useFromEdit(refreshTable)
const { deleteRow } = useExtraAction(refreshTable)


</script>x

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 10px 0;
}
</style>

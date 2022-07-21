<template>
  <el-icon style="cursor: pointer" @click="dialogShow=true"><Setting /></el-icon>
  <el-dialog
      v-model="dialogShow"
      title="表格显示设置"
      width="700px"
      append-to-body
      @open="openDialog"
  >
    <div>
      <el-checkbox-group
          v-model="checkedFields"
          @change="handleCheckedFieldChange"
      >
        <el-checkbox v-for="f in fields" :key="f.field" :label="f.field">{{
            f.hasOwnProperty('title') ? f.title : f.field
          }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <template #footer>
      <div style="float: left">
        <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
        >全选
        </el-checkbox
        >
      </div>
      <div>
        <el-button type="primary" @click="confirm">确认</el-button>
        <el-button @click="dialogShow = false">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {useRoute, useRouter} from 'vue-router'

const routePath = useRoute().path

const props = defineProps({
  fields: {type: Array, default: () => []},
})
const emit = defineEmits(['update:fields'])

let dialogShow = ref(false)
let checkedFields = ref(props.fields.filter(r => (r.show == true)).map(r => (r.field)))

const checkAll = ref(false)
const isIndeterminate = ref(false)

const openDialog = () => {
  checkedFields.value = props.fields.filter(r => (r.show == true)).map(r => (r.field))
  checkAll.value = checkedFields.value.length === props.fields.length
  isIndeterminate.value = checkedFields.value.length !== props.fields.length
}

const handleCheckAllChange = val => {
  checkedFields.value = val ? props.fields.map(r => (r.field)) : []
  isIndeterminate.value = false
}
const handleCheckedFieldChange = (value) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === props.fields.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < props.fields.length
}
const confirm = () => {
  if (checkedFields.value.length === 0) {
    ElMessage.warning("最少选择一个字段！")
    return
  }
  let v = props.fields
  v.forEach(r => {
    if (checkedFields.value.indexOf(r.field) != -1) {
      r.show = true
    } else {
      r.show = false
    }
  })
  localStorage.setItem("userSetTableColumn:" + routePath, JSON.stringify(v))
  emit('update:fields', v)
  dialogShow.value = false
}
</script>

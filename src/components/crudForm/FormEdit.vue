<template>
  <el-dialog
      v-model="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :title="title"
      width="60%"
  >
    <div class="edit-form">
      <el-form :inline="inline" :model="form" label-width="120px" :rules="rules" label-position="top" ref="formRef">
        <el-form-item
            v-for="(item,f) in formDesc"
            :key="f"
            :label="item.title ? item.title : f" :prop="f">
          <component :disabled="actionType === FormActionType.Edit && item.editDisabled" v-bind="item.attrs" :is="item.componentName"
                     v-model="form[f]"/>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="submitForm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {ref, withDefaults} from 'vue'
import {ElMessage, FormInstance} from "element-plus"
import {FormActionType, FormDesc, FormFields, RulesDesc} from "./type"


const props = withDefaults(defineProps<{
  formDesc: FormDesc,
  rules: RulesDesc,
  inline?: boolean
}>(), {inline: false})


const emit = defineEmits<{
  (e: 'submit', o: FormFields, cb: () => void, actionType: FormActionType): void,
}>()



const formRef = ref<FormInstance|null>(null)
const dialogVisible = ref(false)
const title = ref("编辑")
const form = ref<FormFields>({})//表单字段保存
const actionType = ref<FormActionType>(0)//当前是新增、编辑、预览、核实？？


const OpenEdit = (row: FormFields, t: string,action:FormActionType,idField = "id") => {
  //idField 用于编辑的时候主键id
  //新增时也可以设置 row 给表单默认值，比如编辑用户默认密码之类的
  title.value = t
  resetForm()
  form.value = {}
  actionType.value = action

  if (row) {
    for (let k in props.formDesc) {
      form.value[k] = row[k] || null
    }
    if(action === FormActionType.Edit){
      form.value[idField] = row[idField]
    }
  }else {
    for (let k in props.formDesc) {
      form.value[k] = null
    }
  }
  dialogVisible.value = true
}


const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid: boolean) => {
    if (valid) {
      emit('submit', form.value, () => {
        dialogVisible.value = false
        ElMessage.success(`${title.value}成功`)
      }, actionType.value)
    } else {
      ElMessage.warning(`请检查必填内容`)
    }
  })
}

const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}

defineExpose({OpenEdit})

</script>
<style scoped>
.edit-form {
  text-align: left;
  max-height: calc(100vh - 380px);
  overflow-y: auto;
}
</style>

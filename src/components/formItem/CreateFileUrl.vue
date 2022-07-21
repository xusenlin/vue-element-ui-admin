<template>
  <el-upload
      class="createFileUrl"
      :action="req.url"
      v-if="uploadDomShow"
      :on-progress="onProgress"
      :headers="req.headers"
      :on-success="onSuccess"
      :before-upload="beforeUpload"
      :on-error="onError"
      :show-file-list="false"
      :limit="1"
  >
    <div style="width: 100%">
      <el-button
          text
          bg
          type="info" style="width: 100%">
        {{ modelValue ? `点击重新选择文件` : "选择一个文件" }}
      </el-button>
      <p class="file-tip" v-if="modelValue">
        当前文件路径:{{ modelValue }}
      </p>
    </div>
    <template #tip>
    </template>
  </el-upload>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {upload} from "@/api/demo"
import {ElMessage, ElLoading} from 'element-plus'

const req = upload()


defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void,
}>()

const uploadDomShow = ref(true)

let loadingInstance: any = null

const beforeUpload = () => {
  loadingInstance = ElLoading.service({fullscreen: true, body: true, lock: true, text: "开始上传中..."})
}

const onProgress = (file: any, uploadFiles: { percentage: any; }) => {

  let {percentage} = uploadFiles
  let text = document.querySelector(".el-loading-text")
  text ? text.innerHTML = `已经上传${percentage}%，请稍等...` : ""
}
const onSuccess = (r: any) => {
  loadingInstance.close()
  uploadDomShow.value = false
  setTimeout(() => {
    uploadDomShow.value = true
  }, 400)
  emit('update:modelValue', r.data)
}
const onError = (r: any) => {
  let e = JSON.parse(r.message)
  ElMessage.error(e.msg)
  loadingInstance.close()
}

</script>

<style lang="scss">
.createFileUrl {
  width: 100%;

  .el-upload--text {
    width: 100%;
  }

  .file-tip {
    font-size: 12px;
    color: #6e6e6e;
  }
}

</style>

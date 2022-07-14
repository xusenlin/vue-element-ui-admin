<script setup lang="ts">
import {useFullscreen} from '@vueuse/core'
const {isFullscreen, toggle} = useFullscreen()

</script>

<template>
  <div class="full-screen" :title="isFullscreen?'退出全屏':'全屏'">
    <el-icon :size="16" @click="toggle">
      <FullScreen/>
    </el-icon>
  </div>
</template>
<style scoped>
.full-screen {
  cursor: pointer;
  height: 16px;
  width: 16px;
}
</style>

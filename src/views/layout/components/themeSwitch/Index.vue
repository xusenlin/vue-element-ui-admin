<script setup lang="ts">
import DarkIcon from './icons/Dark.vue'
import LightIcon from './icons/Light.vue'
const emit = defineEmits(["toggleDarkMode"])
</script>

<template>
  <div class="themeSwitch">
    <div class="switch" @click="emit('toggleDarkMode')">
      <ElIcon :size="13" class="dark-icon">
        <DarkIcon/>
      </ElIcon>
      <ElIcon :size="13" class="light-icon">
        <LightIcon/>
      </ElIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.themeSwitch{
  display: flex;
  align-items: center;
  color: #303133;
  transition: border-color var(--el-transition-duration),background-color var(--el-transition-duration-fast);
  height: 24px;
  padding: 0 16px;
  .switch{
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #f2f2f2;
    cursor: pointer;
    overflow: hidden;
    transition:background-color 0.4s;
    .dark-icon,
    .light-icon {
      position: absolute;
      left: 0;
      border-radius: 50%;
      padding: 2px;
      cursor: pointer;
      background-color: #fff;
      transition:all 0.4s;
    }
  }
}

@at-root .dark {
  .switch{
    background-color: #2f2f2f!important;
  }
  .dark-icon {
    opacity: 1;
    background-color: #000!important;
    left: 20px!important;
    color: #fff!important;
  }
  .light-icon {
    opacity: 0;
  }
}
</style>

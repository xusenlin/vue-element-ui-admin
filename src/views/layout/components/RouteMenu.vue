<script setup lang="ts">
import {RouteRecordRaw} from "vue-router";

defineProps<{
  menu: RouteRecordRaw
  path:string
}>()
</script>

<template>
  <el-sub-menu
      v-if="menu.children && menu.children.length !==0"
      :index="path">
    <template #title>
      <el-icon v-if="menu.meta && menu.meta.icon">
        <component  :is="menu.meta.icon"/>
      </el-icon>
      <span>{{  menu.meta.title }}</span>
    </template>
    <RouteMenu v-for="m in menu.children" :menu="m" :key="m.path" :path="path +'/' + m.path"/>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.redirect ? menu.redirect :path">
    <el-icon v-if="menu.meta && menu.meta.icon">
      <component  :is="menu.meta.icon"/>
    </el-icon>
    <span>{{ menu.meta.title }}</span>
  </el-menu-item>
</template>

<style scoped>

</style>

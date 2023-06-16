<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useRoute} from 'vue-router'
import {appName} from "@/config/app"
import {useAppStore} from "@/stores/app";
import {menus} from "@/router/menu.ts"
import RouteMenu from "./components/RouteMenu.vue";

const route = useRoute()
const appStore = useAppStore()
const {asideCollapse} = storeToRefs(appStore)
</script>

<template>
  <div class="aside">
    <div class="logo">
      <img src="../../assets/logo.svg" alt="" v-if="asideCollapse">
      <span v-else>
        <img style="width: 20px;margin-right: 6px;position: relative;top: 3px" src="../../assets/logo.svg"
             alt="">{{ appName }}
      </span>
    </div>
    <el-menu
        class="menu"
        :collapse="asideCollapse"
        router
        :collapse-transition="true"
        :default-active="route.path"
    >
      <RouteMenu :path="menu.path" :menu="menu" v-for="menu in menus" :key="menu.path"/>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.aside {
  border-right: 1px solid #dcdfe6;
  height: 100vh;
  overflow: hidden;

  .logo {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
    }
  }

  .menu {
    height: calc(100vh - 60px);
    overflow-y: auto;
    border-right: none;
  }
}

</style>

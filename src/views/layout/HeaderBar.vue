<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useAppStore} from "@/stores/app";
import {useUserStore} from "@/stores/user";
import {useMediaQuery} from "@vueuse/core";
import Breadcrumb from "@/views/layout/components/Breadcrumb.vue"
import Fullscreen from "@/views/layout/components/Fullscreen.vue"
import ThemeSwitch from "@/views/layout/components/themeSwitch/Index.vue"
//===========
const appStore = useAppStore()
const { asideCollapse } = storeToRefs(appStore)
//==========
const userStore = useUserStore()
const { userName } = storeToRefs(userStore)

const isMobile = useMediaQuery(`(max-width: 750px)`)


const loginOut = () => {
  userStore.loginOut()
}
</script>

<template>
  <div class="header">
    <div class="header-left">
      <el-button link @click="appStore.toggleAside()">
        <el-icon  :size="22" :class="asideCollapse ? '' : 'aside-collapse'">
          <expand />
        </el-icon>
      </el-button>
      <Breadcrumb v-if="!isMobile" />
    </div>
    <div class="header-right">
      <Fullscreen/>
      <ThemeSwitch @toggleDarkMode="appStore.toggleDarkMode()"/>
      <el-dropdown>
          <span class="el-dropdown-link">
            {{ userName }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item >修改密码</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aside-collapse{
    transform: rotate(180deg);
  }
  .header-left{
    display: flex;
    .breadcrumb{
      line-height: 2;
      margin-left: 20px;
    }
  }
  .header-right{
    display: flex;
    align-items: center;
    .user{
      cursor: pointer;
    }
  }
}
</style>

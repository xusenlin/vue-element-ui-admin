<script setup lang="ts">
import {appName} from "@/config/app"
import {useAppStore} from "@/stores/app";
import {storeToRefs} from "pinia";

const appStore = useAppStore()
const {asideCollapse} = storeToRefs(appStore)
</script>

<template>
  <div class="aside">
    <div class="logo">
      <img src="../../assets/logo.svg" alt="" v-if="asideCollapse">
      <span v-else>
        <img style="width: 20px;margin-right: 6px;position: relative;top: 3px" src="../../assets/logo.svg" alt="">{{ appName }}
      </span>
    </div>
    <el-menu
        class="menu"
        :collapse="asideCollapse"
        default-active="2"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <document/>
        </el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document/>
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.aside{
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
  .menu{
    height: calc(100vh - 60px);
    overflow-y: auto;
    border-right:none;
  }
}

</style>

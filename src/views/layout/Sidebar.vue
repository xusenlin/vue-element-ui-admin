<template>
  <div class="sidebar-content">
    <div class="sidebar-top">
      <img
        class="logo"
        v-if="system.miniSidebar === 1"
        src="../../assets/images/whiteLogo.svg"
        alt=""
      />
      <span v-else>{{ GlobalCfg.siteName }}</span>
    </div>
    <div class="sidebar-menu">
      <el-menu
        router
        background-color="#222d32"
        text-color="#fff"
        :default-active="$route.path"
        style="border-color: #222d32"
        :collapse="system.miniSidebar === 1"
      >
        <template v-for="(menu_v, menu_k) in menu">
          <el-submenu v-if="menu_v.children" :index="menu_k" :key="menu_k">
            <template slot="title">
              <i :class="menu_v.icon"></i>
              <span slot="title">{{ menu_v.name }}</span>
            </template>
            <el-menu-item
              v-for="(menuChildren_v, menuChildren_k) in menu_v.children"
              :key="menuChildren_k"
              :index="menuChildren_v.path"
            >
              <i class="is-children fa fa-circle-o"></i>
              <span slot="title">{{ menuChildren_v.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="menu_v.path" :key="menu_k">
            <i :class="menu_v.icon"></i>
            <span slot="title">{{ menu_v.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="sidebar-bottom" @click="$store.commit('MINI_SIDEBAR_TOGGLE')">
      <div class="icon-left">
        <i class="el-icon-back"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Menu from "@/menu/index";
export default {
  name: "Sidebar",
  data() {
    return {
      menu: Menu
    };
  },
  methods: {},
  computed: mapState(["system"])
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
.sidebar-content {
  overflow: hidden;
  background-color: #222d32;
  transition: all 0.3s ease-in-out;
  .sidebar-top {
    width: 100%;
    color: #fff;
    background-color: mix(#000, $--color-primary, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: $--top-height;
    span {
      white-space: nowrap;
    }
    .logo {
      width: 38px;
    }
  }
  .sidebar-menu {
    width: 100%;
    height: calc(100vh - #{$--top-height} - #{$--top-height});
    overflow-y: auto;
    overflow-x: hidden;
  }
  .sidebar-bottom {
    position: relative;
    width: 100%;
    height: $--top-height;
    background-color: mix(#000, $--color-primary, 10%);
    color: #fff;
    cursor: pointer;
    .icon-left {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 0;
      width: 64px;
      height: 100%;
      font-size: 20px;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>

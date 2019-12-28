<template>
  <nav class="nav-bar">
    <div class="nav-bar-scroll">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in $route.matched"
          v-show="item.meta && item.meta.title"
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables";
.nav-bar {
  height: 38px;
  width: 100%;
  z-index: 8;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  transition: all 0.2s;
  .nav-bar-scroll {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
  }
}
</style>

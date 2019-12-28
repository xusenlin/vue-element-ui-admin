<template>
  <nav class="nav-bar">
    <ScrollPane class="nav-bar-scroll">
      <router-link
        :to="v.path"
        class="nav-bar-tag"
        v-for="(v, i) in nav"
        :key="i.path"
        :class="$route.path === v.path ? ' active' : ''"
      >
        <i class="point"></i>
        {{ v.title }}
        <div v-show="nav.length !== 1" class="close-box">
          <span
            class="el-icon-close"
            @click.prevent.stop="closeSelectedTag(i)"
          ></span>
        </div>
      </router-link>
    </ScrollPane>
  </nav>
</template>

<script>
import ScrollPane from "@/components/ScrollPane.vue";

export default {
  data() {
    return {
      nav: []
    };
  },
  components: {
    ScrollPane
  },
  created() {
    this.$router.afterEach(this.afterEachHandler);
  },
  methods: {
    afterEachHandler(to) {
      // //判断当前标签是否需要保持，如果不，则关闭本标签
      //keepAlive用来缓存页面的。
      // if (!from.meta.keepAlive) {
      //   this.nav = this.nav.filter(item => item.path !== from.path);
      // }
      //判断当前是否存在即将跳转的标签，如果不存在，则创建
      if (!this.nav.some(item => item.path === to.path)) {
        this.nav.push({
          path: to.path,
          title: to.meta.title
        });
      }
    },
    closeSelectedTag(i) {
      let nav = this.nav;
      let thisPath = nav[i].path;
      nav.splice(i, 1);
      if (thisPath === this.$route.path) {
        this.$router.push(nav[nav.length - 1].path);
      }
    }
  },
  mounted: function() {
    this.nav.push({
      path: this.$route.path,
      title: this.$route.meta.title
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables.scss";
.nav-bar {
  height: 38px;
  width: 100%;
  z-index: 8;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  transition: all 0.2s;
  .nav-bar-tag {
    height: 26px;
    color: #495060;
    margin: 6px 2px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 12px;
    line-height: 26px;
    border: 1px solid #ebeef5;
    border-radius: 2px;
    display: inline-block;
    .close-box {
      display: inline-block;
      height: 100%;
      border-left: 1px solid #ebeef5;
      margin-left: 6px;
    }
    &:hover {
      opacity: 0.85;
      //box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
      //border-color: #3d8dbc;
    }
    .point {
      display: none;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: auto 0;
      position: relative;
      background: #fff;
    }
    .el-icon-close {
      font-weight: bolder;
      margin-left: 6px;
      &:hover {
        color: #ff0000;
      }
    }
  }
  .active {
    border: 1px solid $--color-primary;
    background: $--color-primary;
    color: #fff;
    .point {
      display: inline-block;
    }
  }
  .scroll-container {
    flex: 1;
    height: 100%;
  }
}
</style>

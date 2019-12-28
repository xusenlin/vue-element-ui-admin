<template>
  <div
    class="main"
    :class="{
      hide: system.hideSidebar === 1,
      mini: system.miniSidebar === 1
    }"
  >
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="body">
      <BodyTop />
      <BodyMain />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Sidebar from "./Sidebar.vue";
import BodyTop from "./BodyTop.vue";
import BodyMain from "./BodyMain.vue";
export default {
  name: "App",
  data() {
    return {
      userName: ""
    };
  },
  computed: mapState(["system"]),
  methods: {},
  components: { Sidebar, BodyTop, BodyMain }
};
</script>
<style lang="scss">
@import "../../assets/css/variables.scss";
.main {
  width: 100vw;
  .sidebar {
    width: $--sidebar-width;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 10;
    transition: width 0.3s ease-in-out;
  }
  .body {
    margin-left: $--sidebar-width;
    position: relative;
    height: 100vh;
    transition: margin-left 0.3s ease-in-out;
  }
}
.mini {
  .sidebar {
    width: 64px !important;
    .sidebar-top {
      background-color: #222d32 !important;
    }
    .icon-left {
      transform: rotate(180deg);
    }
  }
  .body {
    margin-left: 64px !important;
  }
}
.hide {
  .sidebar {
    width: 0 !important;
  }
  .body {
    margin-left: 0 !important;
  }
}
</style>

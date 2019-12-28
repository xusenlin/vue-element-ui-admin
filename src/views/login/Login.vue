<template>
  <div
    style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center"
  >
    <el-button type="primary" @click="login">登陆设置Token</el-button>
  </div>
</template>
<script>
import { setToken } from "@/utils/common";
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      setToken("HJDF844GDFG5D8J7FGHFG5");
      this.$router.push("/");
    }
  },
  mounted: function() {}
};
</script>

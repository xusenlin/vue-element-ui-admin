<template>
  <el-card shadow="never">
    <div>{{ $route.query.id }}</div>
    <el-button v-if="$route.query.id != '6'" type="primary" @click="openRoute"
      >携带参数打开下级路由，并且携带的参数在面包屑每一级正确导航，刷新浏览器也可使用</el-button
    >
    <br /><br /><br />
    使用场景为某一列表的详情页面关联的数据详情的详情的详情的详情，每一层级都有参数，返回和刷新浏览器面包屑都能正确导航
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    openRoute() {
      let id = (parseInt(this.$route.query.id) || 1) + 1;
      this.$router.push({
        path: "/article_manage_category" + id,
        query: { id }
      });
    }
  },
  components: {}
};
</script>

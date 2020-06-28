export default [
  {
    path: "home",
    name: "DashboardHome",
    meta: {
      title: "首页"
    },
    component: resolve => require(["@/views/home/Index.vue"], resolve)
  }
];

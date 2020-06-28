export default [
  {
    path: "article_manage_list",
    name: "ArticleManageList",
    meta: {
      title: "文章列表"
    },
    component: resolve =>
      require(["@/views/articleManage/articleList/Index.vue"], resolve)
  },
  {
    path: "article_manage_category",
    name: "ArticleManageCategory",
    meta: {
      title: "多层级路由示例"
    },
    component: resolve =>
      require(["@/views/articleManage/routeDemo/Index.vue"], resolve)
  },
  {
    path: "article_manage_category2",
    name: "ArticleManageCategory2",
    meta: {
      title: "2层级路由示例",
      parentName: "ArticleManageCategory"
    },
    component: resolve =>
      require(["@/views/articleManage/routeDemo/Index.vue"], resolve)
  },
  {
    path: "article_manage_category3",
    name: "ArticleManageCategory3",
    meta: {
      title: "3层路由示例",
      parentName: "ArticleManageCategory2"
    },
    component: resolve =>
      require(["@/views/articleManage/routeDemo/Index.vue"], resolve)
  },
  {
    path: "article_manage_category4",
    name: "ArticleManageCategory4",
    meta: {
      title: "4层路由示例",
      parentName: "ArticleManageCategory3"
    },
    component: resolve =>
      require(["@/views/articleManage/routeDemo/Index.vue"], resolve)
  },
  {
    path: "article_manage_category5",
    name: "ArticleManageCategory5",
    meta: {
      title: "5层路由示例",
      parentName: "ArticleManageCategory4"
    },
    component: resolve =>
      require(["@/views/articleManage/routeDemo/Index.vue"], resolve)
  },
  {
    path: "article_manage_category6",
    name: "ArticleManageCategory6",
    meta: {
      title: "6层路由示例",
      parentName: "ArticleManageCategory5"
    },
    component: resolve =>
      require(["@/views/articleManage/routeDemo/Index.vue"], resolve)
  }
];

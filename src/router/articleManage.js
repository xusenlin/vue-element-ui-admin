import Layout from "@/views/layout/App.vue";
export default {
  path: "/article_manage",
  component: Layout,
  name: "ArticleManage",
  redirect: "/article_manage/list",
  meta: {
    title: "文章管理"
  },
  children: [
    {
      path: "list",
      name: "ArticleManageList",
      meta: {
        title: "文章列表"
      },
      component: resolve =>
        require(["@/views/articleManage/articleList/Index.vue"], resolve)
    }
  ]
};

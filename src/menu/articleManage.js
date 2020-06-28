export default {
  name: "文章管理",
  permissionsKey: "",
  icon: "fa fa-envelope-open",
  children: {
    courseCardList: {
      name: "文章列表",
      permissionsKey: "",
      path: "/article_manage_list"
    },
    organCardList: {
      name: "多层级路由示例",
      permissionsKey: "",
      path: "/article_manage_category"
    }
  }
};

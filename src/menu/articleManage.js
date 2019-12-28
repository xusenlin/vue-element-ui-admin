export default {
  name: "文章管理",
  permissionsKey: "",
  icon: "fa fa-envelope-open",
  children: {
    courseCardList: {
      name: "文章列表",
      permissionsKey: "",
      path: "/article_manage/list"
    },
    organCardList: {
      name: "文章分类",
      permissionsKey: "",
      path: "/articleManage/category"
    }
  }
};

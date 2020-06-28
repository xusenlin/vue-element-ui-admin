export default {
  path: "/login",
  name: "Login",
  meta: {
    title: "后台登录",
    keepAlive: false
  },
  components: {
    blank: resolve => require(["@/views/login/Login.vue"], resolve)
  }
};

import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title:string//菜单的名字和网页标题的名字
    icon?:string,//用于菜单的icon名字
    auth?:string//此菜单的权限K
    hideMenu?:boolean//隐藏此菜单
  }
}

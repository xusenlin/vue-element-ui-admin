import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title:string//菜单、网页标题、面包屑的名字
    icon?:string//用于菜单的icon名字
    auth?:string//此菜单的权限K
    hideMenu?:boolean//隐藏此菜单
    alwaysShow?:boolean//必须设置在有children的节点上，当没有子菜单时是否总是显示。
  }
}

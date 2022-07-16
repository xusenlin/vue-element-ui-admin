import {reactive} from "vue";
import {RouteRecordRaw} from "vue-router";
import {menuRoute} from "@/router/index";


//处理路由让其作为菜单
//当hideMenu会删除此菜单。默认当有children字段并且里面为空时不显示当前菜单，但是在此路由添加alwaysShow也会显示出来
const menuRouteFilter = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  let result: RouteRecordRaw[] = [];
  routes.forEach(r => {
    let { meta,path,redirect } = r;
    if(meta?.hideMenu){
      return
    }
    let v: RouteRecordRaw = {meta,path,redirect} as RouteRecordRaw;

    let children = r.children && Array.isArray(r.children) && r.children.length !== 0 ?
        menuRouteFilter(r.children) : []

    if (children.length !== 0) {
      result.push({...v,children})
      return;
    }
    if(!r.children || meta?.alwaysShow){//如果没有children字段或者alwaysShow时 需要将当前路由加入
      result.push(v)
    }
  })
  return result
}

const routeMenu:RouteRecordRaw[] = menuRouteFilter(menuRoute)

export const menus = reactive(routeMenu)

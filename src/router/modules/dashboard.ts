import {RouteRecordRaw} from "vue-router";

export const Dashboard: RouteRecordRaw = {
  path: '/',
  component: () => import('@/views/layout/MainLayout.vue'),
  redirect: '/dashboard',
  meta: {icon: 'Grid', title: "首页",},
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/Index.vue'),
      meta: {icon: 'Grid', title: "首页", hideMenu:true}
    }
  ]
}

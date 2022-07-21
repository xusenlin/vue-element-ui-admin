import {RouteRecordRaw} from "vue-router";

export const Dashboard: RouteRecordRaw = {
  path: '/',
  component: () => import('@/views/layout/MainLayout.vue'),
  redirect: '/dashboard',
  meta: {icon: 'Guide', title: "仪表盘", alwaysShow: true},
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/Index.vue'),
      meta: {icon: 'Guide', title: "首页", hideMenu: true}
    }
  ]
}

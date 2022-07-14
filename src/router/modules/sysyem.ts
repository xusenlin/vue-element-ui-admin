import {RouteRecordRaw} from "vue-router";

export const System: RouteRecordRaw = {
  path: '/system',
  component: () => import('@/views/layout/MainLayout.vue'),
  redirect: '/system/fastCrudFrom',
  meta: {icon: 'Grid', title: "快速生成表单"},
  children: [
    {
      path: 'fastCrudFrom',
      component: () => import('@/views/system/fastCrudFrom/Index.vue'),
      meta: {icon: 'Grid', title: "快速生成表单",}
    },
    {
      path: 'demo',
      component: () => import('@/views/system/demo/Index.vue'),
      meta: {icon: 'Grid', title: "生成的demo"}
    }
  ]
}

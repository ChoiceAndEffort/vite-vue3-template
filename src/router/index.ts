/*
 * @Author: lg
 * @Date: 2023-06-09 18:10:30
 * @LastEditors: lg
 * @LastEditTime: 2024-08-02 16:54:30
 * @Description:
 * @FilePath: \vite-vue3-template\src\router\index.ts
 */
// https://blog.csdn.net/m0_52518047/article/details/128332994
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import type { Router } from 'vue-router';
import Layout from '@/components/layout/major/index.vue';
const publicRoutes = [
  {
    path: '/',
    redirect: '/ui'
  },
  {
    path: '/ui',
    name: 'layout',
    component: Layout,
    children: []
  },
  {
    path: '/test-lg',
    component: () => import('@/views/test-lg/major/index.vue')
  },
  {
    path: '/test-role',
    component: () => import('@/views/test-role/major/index.vue')
  },
  {
    path: '/:catchAll(.*)', //404页面
    component: () => import('@/components/not-found/404.vue')
  }
] as Array<RouteRecordRaw>;
const router: Router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes,
  scrollBehavior(to, from, savePosition): any {
    if (savePosition) {
      //解决页面从列表页跳转到详情页返回,初始在原来位置
      return savePosition;
    } else {
      //解决页面跳转后页面高度和前一个页面高度一样
      return { x: 0, y: 0 };
    }
  }
});

export default router;

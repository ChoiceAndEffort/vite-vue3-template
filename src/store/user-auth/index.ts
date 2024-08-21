/*
 * @Author: lg
 * @Date: 2024-05-21 11:12:27
 * @LastEditors: lg
 * @LastEditTime: 2024-08-02 16:27:05



 * @Description:
 * @FilePath: \vite-vue3-template\src\store\user-auth\index.ts
 */
import { defineStore } from 'pinia';

import router from '@/router';

const useUserAuthStore = defineStore({
  id: 'ssii-user-bk-user-auth',
  state: (): any => ({
    menuList: [],
    defaultActive: '', //默认高亮页面
    collapse: false, //侧边栏是否收起
    breadcrumbList: [] //面包屑
  }),
  getters: {
    getMenuList(): any {
      return this.menuList;
    },
    getDefaultActive(): any {
      return this.defaultActive;
    },
    getCollapse(): boolean {
      return this.collapse;
    },
    getBreadcrumbList(): any {
      return this.breadcrumbList;
    }
  },
  actions: {
    setCollapse(v: boolean) {
      this.collapse = v;
    },
    setMenuList(v: any) {
      this.menuList = v;
    },
    setDefaultActive(v: string) {
      this.defaultActive = v;
    },
    setBreadcrumbList(v: any) {
      this.breadcrumbList = v;
    }
  },

  persist: [
    {
      paths: [],
      storage: localStorage
    },
    {
      paths: ['defaultActive', 'breadcrumbList', 'menuList'],
      storage: sessionStorage
    }
  ]
});

export default useUserAuthStore;

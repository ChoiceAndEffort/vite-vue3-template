/*
 * @Author: lg
 * @Date: 2024-05-20 17:25:03
 * @LastEditors: lg
 * @LastEditTime: 2024-08-07 08:38:29
 * @Description:
 * @FilePath: \vite-vue3-template\src\router\permission\index.ts
 */
import router from '../index';
import { getCurrentLoginInfo } from '@/utils/get-token/index';
import { permissionGroup } from '@/utils/deal-router-permission/index';

import { mockMenuList } from '@/router/constants';
import useUserAuthStore from '@/store/user-auth/index';
import { cloneDeep } from 'lodash-es';

let registerRouteFresh = true;

//路由白名单
const whiteList: Array<string> = [];

router.beforeEach(async (to, from, next) => {
  const userAuthStore = useUserAuthStore();

  const currentLoginInfo = getCurrentLoginInfo();

  const menuList = permissionGroup(mockMenuList);

  // console.log('menuList------', menuList);
  userAuthStore.setMenuList(menuList);

  //进入配置的白名单
  if (whiteList.includes(to.path)) {
    next();
  } else if (currentLoginInfo?.loginInfo?.token) {
    if (registerRouteFresh) {
      userAuthStore.getMenuList?.forEach((item: any) => {
        //判断菜单有没有子集
        //   router.addRoute('layout', mapRouterTree(item));
        router.addRoute('layout', item);
      });

      next({ ...to, replace: true });
      registerRouteFresh = false;
      return false;
    }
    // console.log(router.getRoutes(), '所有的路由');
    next();
  } else {
    console.log('未登录*--------------', to);
    // localStorage.setItem('loginBackUrl', 'ssii-user-bk');
    // //避免死循环
    // if (to.path === '/ssii-common/login') {
    //   next();
    //   return false;
    // }
    // next({ path: '/ssii-common/login', replace: true, force: true });
  }
});

router.afterEach((to, from) => {
  //获取路由层级菜单
  const userAuthStore: Record<string, any> = useUserAuthStore();
  const getBreadcrumbList = userAuthStore.getBreadcrumbList;
  getBreadcrumbList.push(to);
});

router.onError((error, to) => {
  if (
    error.message?.includes('Failed to fetch dynamically imported module') ||
    error.message?.includes('error loading dynamically imported module')
  ) {
    // reload()：类似于点击浏览器上的刷新页面按钮
    window.location.reload();
  }
  // if (error.message.includes('Failed to fetch dynamically imported module')) {
  //   window.location = to.fullPath;
  // }
});

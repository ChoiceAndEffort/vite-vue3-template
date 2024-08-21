/*
 * @Author: lg
 * @Date: 2024-05-18 10:56:36
 * @LastEditors: lg
 * @LastEditTime: 2024-07-10 09:11:40
 * @Description:
 * @FilePath: \ssii-user-bk\src\hooks\use-route-router\index.ts
 */
import type {
  Router,
  RouteLocationNormalizedLoaded as Route
} from 'vue-router';
import { useRouter, useRoute } from 'vue-router';

export function useRouteRouter(): any {
  const router: Router = useRouter();
  const route: Route = useRoute();
  /**
   * @description:路由跳转传参 ,建议使用query传参,params传参最新版本已经逐步废弃
   * @param {string} name
   * @param {*} params 要在路由path上进行配置 eg:path:"/linked2/:id/:age
   * @param {*} query 参数暴漏在浏览器链接上
   * @return {*}
   */
  const routerPushByName = (name: string, params = {}, query = {}) => {
    try {
      router.push({ name, params, query });
    } catch (error) {
      console.log(error);
    }
  };

  const routerPushByPath = (path: string, query = {}) => {
    try {
      router.push({ path, query });
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * @description:路由跳转传参 ,建议使用query传参,params传参最新版本已经逐步废弃
   * @param {string} name
   * @param {*} params 要在路由path上进行配置 eg:path:"/linked2/:id/:age
   * @param {*} query 参数暴漏在浏览器链接上
   * @return {*}
   */
  const routerReplaceByName = (name: string, params = {}, query = {}) => {
    try {
      router.replace({ name, params, query });
    } catch (error) {
      console.log(error);
    }
  };

  const routerReplaceByPath = (path: string, query = {}) => {
    try {
      router.replace({ path, query });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    router,
    route,
    routerPushByName,
    routerPushByPath,
    routerReplaceByName,
    routerReplaceByPath
  };
}

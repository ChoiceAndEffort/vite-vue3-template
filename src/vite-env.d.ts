/*
 * @Author: lg
 * @Date: 2024-05-10 16:09:19
 * @LastEditors: lg
 * @LastEditTime: 2024-05-13 17:24:38
 * @Description: 
 * @FilePath: \vite-vue3-template\src\vite-env.d.ts
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

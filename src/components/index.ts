/*
 * @Author: lg
 * @Date: 2023-08-31 18:06:40
 * @LastEditors: lg
 * @LastEditTime: 2024-05-10 16:56:44
 * @Description:
 * @FilePath: \vite-project\src\components\index.ts
 */

import HbSvgIcon from '@/components/hb-svg-icon/index.vue';
import HbImagePlus from '@/components/hb-image-plus/index.vue';

//注册全局组件
const groupComponents = {
  'hb-svg-icon': HbSvgIcon,
  'hb-image-plus': HbImagePlus
};

import type { App } from 'vue';

export default function (app: App) {
  for (const [key, component] of Object.entries(groupComponents)) {
    app.component(key, component);
  }
}

/*
 * @Author: lg
 * @Date: 2023-08-31 18:06:40
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 14:24:42
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\index.ts
 */

import HbSvgIcon from '@/components/hb-svg-icon/index.vue';
import HbImagePlus from '@/components/hb-image-plus/index.vue';
import HbMajorPage from '@/components/hb-major-page/index.vue';
import HbCardModule from '@/components/hb-card-module/index.vue';
import HbContentLayout from '@/components/hb-content-layout/index.vue';

//注册全局组件
const groupComponents = {
  'hb-svg-icon': HbSvgIcon,
  'hb-image-plus': HbImagePlus,
  'hb-major-page': HbMajorPage,
  'hb-card-module': HbCardModule,
  'hb-content-layout': HbContentLayout
};

import type { App } from 'vue';

export default function (app: App) {
  for (const [key, component] of Object.entries(groupComponents)) {
    app.component(key, component);
  }
}

/*
 * @Author: lg
 * @Date: 2023-08-31 18:06:40
 * @LastEditors: lg
 * @LastEditTime: 2024-07-02 17:54:24
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\index.ts
 */

import HbSvgIcon from '@/components/hb-svg-icon/index.vue';
import HbImagePlus from '@/components/hb-image-plus/index.vue';
// import HbTable from '@/components/table/src/main.vue';
// import HbSelectPerson from '@/components/select-person/src/main.vue';
import WmSelectPerson from '@/components/wm-select-person/src/main.vue';
import SelectDepartmentPerson from '@/components/select-department-person/src/main.vue';

//注册全局组件
const groupComponents = {
  'hb-svg-icon': HbSvgIcon,
  'hb-image-plus': HbImagePlus,
  // 'hb-table': HbTable,
  // 'hb-select-person': HbSelectPerson,
  'wm-select-person': WmSelectPerson,
  'select-department-person': SelectDepartmentPerson
};

import type { App } from 'vue';

export default function (app: App) {
  for (const [key, component] of Object.entries(groupComponents)) {
    app.component(key, component);
  }
}

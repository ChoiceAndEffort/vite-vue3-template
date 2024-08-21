/*
 * @Author: suchiva@126.com
 * @Date: 2023-01-29 22:00:13
 * @LastEditors: suchiva
 * @LastEditTime: 2023-01-31 13:13:35
 * @FilePath: /su-code/vue3/packages/su-ui-plus/src/components/table/index.ts
 * @Description: 导入文件
 *
 * Copyright (c) 2023 by suchiva@126.com, All Rights Reserved.
 */
/*
 * @Author: yuanjunyi
 * @Date: 2023-02-14 08:50:39
 * @LastEditors: suchiva suchvia@126.com
 * @LastEditTime: 2023-02-26 20:07:38
 * @Description: this is description
 */
export * from  './src/types'
import { App } from "vue";
import HbTable from "./src/main.vue";
export default {
  install(app: App) {
    app.component("HbTable", HbTable);
  },
};






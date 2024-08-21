/**
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-18 13:19:12
 * @LastEditors: suchiva suchvia@126.com
 * @LastEditTime: 2023-02-18 13:46:10
 * @FilePath: /su-code/vue3/packages/su-ui-plus/src/components/select-person/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';
import HbSelectPerson from './src/main.vue';

export { HbSelectPerson };
export default {
  install(app: App) {
    app.component('HbSelectPerson', HbSelectPerson);
  }
};

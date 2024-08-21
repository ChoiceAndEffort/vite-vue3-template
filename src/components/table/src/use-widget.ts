/*
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-15 19:27:01
 * @LastEditors: suchiva suchvia@126.com
 * @LastEditTime: 2023-02-15 19:31:48
 * @FilePath: /su-code/vue3/packages/su-ui-plus/src/components/table/src/use-widget.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SInput from './components/input.vue';
export const useWidget = (type: string, data: any) => {
  const widgetMap: any = {
    input: SInput
  };
  return widgetMap[type];
};

/**
 * @FilePath: only file name
 * @Author: lg
 * @Date: 2023-06-03 21:34:32
 * @LastEditors: lg
 * @LastEditTime: Do not Edit
 * @Descripttion:
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// 创建Pinia实例
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;

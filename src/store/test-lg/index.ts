/*
 * @Author: lg
 * @Date: 2024-05-11 16:35:28
 * @LastEditors: lg
 * @LastEditTime: 2024-05-11 16:36:57
 * @Description:
 * @FilePath: \vite-project\src\store\test-lg\index.ts
 */
import { defineStore } from 'pinia';
const useTestLgStore = defineStore({
  id: 'test-lg',
  state: (): any => ({
    name: 'lg'
  }),
  getters: {
    getName(): any {
      return this.name;
    }
  },
  actions: {},

  persist: [
    {
      paths: [],
      storage: localStorage
    },
    {
      paths: [],
      storage: sessionStorage
    }
  ]
});

export default useTestLgStore;

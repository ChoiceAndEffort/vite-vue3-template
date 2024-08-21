/*
 * @Author: lg
 * @Date: 2024-05-11 16:35:28
 * @LastEditors: lg
 * @LastEditTime: 2024-05-13 14:26:57
 * @Description:
 * @FilePath: \vite-vue3-template\src\store\user-config\index.ts
 */
import { defineStore } from 'pinia';
const useUserConfigStore = defineStore({
  id: 'user-config',
  state: (): any => ({
    language: 'zh'
  }),
  getters: {
    getLanguage(): any {
      return this.language;
    }
  },
  actions: {
    setLanguage(v: string) {
      this.language = v;
    }
  },

  persist: [
    {
      paths: ['language'],
      storage: localStorage
    },
    {
      paths: [],
      storage: sessionStorage
    }
  ]
});

export default useUserConfigStore;

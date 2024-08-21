/*
 * @Author: lg
 * @Date: 2023-08-23 16:21:54
 * @LastEditors: lg
 * @LastEditTime: 2024-05-13 14:27:11
 * @Description:
 * @FilePath: \vite-vue3-template\src\language\i18n\index.ts
 */
import { createI18n } from 'vue-i18n';
import zh from '../zh';
import en from '../en';

//获取当前的语言环境
const getLocale =
  JSON.parse(localStorage.getItem('user-config'))?.language || 'zh'; //'zh


const i18n = createI18n({
  legacy: false, // 没有该参数可能会报错
  locale: getLocale,
  messages: {
    zh,
    en
  }
});

export default i18n;

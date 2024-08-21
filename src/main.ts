/*
 * @Author: lg
 * @Date: 2024-05-10 16:09:19
 * @LastEditors: lg
 * @LastEditTime: 2024-05-16 10:29:26
 * @Description:
 * @FilePath: \vite-vue3-template\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';
import router from './router';

import setupComponents from '@/components/index';

import i18n from '@/language/i18n';

import pinia from './store';

// import ElementPlus from 'element-plus';

const app = createApp(App);

//注册全局组件
setupComponents(app);
// app.use(ElementPlus);
app.use(router).use(pinia).use(i18n);
app.mount('#app');

/*
 * @Author: lg
 * @Date: 2024-05-10 16:09:19
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 11:45:36
 * @Description:
 * @FilePath: \vite-vue3-template\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
//这里的样式和vite.config.ts里面scss.additionalData 动态引入的样式不一样,在这里引入,打包的样式不会在每个样式中都重复打包一遍(即:每个样式包中都有一样重复的样式代码)
import './styles/index.scss';
import router from './router';

import setupComponents from '@/components/index';

import i18n from '@/language/i18n';

import pinia from './store';

import ElementPlus from 'element-plus';

// import 'element-plus/dist/index.css';
const app = createApp(App);

// 忽略指定警告
app.config.warnHandler = (msg, vm, trace) => {};

//注册全局组件
setupComponents(app);
app.use(ElementPlus);
app.use(router).use(pinia).use(i18n);
app.mount('#app');

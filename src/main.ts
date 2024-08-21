/*
 * @Author: lg
 * @Date: 2024-05-10 16:09:19
 * @LastEditors: lg
 * @LastEditTime: 2024-08-06 17:50:52
 * @Description:
 * @FilePath: \vite-vue3-template\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
//这里的样式和vite.config.ts里面scss.additionalData 动态引入的样式不一样,在这里引入,打包的样式不会在每个样式中都重复打包一遍(即:每个样式包中都有一样重复的样式代码)
import './styles/index.scss';
import router from './router';
import './router/permission/index';

import setupComponents from '@/components/index';

import i18n from '@/language/i18n';

import pinia from './store';

import ElementPlus from 'element-plus';

// import {
//   LgNameAvatar,
//   LgSelectDepartmentPerson,
//   LgVerificationCode
// } from '@lg/lg-ui-plus';
// import '@lg/lg-ui-plus/dist/name-avatar/style.css';
// import '@lg/lg-ui-plus/dist/select-department-person/style.css';
// import '@lg/lg-ui-plus/dist/verification-code/style.css';

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
VMdEditor.use(githubTheme, {
  Hljs: hljs
});

// import 'element-plus/dist/index.css';
const app = createApp(App);

// app.use(LgNameAvatar);
// app.use(LgSelectDepartmentPerson);
// app.use(LgVerificationCode);

//注册全局组件
setupComponents(app);
app.use(ElementPlus);
app.use(VMdEditor);
app.use(router).use(pinia).use(i18n);
app.mount('#app');

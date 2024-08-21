/*
 * @Author: lg
 * @Date: 2024-08-03 14:26:57
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 15:11:27
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\business-components\name-avatar\major\constants.ts
 */
export const contentConfig = [
  {
    title: '内容不同展示',
    slot: 'nameContent',
    height: 230,
    code: `
    <ul class="component-area">
    <li class="component-li">
      <h6 class="component-li--title">张三</h6>
      <lg-name-avatar name="张三"></lg-name-avatar>
    </li>
    <li class="component-li">
      <h6 class="component-li--title">张诗悦</h6>
      <lg-name-avatar name="张诗悦"></lg-name-avatar>
    </li>
  </ul>
      `
  },
  {
    title: '尺寸',
    slot: 'sizeContent',
    height: 350,
    code: `
    <ul class="component-area">
    <li class="component-li">
      <h6 class="component-li--title">32px</h6>
      <lg-name-avatar name="张三" width="32"></lg-name-avatar>
    </li>
    <li class="component-li">
      <h6 class="component-li--title">58px</h6>
      <lg-name-avatar name="张三" width="58"></lg-name-avatar>
    </li>
    <li class="component-li">
      <h6 class="component-li--title">64px</h6>
      <lg-name-avatar name="张三" width="64"></lg-name-avatar>
    </li>
  </ul>
      `
  }
];

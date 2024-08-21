<!--
 * @Author: lg
 * @Date: 2024-05-21 14:30:52
 * @LastEditors: lg
 * @LastEditTime: 2024-08-02 16:02:42
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\layout\header\major\index.vue
-->
<template>
  <div class="layout-header">
    <div class="left">
      <hb-image-plus :imgUrl="imgUrlLogo"></hb-image-plus>
      <h1>钢构管家管理后台</h1>
    </div>
    <div class="center">
      <breadcrumb></breadcrumb>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts" setup>
const imgUrlLogo =
  'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/ssii/gj-logo-blue.webp';

import { ref } from 'vue';
import Breadcrumb from '../breadcrumb/index.vue';
</script>
<style scoped lang="scss">
.layout-header {
  display: flex;
  height: 56px;
  border: 1px solid #dfe1e6;
  align-items: center;
}

.left {
  width: 232px;
  display: flex;
  align-items: center;
  // background: red;
  height: 100%;
  justify-content: center;

  h1 {
    font-family: PingFang SC, PingFang SC;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    margin-left: 8px;
  }
}

.center {
  flex: 1;
  padding-left: 24px;
}

.right {
}
</style>

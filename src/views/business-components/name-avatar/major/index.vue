<!--
 * @Author: lg
 * @Date: 2024-08-02 17:33:13
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 14:49:10
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\business-components\name-avatar\major\index.vue
-->
<template>
  <hb-major-page>
    <hb-content-layout :content-config="contentConfig">
      <template #component-nameContent>
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
      </template>
      <template #component-sizeContent>
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
      </template>
    </hb-content-layout>
  </hb-major-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { contentConfig } from './constants';
</script>
<style scoped lang="scss"></style>

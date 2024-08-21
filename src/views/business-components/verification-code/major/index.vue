<!--
 * @Author: lg
 * @Date: 2024-08-02 18:03:29
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 15:18:13
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\business-components\verification-code\major\index.vue
-->
<template>
  <hb-major-page>
    <hb-content-layout :content-config="contentConfig">
      <template #component-code>
        {{ verificationCodePluginRef?.inputCode }}
        <lg-verification-code
          ref="verificationCodePluginRef"
        ></lg-verification-code>
      </template>
    </hb-content-layout>
  </hb-major-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { contentConfig } from './constants';
const verificationCodePluginRef = ref(null);
</script>
<style scoped lang="scss"></style>

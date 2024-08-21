<!--
 * @Author: lg
 * @Date: 2024-08-02 16:20:04
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 15:26:03
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\home\major\index.vue
-->
<template>
  <div class="home">
    <v-md-editor :model-value="mdData" mode="preview"></v-md-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import md from './constants.md?raw';
const mdData = md;
</script>
<style scoped lang="scss"></style>

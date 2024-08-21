<!--
 * @Author: lg
 * @Date: 2023-08-18 16:39:42
 * @LastEditors: lg
 * @LastEditTime: 2024-05-20 17:16:32
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\not-found\404.vue
-->
<template>
  <div class="not-found">
    <hb-image-plus :imgUrl="imgUrl404" class="img--404"></hb-image-plus>
  </div>
</template>

<script lang="ts" setup>
const imgUrl404 =
  'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/industrial-internet/404.webp';
</script>
<style scoped lang="scss">
$img-404-Width: 462px;

.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .img--404 {
    width: $img-404-Width;
    height: $img-404-Width;
  }
}
</style>

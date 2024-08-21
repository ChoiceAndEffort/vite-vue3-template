<!--
 * @Author: lg
 * @Date: 2023-09-01 15:31:44
 * @LastEditors: lg
 * @LastEditTime: 2024-05-16 17:37:11
 * @Description:图片组件,包加载失败占位,异步加载图片,已引入本地图片前缀,只需转入图片名称及后缀即可展示
 * @FilePath: \vite-vue3-template\src\components\hb-image-plus\index.vue
-->
<template>
  <el-image
    :src="checkImgUrl(imgUrl) ? imgUrl : getDynamicImages(imgUrl)"
    v-bind="$attrs"
  >
    <!-- 图片展示失败的占位图 -->
  </el-image>
</template>

<script lang="ts" setup>
import getDynamicImages from '@/utils/get-dynamic-images/index';
defineProps({
  imgUrl: {
    type: String,
    required: true
  }
});
const checkImgUrl = (url: string) => {
  return url?.includes('https') || url?.includes('http');
};
</script>
<style scoped lang="scss"></style>

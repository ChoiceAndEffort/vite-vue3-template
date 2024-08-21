<!--
 * @Author: lg
 * @Date: 2023-09-12 14:45:23
 * @LastEditors: lg
 * @LastEditTime: 2024-01-25 15:09:42
 * @Description:svg图标组件
 * @FilePath: \work-distribution\src\components\hb-svg-icon\index.vue
-->
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color" :stroke="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  //svg矢量图的名字
  name: String,
  //svg图标的颜色
  color: {
    type: String,
    default: ''
  },
  //svg宽度
  width: {
    type: String,
    default: ''
  },
  //svg高度
  height: {
    type: String,
    default: ''
  }
});
</script>
<style scoped></style>

<!--
 * @Author: lg
 * @Date: 2024-05-10 17:10:25
 * @LastEditors: lg
 * @LastEditTime: 2024-07-02 18:27:37
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\test\major\index.vue
-->
<template>
  <div class="home">
    <el-button @click="handleOpenDialog">选人</el-button>

    <select-department-person
      ref="selectDepartmentPersonRef"
      :options="initOptions"
    >
    </select-department-person>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, inject } from 'vue';
import { useSelectDepartmentPerson } from '@/hooks/use-select-department-person/index';
const selectDepartmentPersonRef = ref();

const { initOptions, handleOpenDialog } = useSelectDepartmentPerson({
  selectDepartmentPersonRef
});
</script>

<style scoped lang="scss">
ul {
  width: vw(230);
  height: vh(364);
  background: rgb(112, 101, 101);
  font-size: vw(16);
}
</style>

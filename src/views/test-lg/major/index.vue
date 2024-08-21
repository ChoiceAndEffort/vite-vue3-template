<!--
 * @Author: lg
 * @Date: 2024-05-10 17:10:25
 * @LastEditors: lg
 * @LastEditTime: 2024-07-02 15:10:57
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\test-lg\major\index.vue
-->
<template>
  <div class="home">
    <el-button @click="handleOpenDialog">选人1</el-button>

    <wm-select-person ref="vmSelectPersonRef" :options="initOptions">
      <!-- <template #companySlot>
        {{ initOptions.companyInfo.name || '默认企业' }}
      </template> -->
    </wm-select-person>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, inject } from 'vue';
import { useVmSelectPerson } from '@/hooks/use-wm-select-person/index';
const vmSelectPersonRef = ref();
const { initOptions, handleOpenDialog } = useVmSelectPerson({
  vmSelectPersonRef
});

// const handleOpenDialog = () => {
//   console.log(vmSelectPersonRef.value.OpenDialog, '--------ddd');
//   vmSelectPersonRef.value?.OpenDialog();
// };
</script>

<style scoped lang="scss">
ul {
  width: vw(230);
  height: vh(364);
  background: rgb(112, 101, 101);
  font-size: vw(16);
}
</style>

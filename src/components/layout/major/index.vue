<!--
 * @Author: lg
 * @Date: 2024-05-21 14:30:52
 * @LastEditors: lg
 * @LastEditTime: 2024-08-02 16:21:11
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\layout\major\index.vue
-->
<template>
  <div class="layout-container">
    <layout-header></layout-header>
    <el-scrollbar height="calc(100vh - 56px)">
      <div class="left-container" v-if="asideMenulist?.length">
        <left-aside></left-aside>
      </div>
      <div class="right-container">
        <router-view></router-view>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from '../header/major/index.vue';
import LeftAside from '../left-aside/major/index.vue';
import { ref, computed } from 'vue';
import useUserAuthStore from '@/store/user-auth/index';
const userAuthStore = useUserAuthStore();
const asideMenulist = computed(() => {
  return userAuthStore.getMenuList?.filter((item) => item?.meta?.isAside);
});
</script>
<style scoped lang="scss">
:deep(.el-scrollbar__view) {
  display: flex;
  height: calc(100vh - 56px);

  .left-container {
    width: 232px;
    min-width: 232px;
    background: #f2f3f5;
  }

  .right-container {
    flex: 1;
  }
}
</style>

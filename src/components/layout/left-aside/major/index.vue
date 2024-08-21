<!--
 * @Author: lg
 * @Date: 2024-05-21 10:17:03
 * @LastEditors: lg
 * @LastEditTime: 2024-07-19 11:34:46
 * @Description:
 * @FilePath: \ssii-user-bk\src\components\layout\left-aside\major\index.vue
-->
<template>
  <el-scrollbar class="slider-auto">
    <el-menu
      active-text-color="#1678FF"
      text-color="#172B4D"
      :default-active="userAuthStore.getDefaultActive"
      :collapse="userAuthStore.getCollapse"
      :unique-opened="true"
      :collapse-transition="false"
      @select="handleMenuSelect"
      @open="handelOpen"
    >
      <template v-for="item in asideMenulist" :key="item.path">
        <!-- 有子集 -->
        <el-sub-menu
          :index="item.name"
          v-if="
            item.children?.length &&
            item.children.some((item) => item.meta.isAside === true)
          "
        >
          <template #title>
            <span
              :class="['iconfont', item.meta.icon || 'icon-a-zujian822']"
            ></span>
            <span>{{ item.meta.title }}</span>
          </template>

          <el-menu-item
            v-for="child in item.children?.filter((el) => el?.meta?.isAside)"
            :key="child.name"
            :index="child.name"
          >
            <template #title>
              <span :class="['iconfont', child.meta.icon]"></span>
              <span> {{ child.meta.title }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
        <!-- 没有子集 -->
        <el-menu-item :index="item.name" v-else>
          <template #title>
            <span
              :class="['iconfont', item.meta.icon || 'icon-a-zujian822']"
            ></span>
            <span class="sub__menu--title">
              {{ item.meta.title }}
            </span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import useUserAuthStore from '@/store/user-auth/index';
import { useRouteRouter } from '@/hooks/use-route-router';

const userAuthStore = useUserAuthStore();

const { routerPushByName } = useRouteRouter();

const asideMenulist = computed(() => {
  return userAuthStore.getMenuList?.filter((item) => item?.meta?.isAside);
});

const handleMenuSelect = (key: string, keyPath: string[]) => {
  console.log(key, 'key--------', keyPath);
  routerPushByName(key);
  userAuthStore.setDefaultActive(key);
};

const handelOpen = (index: any) => {
  // console.log('index', index);
};
</script>
<style scoped lang="scss">
:deep(.el-menu) {
  width: 100%;
  background: #f2f3f5;
  .iconfont {
    margin-right: 8px;
  }
}
</style>

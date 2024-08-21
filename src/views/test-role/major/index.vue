<!--
 * @Author: lg
 * @Date: 2024-05-10 17:10:25
 * @LastEditors: lg
 * @LastEditTime: 2024-05-20 17:21:26
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\test-lg\major\index.vue
-->
<template>
  <div class="home">
    <!-- :current-checked-powers="currentCheckedPowers" -->
    <permission-config
      :power-tree="powerTree"
      :current-checked-powers="currentCheckedPowers"
      ref="permissionConfigRef"
    >
    </permission-config>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PermissionConfig from './main.vue';
import { mockData } from './mock-data';
import { checkedMockData } from './last-checked-data';
import {
  traverseAndModify,
  mapTreeLastChecked
} from '@/utils/deal-permission-config/index';
import { cloneDeep } from 'lodash-es';
const powerTree = ref([]);
const currentCheckedPowers = ref([]);

const getData = async () => {
  const res = await Promise.resolve(mockData);
  const res1 = await Promise.resolve(checkedMockData);
  // powerTree.value = cloneDeep(traverseAndModify(res.data));
  powerTree.value = res.data;
  currentCheckedPowers.value = res1.data.pcPowers;

  // let lastCheckedIds = currentCheckedPowers.value.map((item) => item.powerId);

  // powerTree.value.forEach((item) => {
  //   //更新表格选中的数据,按钮选择置为true
  //   //页面如果只是一级菜单就勾选上
  //   //页面如果选择,按钮未勾选,页面半选状态
  //   //页面选择,没有按钮,页面全选状态
  //   mapTreeLastChecked(item, lastCheckedIds);
  // });

  // console.log('6666666666', powerTree.value, res1.data);
  // currentCheckedPowers.value = checkedMockData;
};
getData();
</script>

<style scoped lang="scss"></style>

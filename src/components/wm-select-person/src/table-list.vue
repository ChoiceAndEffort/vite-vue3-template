<!--
 * @Author: lg
 * @Date: 2024-07-01 17:31:10
 * @LastEditors: lg
 * @LastEditTime: 2024-07-03 15:03:51
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\wm-select-person\src\table-list.vue
-->
<template>
  <el-table
    :data="tableData"
    height="500"
    @selection-change="handleTableSelectionChange"
    ref="multipleTableRef"
  >
    <el-table-column type="selection" width="55" @click="handleRowChange" />
    <el-table-column
      v-for="item in tableOptions"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
    >
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, inject, watch, provide, nextTick } from 'vue';

import { ElTable } from 'element-plus';

const globalOptions: any = inject('globalOptions');

const haveCheckedUsers: any = inject('haveCheckedUsers');

const updateHaveCheckedUsers: any = inject('updateHaveCheckedUsers');

const props = defineProps({
  tableData: {
    type: Array,
    default: () => []
  }
});

const tableOptions = [
  {
    prop: globalOptions.configKey['nameKey'],
    label: '姓名'
  },
  {
    prop: globalOptions.configKey['mobileKey'],
    label: '手机号'
  }
];
const multipleTableRef = ref<InstanceType<typeof ElTable>>();

watch(
  () => props.tableData,
  (nv) => {
    // 已经选中的数据
    const haveSelectedArrId = haveCheckedUsers.value.map(
      (item) => item[globalOptions.configKey['userIdKey']]
    );
    // console.log(haveSelectedArrId, 'haveSelectedArrId');

    //当前表格回显的数据中包含选中的数据
    const getCurrentListHaveChecked = nv?.filter((item) =>
      haveSelectedArrId.includes(item[globalOptions.configKey['userIdKey']])
    );

    //当前表格回显的数据中包含选中的数据 进行反选回显
    nextTick(() => {
      getCurrentListHaveChecked.forEach((row) => {
        multipleTableRef.value!.toggleRowSelection(row, true);
      });
    });
  },
  {
    deep: true
  }
);
/**
 * @description: 表格选择变化
 * @param {*} val
 * @return {*}
 */
const handleTableSelectionChange = (val: any[]) => {
  const currentTableDataCheckedIds = val.map(
    (item) => item[globalOptions.configKey['userIdKey']]
  );
  const currentTableDataNotChecked = props.tableData
    .map((item) => item[globalOptions.configKey['userIdKey']])
    .filter((el) => !currentTableDataCheckedIds.includes(el));
  // console.log(
  //   currentTableDataCheckedIds,
  //   '-------',
  //   currentTableDataNotChecked,
  //   '未选择的数据'
  // );

  updateHaveCheckedUsers(val, currentTableDataNotChecked);
};

const handleRowChange = (row: any, column: any, event: any) => {
  console.log('行点击');
  // nextTick(() => {
  //   multipleTableRef.value!.toggleRowSelection(row, true);
  // });
};
defineExpose({
  multipleTableRef
});
</script>
<style scoped lang="scss"></style>

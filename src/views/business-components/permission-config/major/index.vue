<!--
 * @Author: lg
 * @Date: 2024-08-06 17:55:16
 * @LastEditors: lg
 * @LastEditTime: 2024-08-09 09:10:31
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\business-components\permission-config\major\index.vue
-->
<template>
  <el-table
    :data="tableData"
    style="width: 100%; margin-bottom: 20px"
    row-key="powerId"
    border
    class="custom-table-class"
    default-expand-all
    ref="multipleTableRef"
    :header-cell-style="{ background: '#f2f3f5', color: '#1D2129' }"
    max-height="650"
    :row-class-name="getRowClassName"
    @select-all="handleSelectAll"
    @select="handleSelect"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column prop="powerName" label="菜单/页面" />
    <el-table-column prop="name" label="打印">
      <template #default="scope">
        {{ scope.row.isSelect }}
      </template>
    </el-table-column>
    <el-table-column prop="name" label="功能">
      <template #default="scope">
        <div
          v-for="item in scope.row.actions"
          :key="item.powerId"
          style="display: inline-block; padding-right: 10px"
        >
          <el-checkbox
            class="checkbox"
            v-model="item.isChecked"
            :label="item.powerName"
            @change="handleBtnSelect(scope.row)"
            >{{ item.powerName }}
            <!-- {{ item.isChecked }} -->
          </el-checkbox>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="remark" label="说明" />
  </el-table>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { ElTable } from 'element-plus';
import { mockData } from './mock-data';
import { checkedMockData } from './last-checked-data';
import { cloneDeep } from 'lodash-es';
import {
  traverseAndModify,
  mapTreeCheckedAndNotChecked,
  updateNodeById,
  treeToArray,
  updateParentSelection,
  mapTreeLastChecked
} from '@/utils/deal-permission-config/index';
const tableData = ref(traverseAndModify(mockData.data));
const lastCheckedData = ref(checkedMockData.data.pcPowers);
// const lastCheckedData = ref([]);

//选中状态改变
const handleSelect = (checkedArr: Array<any>, row, checked) => {
  let flag = false;
  if (row.isSelect) {
    flag = false;
  } else if (row.isSelect === '') {
    flag = false;
  } else {
    flag = true;
  }
  row.isSelect = flag;
  // console.log('ttttt', flag);

  //修改当前节点
  if (row.actions?.length) {
    row.actions.forEach((item) => (item.isChecked = row.isSelect));
  }
  //更新当前节点选中状态
  updateNodeById(tableData.value, row.powerId, {
    isSelect: row.isSelect,
    actions: row.actions || []
  });
  //没有子节点
  if (row.children?.length === 0) {
    console.log('checkedArr', checkedArr, checked);
    //更新父级选中状态
    // updateParentSelection(tableData.value, row.powerId);
  } else {
    //有子节点
    treeToArray(row.children).forEach((item) => {
      if (item.actions?.length) {
        item.actions.forEach((el) => (el.isChecked = row.isSelect));
      }
      //更新子节点的选中状态
      updateNodeById(tableData.value, item.powerId, {
        isSelect: row.isSelect,
        actions: item.actions || []
      });
    });
  }
  console.log(row, 'row----------');

  if (row.pid && row.pid !== '0') {
    //拿到上一级父id进行更新父级选中状态
    updateParentSelection(tableData.value, row.pid);
  }
  //处理选中状态和反选的显示状态
  treeToArray(tableData.value).forEach((element) => {
    toggleRowSelection(element, element.isSelect);
  });
};

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
//回显表格行的选中状态
const toggleRowSelection = (row: any, flag) => {
  if (row) {
    nextTick(() => {
      multipleTableRef.value!.toggleRowSelection(row, flag);
    });
  }
};
/**
 * @description: 全选和反选
 * @return {*}
 */
const handleSelectAll = (checkArr: Array<any>) => {
  console.log('全选和反选---------');
  let selectAllBoolean = false;
  if (checkArr.length > 0) {
    selectAllBoolean = true;
  }
  //修改选中和反选的值
  tableData.value = tableData.value.map((item) =>
    mapTreeCheckedAndNotChecked(item, selectAllBoolean)
  );
  //处理选中状态和反选的显示状态
  tableData.value.forEach((element) => {
    toggleRowSelection(element, selectAllBoolean);
  });
};

/**
 * @description: 设置行名字
 * @param {*} row
 * @return {*}
 */
const getRowClassName = ({ row }) => {
  if (row.isSelect === '') {
    return 'indeterminate';
  }
};

/**
 * @description: 按钮选择
 * @param {*} row
 * @return {*}
 */
const handleBtnSelect = (row) => {
  // console.log('laile --------', row);
  let flag: boolean | '' = false;
  let everyChecked = row.actions.every((item) => item.isChecked);
  let someChecked = row.actions.some((item) => item.isChecked);
  let everyNotChecked = row.actions.some((item) => item.isChecked === false);
  if (everyChecked) {
    flag = true;
  } else {
    flag = '';
  }
  //这里可以不选按钮,单页面可以选择,不是个强关联的
  updateNodeById(tableData.value, row.powerId, {
    isSelect: flag,
    powerId: row.powerId
  });
  //更新父级选中状态
  updateParentSelection(tableData.value, row.powerId);
  //处理选中状态和反选的显示状态
  treeToArray(tableData.value).forEach((element) => {
    if (element.isSelect) {
      toggleRowSelection(element, true);
    } else if (element.isSelect === '') {
      toggleRowSelection(element, undefined);
    } else {
      toggleRowSelection(element, false);
    }
  });
};
//回显上次选择的
const displaySelection = () => {
  //上次选择的id
  let lastCheckedIds = lastCheckedData.value.map((item) => item.powerId);

  tableData.value.forEach((item) => {
    //更新表格选中的数据,按钮选择置为true
    //页面如果只是一级菜单就勾选上
    //页面如果选择,按钮未勾选,页面半选状态
    //页面选择,没有按钮,页面全选状态
    mapTreeLastChecked(item, lastCheckedIds);
  });
  //让页面勾选上
  treeToArray(tableData.value).forEach((element) => {
    toggleRowSelection(element, element.isSelect);
  });
  lastCheckedData.value.forEach((item) => {
    //更新父级选中状态
    updateParentSelection(tableData.value, item.powerId);
  });
};
displaySelection();
</script>

<style scoped lang="scss">
:deep(.indeterminate) {
  td:first-child {
    .el-checkbox__input .el-checkbox__inner {
      background-color: #4a97eb !important;
      border-color: #4a97eb !important;
      color: #fff !important;
    }
  }
}

:deep(.indeterminate) {
  td:first-child {
    .el-checkbox__input.is-checked .el-checkbox__inner::after {
      transform: scale(0.5);
    }
  }
}

:deep(.indeterminate) {
  td:first-child {
    .el-checkbox__input .el-checkbox__inner {
      background-color: #f2f6fc;
      border-color: #dcdfe6;
    }
  }
}

:deep(.indeterminate) {
  td:first-child {
    .el-checkbox__input .el-checkbox__inner::after {
      border-color: #c0c4cc !important;
      background-color: #c0c4cc;
    }
  }
}

:deep(.indeterminate) {
  td:first-child {
    .el-checkbox__input .el-checkbox__inner::after {
      content: '';
      position: absolute;
      display: block;
      background-color: #fff;
      height: 2px;
      transform: scale(0.5);
      left: 0;
      right: 0;
      top: 5px;
      width: auto !important;
    }
  }
}

.custom-table-class {
  :deep(.el-table__row) {
    height: 32px;
  }
  :deep(.el-table__cell) {
    padding: 0 !important;
  }
}
</style>

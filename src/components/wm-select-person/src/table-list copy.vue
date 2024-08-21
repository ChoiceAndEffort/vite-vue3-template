<!--
 * @Author: lg
 * @Date: 2024-07-01 17:31:10
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 19:00:39
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\wm-select-person\src\table-list.vue
-->
<template>
  <el-auto-resizer>
    <template #default="{ height, width }">
      <el-table-v2
        :columns="columns"
        :data="data"
        :width="width"
        :height="height"
        fixed
      />
    </template>
  </el-auto-resizer>
  <!-- <el-auto-resizer>
    <template #default="{ height, width }">
      <el-table-v2
        :columns="tableOptions"
        :data="tableData"
        :width="width"
        :height="height"
        fixed
      />
    </template>
  </el-auto-resizer> -->
</template>

<script lang="ts" setup>
import { ref, inject, unref } from 'vue';

import { ElCheckbox } from 'element-plus';

import type { FunctionalComponent } from 'vue';
import type { CheckboxValueType, Column } from 'element-plus';

type SelectionCellProps = {
  value: boolean;
  intermediate?: boolean;
  onChange: (value: CheckboxValueType) => void;
};

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  onChange
}) => {
  return (
    <ElCheckbox
      onChange={onChange}
      modelValue={value}
      indeterminate={intermediate}
    />
  );
};

const globalOptions: any = inject('globalOptions');
const props = defineProps({
  tableData: {
    type: Array,
    default: () => []
  }
});

const tableOptions = [
  {
    dataKey: globalOptions.configKey['nameKey'],
    key: globalOptions.configKey['nameKey'],
    title: '姓名',
    width: 150
  },
  {
    dataKey: globalOptions.configKey['mobileKey'],
    key: globalOptions.configKey['mobileKey'],
    title: '手机号',
    width: 150
  }
];
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150
  }));

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`,
        checked: false,
        parentId: null
      }
    );
  });

const columns: Column<any>[] = generateColumns(10);
columns.unshift({
  key: 'selection',
  width: 50,
  cellRenderer: ({ rowData }) => {
    const onChange = (value: CheckboxValueType) => (rowData.checked = value);
    return <SelectionCell value={rowData.checked} onChange={onChange} />;
  },

  headerCellRenderer: () => {
    const _data = unref(data);
    const onChange = (value: CheckboxValueType) =>
      (data.value = _data.map((row) => {
        row.checked = value;
        return row;
      }));
    const allSelected = _data.every((row) => row.checked);
    const containsChecked = _data.some((row) => row.checked);

    return (
      <SelectionCell
        value={allSelected}
        intermediate={containsChecked && !allSelected}
        onChange={onChange}
      />
    );
  }
});

const data = ref(generateData(columns, 200));
</script>
<style scoped lang="scss"></style>

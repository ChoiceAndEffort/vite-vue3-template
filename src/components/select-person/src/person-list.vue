<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-20 18:27:01
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 11:32:45
 * @FilePath: \vite-vue3-template\src\components\select-person\src\person-list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="su-person-list">
    <div class="su-person-list__content">
      <hb-table
        ref="tableRef"
        :checked="true"
        :options="searchOptions"
        :data="data"
        height="100%"
        row-key="staffSubscribeThaliId"
        :reserve-selection="true"
        :isShowEmptyImg="data?.length"
        highlight-current-row
        @select-all="handleSelectAll"
        @select="handleSelect"
      >
      </hb-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, watch, reactive, inject, nextTick } from 'vue';
import { useUsersStore } from './store/user';
import { ISelectItem } from './types';
import { ElMessage } from "element-plus";
const emits = defineEmits(['load-more', 'switch-check']);
const store = useUsersStore();
const { addSelected, delSelected, setSelected } = store;
const keywordsSearch: any = inject('keywordsSearch');
const activeName: any = inject('activeName');
import { debounce, throttle } from 'lodash-es';

const rowSelectFlag = ref(false);
const tableRef = ref('');
const searchOptions = [
  {
    label: '姓名',
    prop: 'trueName',
    minWidth: 120
    // sufilters: {
    //   type: 'input',
    //   popWidth: 180,
    //   fn: (val: string) => {
    //     console.log('val--input--trueName', val);
    //     keywordsSearch(val, 'trueName', store.departmentId);
    //   }
    // }
  },
  {
    label: '手机号',
    prop: 'mobile',
    minWidth: 140
    // sufilters: {
    //   type: 'input',
    //   popWidth: 180,
    //   fn: (val: string) => {
    //     console.log('val--input--mobile', val);
    //     keywordsSearch(val, 'mobile');
    //   }
    // }
  }
];

const props = defineProps({
  data: Array as PropType<ISelectItem[]>
});
// 选中结果
const checkAll = ref(false);
const checkedPerson = ref<ISelectItem[]>([]);

const tabChecked = reactive({});

const isIndeterminate = ref(false);

const loadMore: any = inject('load-more');
const propsSendData: any = inject('propsSendData');

store.$subscribe((_, state) => {
  checkedPerson.value = store.selected;

  nextTick(() => {
    rowSelectFlag.value = true;
    tableRef.value.$refs?.hbTableRootRef.clearSelection();
    const filterData = props.data?.filter((item) =>
      checkedPerson.value.includes(item.staffSubscribeThaliId)
    );
    filterData?.forEach((val) => {
      tableRef.value.$refs?.hbTableRootRef.toggleRowSelection(val, true);
    });
    rowSelectFlag.value = false;
  });
});

/* 监听删除按钮 */
watch(
  () => store.deleteId,
  (val) => {
    const item = props?.data.filter((da) =>
      val.includes(da.staffSubscribeThaliId)
    );
    item.forEach((dItem) => {
      tableRef.value.$refs.hbTableRootRef.toggleRowSelection(dItem, false);
    });
  }
);

watch(
  () => propsSendData?.userCheckedList,
  (nv) => {
    tableRef.value.$refs?.hbTableRootRef?.clearSelection();
  },
  {
    deep: true
  }
);

/* 复选的人 */
const multipleSelection = ref([]);
const isUserSearch = inject('isUserSearch');
// 选择某一个
const handleCheckedPerson = (value: string[]) => {
  if (rowSelectFlag.value) return;
  const checkedCount = value.length;
  const ids = value.map((val) => val.staffSubscribeThaliId);

  if (activeName.value === 'fourth') {
    if (isUserSearch.value) {
      // multipleSelection.value = store.selected; // 获取上次勾选的人
      const ids2 = props.data.map((da) => da.staffSubscribeThaliId);
      multipleSelection.value = store.selected?.filter((item) => {
        return !ids2.includes(item);
      });
      let curIds = [...new Set([...ids, ...multipleSelection.value])];
      // 限制勾选
      let bool = handleLimitSelect(curIds);
      if (bool) return false;
      setSelected(curIds);
    } else {
      // 限制勾选
      let bool = handleLimitSelect(ids);
      if (bool) return false;
      setSelected(ids);
    }
  } else {
    const checkedCount = value.length;
    emits('switch-check', checkedCount >= props.data.length);

    let notChecked = props.data
      ?.filter((item) => !ids.includes(item.staffSubscribeThaliId))
      .map((item) => item.staffSubscribeThaliId);

    const copyIds = [...new Set([...checkedPerson.value, ...ids])].filter(
      (item) => !notChecked?.includes(item)
    );
    // 限制勾选
    let bool = handleLimitSelect(copyIds);
    if (bool) return false;
    setSelected(copyIds);
  }
};

// 限制单个勾选
const handleLimitSelect = (ids) => {
  if (
    ids.length > store.selected.length &&
    ids.length > propsSendData.maxCheckMore
  ) {
    let selectedId = '';
    ids.forEach((id) => {
      !store.selected.includes(id) && (selectedId = id);
    });

    const index = props.data?.findIndex(
      (item) => item.staffSubscribeThaliId === selectedId
    );

    tableRef.value.$refs?.hbTableRootRef.toggleRowSelection(
      props.data[index],
      false
    ); // 超过最大数量时清除本次的选中项
    ElMessage.warning('最多只能选择' + propsSendData?.maxCheckMore + '项');
    return true;
  }
};

// 复选框单个勾选
const handleSelect = (selection, row) => {
  handleCheckedPerson(selection);
};

// 勾选部门tree复选框-联动选择所有人员
const handleCheckedAllPerson = (bool) => {
  console.error('handleCheckedAllPerson---22', bool);
  nextTick(() => {
    props.data.forEach((val) => {
      tableRef.value.$refs?.hbTableRootRef?.toggleRowSelection(val, bool);
    });

    if (activeName.value === 'second') {
      let ids = [];
      if (bool) {
        ids = props.data.map((item) => item.staffSubscribeThaliId);
      } else {
        ids = [];
      }

      let notChecked = props.data
        ?.filter((item) => !ids.includes(item.staffSubscribeThaliId))
        .map((item) => item.staffSubscribeThaliId);

      const copyIds = [...new Set([...checkedPerson.value, ...ids])].filter(
        (item) => !notChecked?.includes(item)
      );

      setSelected(copyIds);
    }
  });
};

// 复选框全选-部门树联动处理
const handleSelectAll = (selection) => {
  // 整体限制勾选
  const ids = selection.map((val) => val.staffSubscribeThaliId);
  const newIds = [...new Set([...ids, ...store.selected])];
  if (
    ids.length === props.data.length &&
    newIds.length > propsSendData.maxCheckMore
  ) {
    tableRef.value.$refs?.hbTableRootRef.clearSelection();
    if (store.selected.length) {
      props.data.forEach((val) => {
        if (store.selected.includes(val.staffSubscribeThaliId)) {
          tableRef.value.$refs?.hbTableRootRef.toggleRowSelection(val, true);
        }
      });
    }

    return ElMessage.warning(
      '最多只能选择' + propsSendData.maxCheckMore + '项'
    );
  }

  if (activeName.value === 'second') {
    emits('switch-check', selection.length > 0);
  } else if (activeName.value === 'fourth') {
    handleCheckedPerson(selection);
  }
};

const load = () => {
  // count.value += 2
  console.log('lg-----触底了');
  loadMore();
};

defineExpose({ tableRef, handleCheckedAllPerson });
</script>

<style lang="scss" scoped>
.infinite-list {
  /* height: 374px; */
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 32px;
  margin: 5px;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 5px;
}

:deep(.el-checkbox__label) {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    &.icon {
      width: 24px;
    }

    &.name {
      width: 90px;
    }

    &.phone {
      width: 120px;
    }

    &.position {
      flex: 1;
      text-align: left;
    }
  }
}

.su-person-list {
  width: 100%;
  height: 100%;
  display: flex;
  /* background: red; */
}

.su-person-list__content {
  padding: 16px 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .no-data {
    flex: 1;
    line-height: 150px;
    text-align: center;
    vertical-align: middle;
    color: #aaa;
  }

  .content__title {
    height: 30px;
    padding-top: 10px;
  }

  .content__main {
    flex: 1;
  }

  li {
    width: 100%;

    line-height: 30px;
    padding: 0;
    margin: 0;
    border-radius: 2px;

    &:hover {
      background-color: #f2f2f2;
    }
  }
}
</style>

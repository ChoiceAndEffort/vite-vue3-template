<!--
 * @Author: suchiva@126.com
 * @Date: 2023-02-08 08:35:51
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 11:57:57
 * @FilePath: \vite-vue3-template\src\components\select-person\src\main.vue
 * @Description: 按钮组件
 *
 * Copyright (c) 2023 by suchiva@126.com, All Rights Reserved.
-->
<template>
  <el-dialog
    :title="title"
    top="6vh"
    width="1092px"
    v-model="selectVisible"
    align-center
    @close="handleDialogClose"
    @handleConfirm="handleSubmit"
  >
    <div class="select-dialog__tabs">
      <el-tabs
        v-model="activeName"
        tab-position="top"
        @tab-click="handleTabChange"
      >
        <el-tab-pane
          v-for="item in tabsData.tabPanes"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>

      <el-input
        v-if="activeName === 'fourth'"
        v-model="userSearch"
        class="user-search"
        clearable
        placeholder="请输入姓名、手机号"
        :prefix-icon="Search"
        @keyup.enter="onSearch"
        @clear="onSearch"
      />
    </div>
    <div class="select-dialog__content" v-loading="selectPersonLoading">
      <div class="select-dialog__content-left">
        <!-- 最近使用 -->
        <department-list
          :options="options?.department"
          v-show="options?.department && activeName === 'second'"
        />

        <!-- 按岗位 -->
        <history-list
          :options="options?.user"
          v-show="options?.user && activeName === 'fourth'"
        /><!-- 按用户 -->
      </div>
      <div class="select-dialog__content-right">
        <div class="select-dialog__content-right-title">
          <span class="selected-count"
            >已选（<b class="selected-num">{{ selectedNum }}</b
            >）</span
          >
          <span
            @click="resetSelected"
            :class="!selectedNum ? 'not-reset-select' : 'reset-selected'"
            >清空</span
          >
        </div>
        <el-scrollbar class="selected-dialog__content-right-content">
          <selected-list />
        </el-scrollbar>
      </div>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue';
import { PropType, ref, computed, watch, inject, provide } from 'vue';
import { ISelectPersonOptions } from './types';

import HistoryList from './history-list.vue';
import DepartmentList from './department-list.vue';
import PositionList from './position-list.vue';
import UserList from './user-list.vue';
import SelectedList from './selected-list.vue';

import { useUsersStore } from './store/user';
import { ElMessage } from 'element-plus';
const selectPersonLoading: any = inject('selectPersonLoading');
const store = useUsersStore();
const { addList, setSelected, addSelected } = store;
const handleTabChangeOut: any = inject('tab-change');
const querySearchAsync: any = inject('querySearchAsync');
const keywordsSearch: any = inject('keywordsSearch');
const isFirstOpenDialog: any = inject('isFirstOpenDialog');

const tabsData: any = {
  tabPanes: [
    {
      label: '按部门',
      name: 'second'
    },
    {
      label: '按用户',
      name: 'fourth'
    }
  ]
};

const selectVisible = ref(false);

const props = defineProps({
  options: {
    type: Object as PropType<ISelectPersonOptions>,
    required: true
  }
});

/* 未配置部门参数时，去掉部门的tab面板 */
if (!props.options?.department) {
  tabsData.tabPanes.splice(0, 1);
}

const title = computed(() => props.options?.title);
provide('propsSendData', props.options);

const activeName = ref('first');
provide(
  'activeName',
  computed(() => activeName.value)
);
const state = ref('');
console.log(props, 'props.options------------');
activeName.value = props.options?.activeTab;
const selectedNum = ref(0);
store.$subscribe((_, state) => {
  selectedNum.value = store.selected.length;
});

// 提交
const handleSubmit = () => {
  const data = store.list.filter((v) => store.selected.indexOf(v.id) > -1);
  props.options.submit(data);
  selectVisible.value = false;
};

// 清空
const resetSelected = () => {
  if (selectedNum.value) {
    store.delSelected(store.selected);
    store.setSelected([]);
  } else {
    ElMessage.warning('请选择');
  }
};

// 搜索
const userSearch = ref('');
const byUserData = ref([]);
const $emits = defineEmits(['search']);
const isUserSearch = ref(false);
provide('isUserSearch', isUserSearch);
const onSearch = () => {
  isUserSearch.value = Boolean(userSearch.value);
  keywordsSearch(userSearch.value, 'keywords');
  // if (userSearch.value) {
  // activeName.value = "fourth";
  // $emits('search', userSearch.value);
  // }
};
// 切换显隐
const handleToggleVisible = () => {
  selectVisible.value = !selectVisible.value;
  if (selectVisible.value) {
    setSelected([]);
    userSearch.value = '';
  }
};
const handleDialogClose = () => {
  // console.log('内部取消来了');
  props.options.cancelCallback && props.options.cancelCallback();
  selectVisible.value = false;
};
const handleBeforeClose = () => {
  // console.log('before-close---内部取消来了');
  props.options.cancelCallback && props.options.cancelCallback();
  selectVisible.value = false;
};
const handleTabChange = (value) => {
  activeName.value = value.props.name;
  console.log('内部的tab-change', activeName.value);
  handleTabChangeOut(activeName.value);
  console.log('handleTabChange', props.options);
};
// watch(
//   () => props.options.user,
//   (nv) => {
//     addList(nv, 'history');
//   },
//   {
//     deep: true
//   }
// );

const handleSelect = (item) => {
  if (store.selected.length >= props.options.maxCheckMore) {
    ElMessage.warning(`最多勾选${props.options.maxCheckMore}个`);
    return false;
  }
  addSelected([item.staffSubscribeThaliId || item.accountEnterpriseId]);
};

/**
 * @description: 监听传入的参数进行上次勾选回显
 * @return {*}
 */
watch(
  () => props.options?.user,
  (nv) => {
    // console.log(
    //     nv,
    //     'nv----props.options.user-----------',isFirstOpenDialog.value,
    //     props.options.userCheckedList
    //   );
    console.log('isFirstOpenDialog.value', isFirstOpenDialog.value);

    if (isFirstOpenDialog.value) {
      props.options?.userCheckedList?.length &&
        addSelected([...props.options?.userCheckedList]);
      isFirstOpenDialog.value = false;
    }
  },
  {
    deep: true
  }
);

defineExpose({
  handleToggleVisible,
  selectVisible
});
</script>

<style lang="scss" scoped>
.select-dialog__tabs {
  display: flex;
  justify-content: space-between;
  height: 39px;
  border-bottom: 1px solid #dfe1e6;
  margin-bottom: 16px;
  .el-input {
    width: 382px;
    height: 32px;
    margin-top: -6px;
  }
}
.select-dialog__content {
  height: 505px;
  border-radius: 6px;
  border: 1px solid #dfe1e6;
  display: flex;
  justify-content: space-between;
  .select-dialog__content-left {
    /* flex: 1; */
    width: 703px;
  }
}
.select-dialog__content-right {
  width: 323px;
  padding: 16px 0;
  border-left: 1px solid #dfe1e6;
  .select-dialog__content-right-title {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 0 24px;
  }
  .selected-dialog__content-right-content {
    height: calc(100% - 45px);
  }
  .selected-count {
    color: #172b4d;
  }
  .selected-num {
    color: #f53f3f;
  }

  .reset-selected {
    color: #1678ff;
    cursor: pointer;
  }

  .not-reset-select {
    color: #94cbff;
  }
}
</style>

<!--
 * @Author: lg
 * @Date: 2024-07-01 12:00:28
 * @LastEditors: lg
 * @LastEditTime: 2024-07-02 17:39:26
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\wm-select-person\src\main.vue
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="options?.title"
    width="1092"
    align-center
    :close-on-click-modal="false"
  >
    <div class="select-dialog__tabs">
      <el-tabs
        v-model="activeName"
        tab-position="top"
        @tab-click="handleTabChange"
      >
        <el-tab-pane
          v-for="item in options.tabPanesList || tabPanesList"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>

      <el-input
        v-if="['fourth'].includes(activeName)"
        v-model="userSearch"
        class="user-search"
        clearable
        placeholder="请输入姓名、手机号"
        :prefix-icon="Search"
        @keyup.enter="onSearch"
        @clear="onSearch"
      />
    </div>
    <div class="select-dialog__content">
      <div class="select-dialog__content-left">
        <!-- 放置选部门和选人员 -->
        <department-list ref="userListRef" v-if="activeName === 'second'">
        </department-list>

        <!-- 按用户选择 -->
        <user-list ref="userListRef" v-if="activeName === 'fourth'"></user-list>
      </div>
      <div class="select-dialog__content-right">
        <div class="select-dialog__content-right-title">
          <span class="selected-count"
            >已选（<b class="selected-num">{{ haveCheckedUsersList?.length }}</b
            >）</span
          >
          <span
            @click="onDeleteHaveCheckedUsers('all')"
            :class="
              !haveCheckedUsersList?.length
                ? 'not-reset-select'
                : 'reset-selected'
            "
            >清空</span
          >
        </div>
        <el-scrollbar class="selected-dialog__content-right-content">
          <!-- 已选择的人员列表 -->
          <selected-list />
        </el-scrollbar>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, provide, inject, watch } from 'vue';
import { Search } from '@element-plus/icons-vue';
import DepartmentList from './department-list.vue';
import UserList from './user-list.vue';
import SelectedList from './selected-list.vue';
const haveCheckedUsersList = ref<any[]>([]); //已选择的用户数据
const haveCheckedDepartmentList = ref<any[]>([]); //已选择的用户数据
const handleTabChangeOut: any = inject('tab-change');
const props = defineProps({
  options: {
    type: Object,
    required: true,
    default: () => {
      return {
        title: '选择人员',
        initDepartmentList: [], //部门列表
        initUserList: [] //人员列表
      };
    }
  }
});
/**
 * @description: 更新已选择的人员数据,
 * @param {*} checked -是此次表格选中的数据
 * @param {*} notChecked -是此次表格未选中的数据id
 * @return {*}
 */
const onUpdateHaveCheckedUsers = (checked: any[], notChecked: any[]) => {
  //合并
  const concatArr = [...haveCheckedUsersList.value, ...checked];

  //去重
  const deduplicationData = [
    ...new Map(
      concatArr.map((item) => [
        item[props.options.configKey['userIdKey']],
        item
      ])
    ).values()
  ];

  //过滤掉取消选择的数据
  haveCheckedUsersList.value = deduplicationData.filter(
    (item) => !notChecked?.includes(item[props.options.configKey['userIdKey']])
  );
  console.log(deduplicationData, 'deduplicationData------------', checked);
};

/**
 * @description: 删除单个和删除所有(人员列表)
 * @return {*}
 */
const onDeleteHaveCheckedUsers = (
  type: string = 'one',
  deleteObj: Record<string, any> = {}
) => {
  const deleteId = props.options.configKey.userIdKey;
  //删除单个
  if (type === 'one') {
    // console.log('--ddd', userListRef.value.tableListRef.multipleTableRef);

    //表格如果选择的话,取消选择
    userListRef.value.tableListRef.multipleTableRef.toggleRowSelection(
      deleteObj,
      false
    );
    haveCheckedUsersList.value = haveCheckedUsersList.value.filter(
      (item) => item[deleteId] !== deleteObj[deleteId]
    );
    return false;
  }
  userListRef.value.tableListRef.multipleTableRef!.clearSelection();
  haveCheckedUsersList.value = [];
  userListRef.value.treeRef.setCheckedKeys([]);
};

/**
 * @description: 更新已选择的部门数据,
 * @param {*} checked -是此次表格选中的数据
 * @param {*} notChecked -是此次表格未选中的数据id
 * @return {*}
 */
const onUpdateHaveCheckedDepartmentList = (
  checked: any[],
  notChecked: any[]
) => {
  //合并
  const concatArr = [...haveCheckedDepartmentList.value, ...checked].flat(
    Infinity
  );

  //去重
  const deduplicationData = [
    ...new Map(
      concatArr.map((item) => [
        item[props.options.configKey['departmentIdKey']],
        item
      ])
    ).values()
  ];

  //过滤掉取消选择的数据
  haveCheckedDepartmentList.value = deduplicationData.filter(
    (item) =>
      // console.log(
      //   !notChecked?.includes(item[props.options.configKey['departmentIdKey']]),
      //   notChecked,
      //   '----dddd'
      // );
      !notChecked?.includes(
        item[props.options.configKey.departmentKey['departmentIdKey']]
      )
  );
  console.log(
    '部门去重--------',
    concatArr,
    deduplicationData,
    'br--',
    haveCheckedDepartmentList.value
  );
};

const isUserSearch = ref(false);
provide('haveCheckedUsers', haveCheckedUsersList); //已选中的用户
provide('globalOptions', props.options); //传递进来的全局配置
provide('updateHaveCheckedUsers', onUpdateHaveCheckedUsers); //整体改变选择的数据
provide('deleteHaveCheckedUsers', onDeleteHaveCheckedUsers); //部分改变选择的数据

provide('isUserSearch', isUserSearch); //用于用户列表查询,清空数据时,清空了列表数据

provide('haveSelectedDepartments', haveCheckedDepartmentList);
provide('updateHaveCheckedDepartmentList', onUpdateHaveCheckedDepartmentList); //整体改变选择的数据

const keywordsSearch: any = inject('keywordsSearch');

const userListRef = ref();

const dialogVisible = ref(false);

/**
 * @description: 打开弹窗
 * @return {*}
 */
const OpenDialog = () => {
  dialogVisible.value = true;
  //初始化已选择的人员数据
  haveCheckedUsersList.value = props.options.initUserLastCheckedList.map(
    (userId) => {
      return {
        [props.options.configKey['userIdKey']]: userId
      };
    }
  );
};

/**
 * @description: 关闭弹框
 * @return {*}
 */
const handleSubmit = () => {
  dialogVisible.value = false;

  props.options.onOutSubmit(haveCheckedUsersList.value);
};
/**
 * @description: 取消
 * @return {*}
 */
const handleCancel = () => {
  dialogVisible.value = false;
  props.options.onOutCancel();
};

watch(
  () => dialogVisible.value,
  (nv) => {
    if (!nv) {
      props.options.onOutCancel();
    }
  }
);

//默认tab高亮
const activeName = ref('fourth');

const tabPanesList = [
  {
    label: '按部门',
    name: 'second'
  },
  {
    label: '按用户',
    name: 'fourth'
  }
];
/**
 * @description: tab切换
 * @param {*} value
 * @return {*}
 */
const handleTabChange = (value: any) => {
  handleTabChangeOut(value);
};

// 搜索
const userSearch = ref('');

/**
 * @description: 搜索
 * @return {*}
 */
const onSearch = () => {
  isUserSearch.value = Boolean(userSearch.value);
  keywordsSearch(userSearch.value, 'keywords');
};

defineExpose({
  OpenDialog
});
</script>
<style scoped lang="scss">
.select-dialog__tabs {
  width: 100%;
  display: flex;
  position: relative;
  :deep(.el-tabs) {
    width: 100%;
  }
  .user-search {
    height: 40px;
    margin-bottom: 5px;
    position: absolute;
    right: 0;
    top: -10px;
    width: 30%;
  }
}
.select-dialog__content {
  height: 505px;
  border-radius: 6px;
  border: 1px solid #dfe1e6;
  display: flex;
  justify-content: space-between;
  .select-dialog__content-left {
    width: 703px;
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
}
</style>

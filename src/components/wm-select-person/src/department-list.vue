<!--
 * @Author: lg
 * @Date: 2024-07-01 14:38:11
 * @LastEditors: lg
 * @LastEditTime: 2024-07-02 17:32:33
 * @Description:
 * @FilePath: \vite-vue3-template\src\components\wm-select-person\src\department-list.vue
-->
<template>
  <div class="su-department-list" v-loading="globalOptions.selectPersonLoading">
    <div class="su-department-list__left">
      <!-- {{ currentNodeKey }} -->
      <div class="content__main">
        <!--公司名称-->
        <div class="company-name">
          {{ globalOptions?.companyInfo?.name || '-' }}
          <!-- <slot name="companySlot"></slot> -->
        </div>
        <el-scrollbar height="400">
          <el-tree
            :node-key="globalOptions.configKey.departmentKey['departmentIdKey']"
            show-checkbox
            :highlight-current="true"
            :check-strictly="true"
            :expand-on-click-node="false"
            :default-expand-all="true"
            :current-node-key="currentNodeKey"
            :data="globalOptions.initDepartmentList"
            :props="defaultProps"
            @node-click="handleClickNode"
            @check="handleCheckChange"
            ref="treeRef"
          />
        </el-scrollbar>
      </div>
    </div>
    <div class="su-department-list__right">
      <table-list
        :table-data="globalOptions.initUserList"
        ref="tableListRef"
      ></table-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, watch } from 'vue';
import TableList from './table-list.vue';
const globalOptions: any = inject('globalOptions');

const handleGetChildData: any = inject('get-child-data');
const handleUpdateHaveCheckedUsers: any = inject('updateHaveCheckedUsers');
const handleUpdateHaveCheckedDepartmentList: any = inject(
  'updateHaveCheckedDepartmentList'
);

const haveCheckedUsers = inject('haveCheckedUsers', []); //已选中的用户
const haveSelectedDepartments = inject('haveSelectedDepartments', []); //已选中的部门

const defaultProps = {
  children: globalOptions.configKey.departmentKey.children,
  label: globalOptions.configKey.departmentKey.label
};
const currentNodeKey = ref('');
/**
 * @description: 点击节点
 * @param {*} item
 * @return {*}
 */
const handleClickNode = async (item: any) => {
  currentNodeKey.value =
    item[globalOptions.configKey.departmentKey['departmentIdKey']];
  console.log(currentNodeKey.value, '----------');
  handleGetChildData(item, (res: any[]) => {
    handleUpdateHaveCheckedDepartmentList([
      {
        [globalOptions.configKey.departmentKey['departmentIdKey']]:
          item[globalOptions.configKey.departmentKey['departmentIdKey']],
        userList: res
      }
    ]);
  });
};

/**
 * @description: 节点选中
 * @param {*} data
 * @param {*} checkedData
 * @return {*}
 */
const handleCheckChange = (data: any, checkedData: any) => {
  currentNodeKey.value =
    data[globalOptions.configKey.departmentKey['departmentIdKey']];

  console.log('节点选中---和反选-------------', data, checkedData);
  let isChecked = checkedData.checkedKeys.includes(
    data[globalOptions.configKey.departmentKey['departmentIdKey']]
  );

  if (isChecked) {
    handleGetChildData(data, (res: any[]) => {
      //更新选则的列表数据
      handleUpdateHaveCheckedUsers(res);
      handleUpdateHaveCheckedDepartmentList([
        {
          [globalOptions.configKey.departmentKey['departmentIdKey']]:
            data[globalOptions.configKey.departmentKey['departmentIdKey']],
          userList: res
        }
      ]);
    });

    return false;
  }

  handleGetChildData(data, (res: any[]) => {
    //这里传递的是id
    const notCheckedIds = res.map(
      (item) => item[globalOptions.configKey['userIdKey']]
    );
    //没选中的时候,去掉上次已选中用户的数组
    handleUpdateHaveCheckedUsers([], notCheckedIds);

    //没选中的时候,去掉上次已选中部门数组
    handleUpdateHaveCheckedDepartmentList(
      [],
      [data[globalOptions.configKey.departmentKey['departmentIdKey']]]
    );
  });
};
const treeRef = ref();
watch(
  () => haveCheckedUsers.value,
  (nv) => {
    // debugger;
    const findIndex = haveSelectedDepartments.value?.findIndex(
      (item) =>
        item[globalOptions.configKey.departmentKey['departmentIdKey']] ===
        currentNodeKey.value
    );
    console.log('-----------ddd', haveSelectedDepartments.value);
    //当前部门下所有用户ID
    const currentDepartmentUserList = haveSelectedDepartments.value[
      findIndex
    ]?.userList.map((item) => item[globalOptions.configKey['userIdKey']]);
    // haveSelectedDepartments.values[index].userList=

    const haveCheckedUsersIds = nv.map(
      (item) => item[globalOptions.configKey['userIdKey']]
    );

    const allInChecked = currentDepartmentUserList?.every(
      (item) => haveCheckedUsersIds.includes(item) === true
    );
    console.log(treeRef.value.getCheckedKeys(), '选择的节点');
    if (
      allInChecked &&
      !treeRef.value.getCheckedKeys().includes(currentNodeKey.value)
    ) {
      treeRef.value.setCheckedKeys([
        ...treeRef.value.getCheckedKeys(),
        currentNodeKey.value
      ]);
    } else {
      const notCurrentNodeKey = treeRef.value
        .getCheckedKeys()
        .filter((item) => item !== currentNodeKey.value);
      treeRef.value.setCheckedKeys([...notCurrentNodeKey]);
    }
    console.log(allInChecked, '所有的都被选择了');
    // console.log('当前部门下所有用户ID', currentDepartmentUserList);
    // console.log(
    //   'nV---------',
    //   nv,
    //   ' currentNodeKey.value',
    //   currentNodeKey.value,
    //   haveSelectedDepartments
    // );
  },
  {
    deep: true
  }
);

const tableListRef = ref(null);
defineExpose({
  tableListRef,
  treeRef
});
</script>
<style lang="scss" scoped>
.su-department-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .su-department-list__left {
    width: 356px;
    height: 100%;
    display: flex;
    flex-direction: column;

    padding: 16px 24px;

    .content__title {
      height: 30px;
    }

    .content__main {
      width: calc(100% - 10px);
    }
  }

  .su-department-list__right {
    width: 347px;
    height: 100%;
    border-left: 1px solid #dfe1e6;
  }
}

/* 左侧树样式-后续可提取公用-saas人事管理（组织架构、人员信息） */
.company-name {
  font-size: 14px;
  color: #42526e;
  margin: 16px 0px;
  cursor: pointer;
}

/***-----------树样式 Begin---------***/
.tree-content {
  margin-left: 16px;
}
.el-tree {
  height: calc(100vh - 296px);
}
.box-item {
  display: inline-block;
}
.custom-tree-node {
  width: calc(100% - 54px);
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
  i {
    margin-right: 12px;
    font-size: 14px;
  }
  .label {
    width: 100%;
    display: flex;
    align-items: center;
    .box-item {
      width: 100%;
    }
    .box-item1 {
      display: inline-block;
      width: calc(100% - 20px);
      line-height: 23px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
:deep(.el-tree-node__children) {
  .custom-tree-node {
    margin-left: 4px;
    padding-left: 12px;
    .label {
      color: #56585c;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
    }
  }
}
:deep(.el-tree-node > .el-tree-node__content) {
  .label {
    margin-right: 12px;
    color: #dfe1e6;
    .box-item {
      color: #42526e;
    }
  }
}
:deep(.el-tree-node.is-current > .el-tree-node__content) {
  background-color: transparent;
  .custom-tree-node {
    background: #e8f5ff;
    border-radius: 6px;
  }
  .label {
    color: #1678ff !important;
    font-weight: 600;
    .box-item {
      color: #1678ff;
    }
  }
}
/***-----------树样式 End---------***/
</style>

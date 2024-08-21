<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-20 18:27:01
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 11:33:05
 * @FilePath: \vite-vue3-template\src\components\select-person\src\department-list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 按部门 -->
  <div class="su-department-list">
    <div class="su-department-list__left">
      <el-scrollbar>
        <div class="content__main">
          <!--公司名称-->
          <div class="company-name">
            <hb-svg-icon name="home" />&nbsp;&nbsp;{{ companyName }}
          </div>
          <el-tree
            ref="treeDepartmentRef"
            :props="defaultProps"
            :data="byDepartmentTreeData"
            :show-checkbox="true"
            :current-node-key="currentNodeKey"
            highlight-current
            node-key="departmentId"
            :default-expand-all="true"
            :check-strictly="true"
            :expand-on-click-node="false"
            @node-click="handleClickNode"
            @check="handleCheckChange"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span class="label">
                  <!-- departmentType 部门类型 P生产 M管理 -->
                  <i
                    v-if="data.departmentType === 'P'"
                    class="iconfont icon-a-zu1"
                  ></i>
                  <i
                    v-if="data.departmentType === 'M'"
                    class="iconfont icon-a-lujing4"
                  ></i>
                  <el-tooltip
                    class="box-item"
                    effect="dark"
                    :content="data.departmentTitle"
                    placement="top"
                    :show-after="100"
                    :disabled="isShowTooltip"
                  >
                    <span
                      class="prefix box-item1"
                      :class="{ 'is-leaf': node.isLeaf }"
                      @mouseenter="onMouseEnter($event)"
                    >
                      <div class="icons" />

                      <span class="name">{{ data.departmentTitle }}</span>
                    </span>
                  </el-tooltip>
                </span>
              </span>
            </template>
          </el-tree>
        </div>
      </el-scrollbar>
    </div>
    <div class="su-department-list__right">
      <person-list
        :data="props.options?.childData || []"
        ref="personRef"
        @switch-check="handleSwitchCheck"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  PropType,
  watch,
  computed,
  onMounted,
  inject,
  nextTick
} from 'vue';
import PersonList from './person-list.vue';
import { useUsersStore } from './store/user';
import { ElMessage } from 'element-plus';
const store = useUsersStore();
const { addList, addSelected, delSelected, setDepartmentId } = store;
// const loading = ref(false);
const handleGetChildData = inject('get-child-data');
const propsSendData: any = inject('propsSendData');
const companyName: any = inject('companyName');
const activeName: any = inject('activeName');
const isFirstOpenDialog: any = inject('isFirstOpenDialog');

/* 控制tooltip显示 */
const isShowTooltip = ref(false);
const onMouseEnter = (e: Event) => {
  const cell = e.target as any;
  isShowTooltip.value = cell.scrollWidth === cell.offsetWidth;
};

const defaultProps = {
  children: 'children',
  label: 'departmentTitle'
};
const currentNodeKey = ref('');

interface IDepartment {
  label: string;
  children: string;
  isLeaf?: string;
}
const props = defineProps({
  options: {
    // data: Function,
    // subData: Function,
    type: Object
  }
});
const sub = ref([]);
const treeDepartmentRef = ref();

// 按部门下的选择人员
const handleClickNode = async (item: any) => {
  console.log('按部门下的选择人员+++++---', item, propsSendData.maxCheckMore);
  currentNodeKey.value = item.departmentId;
  setDepartmentId(item.departmentId);

  handleGetChildData(item);
  if (propsSendData.maxCheckMore === 1) {
    treeDepartmentRef.value.$refs['hbTreeRef'].setCheckedKeys([]);
    treeDepartmentRef.value.$refs['hbTreeRef'].setCheckedKeys([
      item.departmentId
    ]);
  }
};

/* 复选框勾选 */
const personRef = ref('');
const isCheckAll = ref(false); // 是否全选/全不选
const isClickCheck = ref(false); //是否点击复选框
const handleCheckChange = (data, checkedData) => {
  handleClickNode(data);
  // 勾选全部人员
  isClickCheck.value = true;
  isCheckAll.value = checkedData.checkedKeys.includes(data.departmentId);
  isCheckAll.value
    ? store.addDepartment(store.departmentId)
    : store.deleteDepartment(store.departmentId);
};

/* 人员表格勾选-联动处理部门勾选 */
const handleSwitchCheck = (bool) => {
  treeDepartmentRef.value.$refs['hbTreeRef'].setChecked(
    store.departmentId,
    bool
  );
  bool
    ? store.addDepartment(store.departmentId)
    : store.deleteDepartment(store.departmentId);
};

// const isIndeterminate = ref(false);

// 初始化数据
const byDepartmentTreeData: any = ref([]);
watch(
  () => props.options,
  (nv) => {
    nv?.data && (byDepartmentTreeData.value = nv.data);
    // 默认初次选中-高亮
    nextTick(() => {
      if (!store.departmentId && byDepartmentTreeData.value.length) {
        const item = byDepartmentTreeData.value[0];
        currentNodeKey.value = item?.departmentId;
        setDepartmentId(item.departmentId);
        handleGetChildData(item);
      } else {
        treeDepartmentRef.value.$refs['hbTreeRef']?.setCurrentKey(
          store.departmentId
        );
      }
    });

    let departmentList: any = [];
    byDepartmentTreeData.value.map((v) => {
      departmentList.push(v);
      if (v.children && v.children.length) {
        v.children.map((m) => {
          departmentList.push(m);
        });
      }
    });
    addList(departmentList, 'department');
    nv?.childData && addList(nv.childData, 'department');

    if (isClickCheck.value) {
      isClickCheck.value = false;
      if (isCheckAll.value) {
        const ids = nv.childData.map((val) => val.staffSubscribeThaliId);
        const newIds = [...new Set([...ids, ...store.selected])];
        if (newIds.length > propsSendData?.maxCheckMore) {
          treeDepartmentRef.value.$refs['hbTreeRef'].setChecked(
            store.departmentId,
            false
          );
          return ElMessage.warning(
            '最多只能选择' + propsSendData.maxCheckMore + '项'
          );
        }
      }
      personRef.value &&
        personRef.value?.handleCheckedAllPerson(isCheckAll.value);
    }
  },
  {
    deep: true,
    immediate: true
  }
);

/* 监听tab切换--树的默认选中 */
watch(
  () => activeName.value,
  (val) => {
    if (val === 'second') {
      store.departmentList.length &&
        treeDepartmentRef.value.$refs['hbTreeRef'].setCheckedKeys([
          ...store.departmentList
        ]);
    }
  },
  {
    deep: true,
    immediate: true
  }
);

/* 监听弹框开启--清除树的默认选中(不确认数据，所以清除) */
watch(
  () => isFirstOpenDialog.value,
  (val) => {
    store.departmentList = [];
    treeDepartmentRef.value?.$refs['hbTreeRef']?.setCheckedKeys([]);
  },
  {
    deep: true
  }
);
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
    /* flex: 1; */
    padding: 16px 24px;

    .content__title {
      height: 30px;
      // padding-top: 10px;
    }

    .content__main {
      /* flex: 1; */
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

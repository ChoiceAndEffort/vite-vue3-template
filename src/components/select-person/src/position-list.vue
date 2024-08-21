<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-20 18:27:01
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 11:33:23
 * @FilePath: \vite-vue3-template\src\components\select-person\src\position-list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 按岗位 -->
  <div class="su-position-list">
    <div class="su-position-list__left">
      <div class="content__title" v-if="byPositionTreeData.length">
        <!-- <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"  v-if="!options?.onlyChoicePerson">
          全部
        </el-checkbox> -->
      </div>
      <el-scrollbar class="content__main" height="350">
        <el-tree
          :data="byPositionTreeData"
          :show-checkbox="!options?.onlyChoicePerson"
          node-key="positionId"
          :default-expand-all="true"
          :check-strictly="false"
          :props="defaultProps"
          @check-change="addPosition"
          @node-click="clickNode"
          ref="treePositionRef"
          :max="1"
        />
      </el-scrollbar>
    </div>
    <div class="su-position-list__right" v-if="props.options.childData.length">
      <person-list :data="props.options.childData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, onMounted, watch, inject } from 'vue';
import PersonList from './person-list.vue';
import { ISelectItem } from './types';
import { useUsersStore } from './store/user';
const store = useUsersStore();
const { addList, addSelected, delSelected } = store;
// const loading = ref(false);
const handleGetChildData = inject('get-child-data');

const defaultProps = {
  children: 'children',
  label: 'positionName'
};

const props = defineProps({
  options: {
    // data: Function,
    // subData: Function,
    type: Object
  }
});
const propsSendData: any = inject('propsSendData');
// 按岗位下的选择人员
const sub = ref<ISelectItem[]>([]);
const treePositionRef = ref();
const clickNode = async (item: any) => {
  handleGetChildData(item);

  if (propsSendData?.maxCheckMore === 1) {
    treePositionRef.value.setCheckedKeys([]);
    treePositionRef.value.setCheckedKeys([item.positionId]);
  }

  // if (!props.options.subData) return;
  // loading.value = true;

  // const result = await props.options?.subData(item);
  // if (result) {
  //   sub.value = result.data;
  // addList(sub.value, "positon");
  // loading.value = false;
  // }
};
// 新增岗位
const addPosition = (o: any, isChecked: boolean, subIsChecked: boolean) => {
  const id = o.positionId || o.enterpriseId;
  if (isChecked) {
    addSelected([id]);
    if (propsSendData.maxCheckMore === 1) {
      treePositionRef.value.setCheckedKeys([]);
      treePositionRef.value.setCheckedKeys([id]);
    }
  } else {
    delSelected([id]);
  }
};

store.$subscribe((_, __) => {
  store.list.map((v) => {
    treePositionRef.value?.setChecked(v.id, false, false);
  });
  store.selected.map((v) => {
    treePositionRef.value?.setChecked(v, true, false);
  });
});

// 选中结果
const checkAll = ref(false);
const isIndeterminate = ref(false);

// 全选
const handleCheckAllChange = () => {
  const idAry: any = [];
  byPositionTreeData.value.map((v) => {
    if (v.children) {
      v.children.map((m) => {
        idAry.push(m.positionId);
      });
    }
    idAry.push(v.positionId);
  });
  if (treePositionRef.value?.getCheckedKeys().length == idAry.length) {
    delSelected(idAry);
    isIndeterminate.value = true;
    checkAll.value = false;
  } else {
    addSelected(idAry);
    isIndeterminate.value = false;
    checkAll.value = true;
  }
};

// 初始化数据
const byPositionTreeData = ref([]);
watch(
  () => props.options,
  (nv) => {
    byPositionTreeData.value = nv.data;
    let positionList: any = [];
    nv.data.map((v) => {
      positionList.push(v);
      if (v.children && v.children.length) {
        v.children.map((m) => {
          positionList.push(m);
        });
      }
    });
    addList(positionList, 'position');
    addList(props.options.childData, 'positon');
  },
  {
    deep: true,
    immediate: true
  }
);
// onMounted(async () => {
//   const res = await props.options?.data();

//   byPositionTreeData.value = res.data;
//   let positionList: any = [];
//   res.data.map((v) => {
//     positionList.push(v);
//     if (v.children && v.children.length) {
//       v.children.map((m) => {
//         positionList.push(m);
//       });
//     }
//   });
//   addList(positionList, "position");
// });
</script>

<style lang="scss" scoped>
.su-position-list {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;

  .su-position-list__left {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;

    .content__title {
      height: 30px;
      // padding-top: 10px;
    }

    .content__main {
      flex: 1;
    }
  }

  .su-position-list__right {
    padding: 0 10px;
    width: 400px;
    height: 100%;
    border-left: 1px solid #ebecf0;
  }
}
</style>

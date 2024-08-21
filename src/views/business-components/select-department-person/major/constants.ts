/*
 * @Author: lg
 * @Date: 2024-08-03 14:26:57
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 15:06:38
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\business-components\select-department-person\major\constants.ts
 */
export const contentConfig = [
  {
    title: '仅选人',
    slot: 'selectPerson',
    height: 230,
    code: `
    <template>
    <el-button @click="handleOpenDialog1" type="primary">添加人员</el-button>
    <lg-select-department-person
      ref="selectDepartmentPersonRef1"
      :options="initOptions1"
      v-if="show1"
    >
    </lg-select-department-person>
    <template>

    <script lang="ts" setup>
    import { ref } from 'vue';
    import { useSelectDepartmentPerson } from '@/hooks/use-select-person/index';
    const selectDepartmentPersonRef1 = ref(null);
    const onOutSubmit1 = async (v: any) => {
      console.log('选择的人员=====', v);
    };
    const onOutCancel1 = () => {
      console.log('取消');
    };
    const lastCheckedValue1 = ref([]);
    const show1 = ref(false);
    setTimeout(() => {
      lastCheckedValue1.value = ['240731152310932045824'];
      show1.value = true;
    }, 1000);
    const { initOptions: initOptions1, handleOpenDialog: handleOpenDialog1 } =
      useSelectDepartmentPerson({
        title: '选择人员',
        selectType: 1,
        selectDepartmentPersonRef: selectDepartmentPersonRef1,
        onOutSubmit: onOutSubmit1,
        onOutCancel: onOutCancel1,
        initLastCheckedListIds: lastCheckedValue1,
        limitSelectNoticeTitle: '（只能选择一个用户为主管理员）'
      });
    </script>
      `
  },
  {
    title: '仅选部门',
    slot: 'selectDepartMent',
    height: 230,
    code: `
    <template>
      <el-button @click="handleOpenDialog2" type="primary">添加部门</el-button>
      <lg-select-department-person
        ref="selectDepartmentPersonRef2"
        :options="initOptions2"
        v-if="show2"
      >
      </lg-select-department-person>
    <template>

    <script lang="ts" setup>
    import { ref } from 'vue';
    import { useSelectDepartmentPerson } from '@/hooks/use-select-person/index';
    const onOutSubmit2 = async (v: any) => {
      console.log('选择的人员=====', v);
    };
    const onOutCancel2 = () => {
      console.log('取消');
    };
    const lastCheckedValue2 = ref([]);
    const show2 = ref(false);
    setTimeout(() => {
      lastCheckedValue2.value = ['240731152310932045824'];
      show2.value = true;
    }, 1000);
    const { initOptions: initOptions2, handleOpenDialog: handleOpenDialog2 } =
      useSelectDepartmentPerson({
        title: '选择部门',
        selectType: 2,
        selectDepartmentPersonRef: selectDepartmentPersonRef2,
        onOutSubmit: onOutSubmit2,
        onOutCancel: onOutCancel2,
        initLastCheckedListIds: lastCheckedValue2,
        limitSelectNoticeTitle: '（只能选择一个用户为主管理员）'
      });

    </script>
      `
  },
  {
    title: '选部门和人',
    slot: 'selectDepartMentAndPerson',
    height: 230,
    code: `
    <template>
     <el-button @click="handleOpenDialog3" type="primary">添加部门和人员</el-button>
     <lg-select-department-person
     ref="selectDepartmentPersonRef3"
     :options="initOptions3"
      v-if="show3"
     >
     </lg-select-department-person>
    <template>

    <script lang="ts" setup>
    import { ref } from 'vue';
    import { useSelectDepartmentPerson } from '@/hooks/use-select-person/index';
    const onOutSubmit3 = async (v: any) => {
      console.log('选择的人员=====', v);
    };
    const onOutCancel3 = () => {
      console.log('取消');
    };
    const lastCheckedValue3 = ref([]);
    const show3 = ref(false);
    setTimeout(() => {
      lastCheckedValue3.value = ['240731152310932045824'];
      show3.value = true;
    }, 1000);
    const { initOptions: initOptions3, handleOpenDialog: handleOpenDialog3 } =
      useSelectDepartmentPerson({
        title: '选择部门和人员',
        selectType: 3,
        selectDepartmentPersonRef: selectDepartmentPersonRef3,
        onOutSubmit: onOutSubmit3,
        onOutCancel: onOutCancel3,
        initLastCheckedListIds: lastCheckedValue3,
        limitSelectNoticeTitle: '（只能选择一个用户为主管理员）'
      });
    </script>
      `
  }
];

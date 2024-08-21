<!--
 * @Author: lg
 * @Date: 2024-05-10 17:10:25
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 13:50:30
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\test-lg\major\index.vue
-->
<template>
  <div class="home">
    <el-button @click="handleOpen">选人</el-button>
    <el-button @click="handleOpenDialog">选人1</el-button>
    <h2>测试页</h2>

    <!-- <hb-select-person ref="selectPerson" :options="selectPersonOptions" /> -->
    <vm-select-person ref="vmSelectPerson" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useTestLgStore from '@/store/test-lg';
import useUserConfigStore from '@/store/user-config';
const testLgStore = useTestLgStore();
const userConfigStore = useUserConfigStore();
import { useSelectPerson } from '@/hooks/use-select-person/index';

const { t, locale: i18nLanguage } = useI18n();

const formData = reactive<any>({
  language: 'zh'
});

const handleLanguageSwitch = (v: string | number | boolean) => {
  // debugger
  console.log('语言切换', v);
  userConfigStore.setLanguage(v);

  // location.reload();
  window.location.reload();
};
const handleAdd = () => {
  console.log('新增');
};
const selectPerson = ref();
const { selectPersonOptions, handleSelectPerson } = useSelectPerson({
  refDom: selectPerson,
  sendTabActiveTab: 'fourth', //first-最近使用;second-按部门;third-按岗位;fourth-按用户
  dialogTitle: '选择检验人员',
  maxCheckMore: 5,
  autoCompleteValueKey: 'trueName',
  department: {
    data: [],
    childData: [],
    onlyChoicePerson: true, //仅仅选人true-仅选人,false-可选部门
    onlyChoiceDepartment: false //仅选部门 true-仅选部门,false-可选人
  }
});

//选人的提交
const submit = (data: [{ [key: string]: string | number }]) => {
  console.log(data, '选择输出结果');
};

const handleOpen = () => {
  console.log(selectPersonOptions, '------------------');
  Object.assign(selectPersonOptions, { submit });
  setTimeout(() => {
    handleSelectPerson();
  }, 100);
};
const vmSelectPerson = ref();
const handleOpenDialog = () => {
  console.log(vmSelectPerson.value.OpenDialog, '--------ddd');
  // vmSelectPerson.value?.OpenDialog();
};

formData.language = userConfigStore.getLanguage;
</script>

<style scoped lang="scss">
ul {
  width: vw(230);
  height: vh(364);
  background: rgb(112, 101, 101);
  font-size: vw(16);
}
</style>

<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-20 18:27:01
 * @LastEditors: lg
 * @LastEditTime: 2023-07-19 14:54:14
 * @FilePath: /su-code/vue3/ui-plus/packages/components/select-person/src/history-list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <person-list :data="options" />
</template>
<script lang="ts" setup>
import PersonList from './person-list.vue';
import { ref, onMounted, watch } from 'vue';
import { useUsersStore } from './store/user';

const store = useUsersStore();
const { addList } = store;

const props = defineProps({
  options: Array
});
watch(
  () => props.options,
  (nv) => {
    console.log('测试选人', nv);
    
    addList(nv, 'history');
  },
  {
    deep: true
  }
);

// const historyLoading = ref(true);
// const byHistoryData = ref([]);
onMounted(() => {
  // const res = await props.options();
  // console.log('-------------', res);
  // byHistoryData.value = res.data;
  // historyLoading.value = false;
});
</script>

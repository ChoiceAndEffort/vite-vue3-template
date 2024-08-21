<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-20 18:27:01
 * @LastEditors: qf
 * @LastEditTime: 2024-01-23 17:13:34
 * @FilePath: /su-code/vue3/ui-plus/packages/components/select-person/src/history-list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-loading="loading">
    <person-list :data="byUserData" />
  </div>
</template>
<script lang="ts" setup>
import PersonList from './person-list.vue';
import { watch, PropType, ref, onMounted } from 'vue';
import { ISelectItem } from './types';
import { useUsersStore } from './store/user';

const store = useUsersStore();
const { addList } = store;

const props = defineProps({
  options
});

const loading = ref(true);
const byUserData = ref([]);
onMounted(async () => {
  const res = await props.options();
  byUserData.value = res.data;
  addList(res.data, 'history');
  loading.value = false;
});
</script>
<style scoped lang="scss"></style>

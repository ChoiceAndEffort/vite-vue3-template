<template>
  <table-list
    v-loading="globalOptions.selectPersonLoading"
    :table-data="globalOptions.initUserList"
    ref="tableListRef"
  ></table-list>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue';
import TableList from './table-list.vue';
const globalOptions: any = inject('globalOptions');
const tableListRef = ref(null);
defineExpose({
  tableListRef
});
</script>
<style scoped lang="scss"></style>

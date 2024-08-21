<!--
 * @Author: lg
 * @Date: 2023-07-10 08:56:56
 * @LastEditors: lg
 * @LastEditTime: 2023-07-18 14:33:42
 * @FilePath: 
 * @Description:日期时间组合
-->
<template>
  <el-date-picker v-model="date" :type="otherData.chidType" placeholder="选择"
    :value-format="otherData.valueFormat || 'YYYY-MM-DD hh:mm:ss'" start-placeholder="开始日期" end-placeholder="结束日期"
    @change="handleFilter" />
</template>

<script lang='ts' setup>
import { ref, reactive,toRefs } from 'vue';
const date:any = ref("");
const props = defineProps({
  otherData: {
    type: Object,
  },
  activeData: {
    type: [Object, Array, String]
  }
})
const { activeData } = toRefs(props)
date.value = activeData.value
const emits = defineEmits(["filter"])
const handleFilter = () => {
  setTimeout(() => {
    emits("filter", date.value);
  }, 550)

};
</script>
<style scoped lang='scss'></style>
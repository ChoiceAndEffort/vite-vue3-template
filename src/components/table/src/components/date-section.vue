<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-16 08:56:56
 * @LastEditors: suchiva suchvia@126.com
 * @LastEditTime: 2023-02-16 23:53:45
 * @FilePath: /su-code/vue3/packages/su-ui-plus/src/components/table/src/components/date.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from "vue";
const date = ref("");
const emits = defineEmits(["filter"]);
const handleFilter = () => {
  emits("filter", date.value);
};
</script>
<template>
  <div class="su-widget-date-section">
    <div>
      <el-date-picker
        v-model="date"
        type="daterange"
        start-placeholder="开始时期"
        end-placeholder="结束日期"
        :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
        size="small"
        style="width: 92%"
      />
    </div>
    <div class="su-widget-date-section__btns">
      <el-button @click="date = ''">清除</el-button>
      <el-button type="primary" @click="handleFilter">确定</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoed>
.su-widget-date-section {
  display: flex;
  flex-direction: column;
  .su-widget-date-section__btns {
    display: flex;
    padding-top: 15px;
    text-align: right;
    justify-content: flex-end;
  }
}
</style>

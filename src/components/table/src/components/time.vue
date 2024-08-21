<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-16 08:57:03
 * @LastEditors: qf
 * @LastEditTime: 2023-12-06 17:56:05
 * @FilePath: /su-studio/work/packages/components/table/src/components/time.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from "vue";
const time = ref("");
const emits = defineEmits(["filter"]);
const handleFilter = () => {
  emits("filter", time.value);
};
</script>
<template>
  <div class="su-widget-date-section">
    <div class="su-widget-date-section__choice">
      <el-date-picker
        v-model="time"
        type="datetime"
        size="small"
        placeholder="请选择一个时间"
        style="width: 150px"
        value-format="YYYY-MM-DD hh:mm:ss"
      />
    </div>
    <div class="su-widget-date-section__btns">
      <el-button @click="time = ''">清除</el-button>
      <el-button type="primary" @click="handleFilter">确定</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoed>
.su-widget-date-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  .su-widget-date-section__choice {
    width: 100%;
  }
  .su-widget-date-section__btns {
    display: flex;
    padding-top: 15px;
    text-align: right;
    justify-content: flex-end;
  }
}
</style>

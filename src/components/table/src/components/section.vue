<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-16 08:57:09
 * @LastEditors: qf
 * @LastEditTime: 2023-11-28 15:51:47
 * @FilePath: /su-studio/work/packages/components/table/src/components/section.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, toRefs } from "vue";

const numLeft = ref(null);
const numRight = ref(null);
const emits = defineEmits(["filter"]);
const props = defineProps({
  activeData: {
    type: [Object, Array, String],
  },
});
const { activeData } = toRefs(props);

if (Array.isArray(activeData.value)) {
  numLeft.value = activeData.value[0] ?? null;
  numRight.value = activeData.value[1] || null;
}

const resetFilter = () => {
  // numLeft.value = 1;
  // numRight.value = numLeft.value + 1;
  numLeft.value = null;
  numRight.value = null;
  emits("filter", null);
};

const handleFilter = () => {
  let data = [numLeft.value, numRight.value];
  if (numLeft.value === null || numRight.value === null) data = null;
  emits("filter", data);
};
</script>
<template>
  <div class="su-widget-section su-widget">
    <div class="su-widget-section__top su-widget">
      <span
        ><el-input-number
          v-model="numLeft"
          :min="0"
          controls-position="right"
          style="width: 80px"
          class="su-widget"
      /></span>
      <span>-</span>
      <span
        ><el-input-number
          v-model="numRight"
          :min="1"
          :max="100000000"
          controls-position="right"
          style="width: 80px"
      /></span>
    </div>
    <div class="su-widget-section__btns">
      <el-button @click="resetFilter">重置</el-button>
      <el-button type="primary" @click="handleFilter">确定</el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.su-widget-section {
  width: 100%;
  display: flex;
  flex-direction: column;

  .su-widget-section__top {
    display: flex;
    justify-content: space-around;
  }

  .su-widget-section__btns {
    display: flex;
    padding-top: 10px;
    text-align: right;
    justify-content: flex-end;
  }
}
</style>

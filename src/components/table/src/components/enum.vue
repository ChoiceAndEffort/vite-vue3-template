<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-16 23:50:16
 * @LastEditors: lg
 * @LastEditTime: 2023-12-18 15:11:24
 * @FilePath: \hb-ui-plus\components\table\src\components\enum.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 多选类型 -->
<template>
  <div class="su-widget-enum">
    <div class="su-widget-enum__list">
      <el-checkbox-group v-model="checked" v-if="data?.length">
        <el-checkbox
          :label="item"
          v-for="(item, index) in data"
          :key="'s_' + index"
        >
          {{ item?.label }}
        </el-checkbox>
      </el-checkbox-group>
      <template v-else>
        <el-empty description="暂无数据">
        </el-empty>
      </template>
    </div>
    <div class="su-widget-enum__btns">
      <el-button size="small" @click="resetFilter" link>重置</el-button>
      <el-button size="small" @click="handleFilter" type="primary" link
        >确定</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue';
const checked = ref<any>([]);
const emits = defineEmits(['filter']);

const props = defineProps({
  data: {
    type: Array
  },
  activeData: {
    type: [Object, Array, String]
  }
});
const { activeData } = toRefs(props);

const handleFilter = () => {
  emits('filter', checked.value);
};
const resetFilter = () => {
  checked.value = [];
};
// console.log(activeData.value,777777777);
checked.value = activeData.value || [];

onMounted(() => {});
</script>

<style scoped lang="scss">
.su-widget-enum {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 180px;

  .su-widget-enum__list {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .su-widget-enum__btns {
    height: 20px;
    border-top: 1px solid #eee;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
}

:deep(.el-checkbox-group) {
  display: flex;
  flex-direction: column;
}
:deep(.el-empty) {
  .el-empty__image {
    display: none;
  }
}
</style>

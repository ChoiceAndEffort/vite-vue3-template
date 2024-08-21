<template>
  <!-- 远程搜索 -->
  <el-autocomplete
    v-model="state"
    clearable
    :fetch-suggestions="otherData.querySearchAsync"
    :placeholder="placeholder"
    :value-key="otherData['value-key']"
    @select="handleSelect"
    @blur="handleBlur"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
const emits = defineEmits(["filter"]);
const state = ref("");
const props = defineProps({
  otherData: {
    type: Object,
  },
  activeData: {
    type: [Object, Array, String],
  },
  placeholder: {
    type: String,
    default: ''
  }
});

const isReset = ref(false);
const { activeData, otherData } = toRefs(props);

state.value =
  typeof activeData?.value === "string"
    ? activeData.value
    : activeData.value?.[otherData.value["value-key"]];

/* 下拉选择 */
const handleSelect = (item: any) => {
  emits("filter", item);
};

/* 失去焦点 */
const handleBlur = () => {
  const data =
    typeof activeData?.value !== "string" && !isReset.value
      ? activeData.value
      : state.value;
  emits("filter", data);
};

/* 输入-当输入时名称跟activeData.value里不同时，需要重置数据 */
const handleInput = (val) => {
  if (val !== activeData.value?.[otherData.value["value-key"]]) {
    isReset.value = true;
  }
};
</script>
<style scoped lang="scss"></style>

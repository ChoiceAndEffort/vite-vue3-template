<template>
  <el-input
    type="text"
    v-model="input"
    :placeholder="placeholder"
    :prefix-icon="Search"
    clearable
    @blur="handleBlur"
  />
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { Search } from "@element-plus/icons-vue";
const emits = defineEmits(["filter"]);
const input = ref("");
const props = defineProps({
    activeData: {
        type: [Object, Array, String]
    },
    placeholder: {
      type: String,
      default: ''
    }
})

const { activeData } = toRefs(props);
input.value = activeData?.value || '';
const handleBlur = () => {
    emits('filter', input.value)
}
</script>

<style scoped></style>

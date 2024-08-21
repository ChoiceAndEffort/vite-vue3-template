<template>
  <el-cascader v-model="state" :options="data" clearable :props="defaultProps" @change="handleChange"  @visible-change="handleVisibleChange" @remove-tag="handleRemoveTag"/>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
const props = defineProps({
data: {
  type: Array,
},
otherData: {
  type: Object,
},
activeData: {
  type: [Object, Array, String],
},
props: {
  type: Boolean,
  default: false
}
});

/**
* @description: 树数组转扁平数组
* @param {Array} tree
* @return {*}
*/
function recursiveTreeToArray(tree) {
let res = [];
function recursion(node) {
  const { children, ...i } = node;
  res.push(i);
  if (children && children.length) {
    for (const child of children) {
      recursion(child);
    }
  }
}
for (const item of tree) {
  recursion(item);
}
return res;
}

const emits = defineEmits(["filter"]);
const defaultProps = ref({})
defaultProps.value = props.props;


const { activeData, otherData } = toRefs(props);

const state = ref("");
state.value = activeData.value;

/* 处理选择数据 */
const dataArr= ref([]);
const value = defaultProps.value?.value || 'value';
const multiple = defaultProps.value?.multiple || false;
const recursiveData = recursiveTreeToArray(props.data);
const handleChange = (val) => {
  state.value = val;
  if(val === null || val?.length === 0){
    emits("filter", null);
    return false;
  }
  const ids = multiple ? val.map(item => item[item.length-1]) : val[val.length-1];
  dataArr.value =  recursiveData.filter(item => ids.includes(item[value]));
}

const handleVisibleChange = (val) => {
!val && emits("filter", state.value, dataArr.value);
}

/* 多选-移除标签 */
const handleRemoveTag = (val) => {
  const index = state.value.findIndex(item => item[item.length-1]===val[val.length-1]);
  state.value.splice(index, 1);
  handleChange(state.value);
  emits("filter", state.value, dataArr.value);
}
</script>
<style scoped lang="scss"></style>
<!--
 * @Author: lg
 * @Date: 2023-12-15 13:39:37
 * @LastEditors: qf
 * @LastEditTime: 2024-06-07 17:41:42
 * @Description: 
 * @FilePath: \hb-ui-plus\components\table\src\components\select-multiple.vue
-->
<template>
  <!-- 远程搜索+多选 -->
  <div class="farther">
    <!-- <div> -->
    <el-select
      v-model="state"
      :multiple="true"
      filterable
      remote
      collapse-tags
      collapse-tags-tooltip
      reserve-keyword
      placeholder="请输入"
      :remote-method="remoteMethod"
    >
      <el-option
        v-for="item in options"
        :key="item[otherData.value]"
        :label="item[otherData.label]"
        :value="item[otherData.value]"
      />
      <!-- 自定义回显部分 -->
      <template v-if="customEchoLabels.length">
        <el-option
          v-for="(label, index) in customEchoLabels"
          :key="`custom-${index}`"
          :label="label"
          :value="state[index]"
        >
        </el-option>
      </template>
    </el-select>
    <!-- 自定义标签展示区域 -->
    <!-- <div v-if="customEchoLabels?.length" class="custom-labels">
        {{ customEchoLabels?.join(", ") }}
      </div>
    </div> -->
    <div class="su-widget-date-section__btns">
      <el-button type="primary" link @click="handleConfirm">确定</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, computed, watch, nextTick } from 'vue';
const emits = defineEmits(['filter']);
const state = ref('');
const props = defineProps({
  otherData: {
    type: Object
  },
  activeData: {
    type: [Object, Array, String]
  }
});
const loading = ref(false);
const value = ref<any[]>([]);
const options = ref<any[]>([]);
const handleConfirm = (v) => {
  // debugger;
  try {
    // const list = props.otherData.options;
    const listInit = fullOptions.value?.filter((item) =>
      state.value?.includes(item[props.otherData.value])
    );
    console.log('-----', listInit, props.otherData.value);

    emits('filter', { initData: state.value, dealData: listInit });
  } catch (error) {
    console.log(error);
  }
};
const cb = (value) => {
  console.log('打印的数据------', value);
  options.value = value;
  return value;
};
const remoteMethod = (query: string) => {
  console.log(query, '里面的-------');
  props.otherData.querySearchAsync(query, cb);
};

// const showState = ref(""); //用于回显处理
onMounted(() => {
  props.otherData.querySearchAsync('', cb);
  console.log(
    '初始化111--------',
    props.activeData,
    props.activeData?.initData
  );
  state.value = props.activeData?.initData;
  // state.value = props.activeData?.dealData;
});

/* const showState = computed(() =>
  fullOptions.value
    ?.filter((option) => state.value?.includes(option[props.otherData.value]))
    ?.map((option) => option[props.otherData.label])
); */
const fullOptions = ref([]);
const customEchoLabels = ref('');

watch(
  () => state.value,
  (nVal) => {
    nextTick(() => {
      // if (nVal) {
      let customOptions = [];
      console.log('--state.value--', state.value, props.activeData);
      if (nVal) {
        customOptions =
          state.value
            ?.filter(
              (value) =>
                !options.value.some(
                  (option) => option[props.otherData.value] === value
                )
            )
            .map((customVal) => {
              const obj = props.activeData?.dealData.find(
                (val) => val[props.otherData.value] === customVal
              );
              return obj;
            }) || [];
        const data = customOptions
          ? [...options.value, ...customOptions]
          : [...options.value];

        fullOptions.value = data;
      } else {
        fullOptions.value = options.value;
      }

      customEchoLabels.value = customOptions.map(
        (val) => val[props.otherData.label]
      );

      console.log(
        '-------fullOptions----------',
        fullOptions,
        customOptions,
        customEchoLabels
      );

      console.log('----options-----', options);
      
    });
    // }
  },
  {
    deep: true,
    immediate: true
  }
);
</script>
<style scoped lang="scss">
.farther {
  display: flex;
  align-items: center;
}
.su-widget-date-section__btns {
  // margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}
.custom-labels {
  margin-top: 4px; /* 调整间距以适应您的UI需求 */
}
</style>

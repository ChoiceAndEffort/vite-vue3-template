<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-16 23:50:16
 * @LastEditors: lg
 * @LastEditTime: 2023-12-18 16:00:19
 * @FilePath: \hb-ui-plus\components\table\src\components\sing-check.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 单选 -->
  <ul>
    <li
      v-for="(item, index) in singeCheckedList"
      :key="index"
      :class="{ active: activeName === item.value }"
      @click="handleTabClick(item, index)"
    >
      {{ item?.label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { on } from '../../../utils';
const activeName: any = ref('');
const emits = defineEmits(['filter']);

const props = defineProps({
  data: {
    type: Array
  },
  activeData: {
    type: [Object, Array, String]
  }
});
activeName.value = props.activeData?.value;

const singeCheckedList = computed(() => {
  return [{ label: '全部', value: null }, ...props.data];
});

const handleTabClick = (item, e) => {
  activeName.value = item.value;
  let obj = (singeCheckedList.value as any).find(
    (item: any) => item.value === activeName.value
  );
  // console.log("-----11111--", activeName.value, item);
  setTimeout(() => {
    emits('filter', obj);
  }, 150);
};
onMounted(() => {
  console.log('初始化--------', props.activeData?.value);
});
</script>

<style scoped lang="scss">
ul {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  color: #242833;

  li {
    line-height: 22px;
    padding: 7px 12px;
    cursor: pointer;
    list-style: none;
  }

  .active {
    color: #1678ff;
  }
}
</style>

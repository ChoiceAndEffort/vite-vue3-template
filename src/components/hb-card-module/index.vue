<template>
  <!-- :style="{ height: height + 'px' }" -->
  <div class="card-module" :style="{ height: height + 'px' }">
    <div class="cm__header">
      <p class="cm__title">{{ props.title }}</p>
      <div class="cm__slot">
        <slot name="header"></slot>
      </div>
    </div>
    <!-- <el-scrollbar> -->
    <div class="cm__content">
      <slot></slot>
    </div>
    <!-- </el-scrollbar> -->
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
// const $hbPx2Rem: any = inject('$hbPx2Rem');
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '卡片、模块'
  },
  height: {
    type: Number,
    required: false,
    default: 200
  }
});
// const styleFilter = (styleNum: string | number) => {
//   // return typeof styleNum === 'number' ? $hbPx2Rem(styleNum + 'px') : styleNum;
// };
</script>

<style lang="scss" scoped>
$hb-layout-header-padding: 16px 24px;
$color: #172b4d;
.card-module {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: $hb-layout-header-padding;
  background-color: #fff;
  border-radius: 2px;

  .cm__header {
    display: flex;
    justify-content: space-between;
  }

  .cm__title {
    position: relative;
    width: 100%;
    min-height: 22px;
    margin-bottom: 24px;
    font-size: 16px;
    color: $color;
    box-sizing: border-box;
    padding-left: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      width: 4px;
      height: 15px;
      border-radius: 2px;
      color: var(--el-color-primary);
      background-color: var(--el-color-primary);
    }
  }

  .cm__content {
    flex: 1;
  }
}
</style>

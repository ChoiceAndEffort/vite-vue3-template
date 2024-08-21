<!--
 * @Author: lg
 * @Date: 2023-09-12 14:45:23
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 08:34:48
 * @Description: 页面布局
 * @FilePath: \vite-vue3-template\src\components\hb-major-page\index.vue
-->
<template>
  <div class="container__content">
    <div class="content__title" v-if="isShowHeader">
      <div class="content__title--left">
        <span class="content__title--left-name">
          {{ title || initTitle }}
        </span>
        <slot name="headerTitle"></slot>
      </div>
      <div class="content__title--right">
        <slot name="headerOperate"></slot>
      </div>
    </div>
    <div class="content__main">
      <el-container
        class="content__main--root"
        :class="{ 'content__main--detail': props.type === 'detail' }"
      >
        <template v-if="['list', 'detail'].includes(props.type)">
          <el-main><slot></slot></el-main>
        </template>
        <template v-else-if="props.type === 'list__two-col'">
          <transition name="el-fade-in-linear">
            <el-aside :width="$hbPx2Rem('366px')" v-if="!isStretch">
              <slot name="aside"></slot>
            </el-aside>
          </transition>
          <el-main>
            <span
              class="content__aside-icon"
              :class="{ 'content__aside-icon-open': isStretch }"
              @click="handleTrigger"
              v-if="props.isShowStretch"
            >
              <hb-svg-icon :name="isStretch ? 'expand' : 'retract'" />
            </span>
            <!-- <el-container v-if="props.type === 'detail-three'">
              <el-aside width="188px"><slot name="aside2"></slot></el-aside>
              <el-main><slot></slot></el-main>
            </el-container> -->
            <slot></slot>
          </el-main>
        </template>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, inject } from 'vue';
import { useRouteRouter } from '@/hooks/use-route-router';
const { router } = useRouteRouter();

// const $hbPx2Rem: any = inject('$hbPx2Rem');

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  isShowHeader: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'list' // detail(card)  list__two-col
  },
  isShowStretch: {
    type: Boolean,
    default: true
  }
});

const initTitle = computed(() => {
  return router.currentRoute.value.meta.title;
});

/* 伸缩 */
const isStretch = ref(false);

/* 侧边栏切换显隐-伸缩切换 */
const handleTrigger = () => {
  isStretch.value = !isStretch.value;
};

/* 主内容高度-用于计算 */
const mainPx = props.isShowHeader ? '120px' : '56px';
</script>
<style scoped lang="scss">
$hb-list-pages-background-color: #eff3fd;
$hb-border-color: #dfe1e6;
.container__content {
  display: flex;
  flex-direction: column;
}

.content__title {
  display: flex;
  align-items: center;
  padding: 22px 24px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
  justify-content: space-between;
  // background: #fff;
  height: 64px;
  position: relative;

  &--left {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: #172b4d;
    &-name {
      margin-right: 16px;
    }
  }
  .content__title--left {
    height: 64px;
  }
}

.content__main {
  // padding: 16px 24px;
  padding: 16px 16px;
  background: $hb-list-pages-background-color;
  height: calc(100vh - v-bind(mainPx));
  &--root {
    position: relative;
    background: #fff;
    height: 100%;
    // height: calc(100vh - v-bind(mainPx));
    // padding: 16px 24px;  //分项左边是10
    .el-aside {
      border-right: 1px solid $hb-border-color;
      overflow: hidden;
    }
  }
  .content__main--detail {
    background: #eff3fd;
  }

  .content__aside-icon {
    position: absolute;
    top: 16px;
    left: 350px;
    width: 16px;
    height: 24px;
    line-height: 24px;
    border-radius: 2px 0 0 2px;
    border: 1px solid #dfe1e6;
    border-right: 0;
    background: #fff;
    text-align: center;
    cursor: pointer;
    z-index: 10;
    i {
      font-size: 14px;
    }
  }
  .content__aside-icon-open {
    left: 0;
    border: 1px solid #dfe1e6;
    border-left: 0;
    border-radius: 0 2px 2px 0;
  }
}
</style>

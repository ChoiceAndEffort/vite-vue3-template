<!--
 * @Author: suchiva@126.com
 * @Date: 2023-01-28 11:52:05
 * @LastEditors: lg
 * @LastEditTime: 2024-03-25 15:03:35
 * @FilePath: \hb-ui-plus\components\table\src\main.vue
 * @Description: table组件
 *
 * Copyright (c) 2023 by suchiva@126.com, All Rights Reserved.
-->
<template>
  <!-- <div class="su-table-container"> -->
  <el-table
    :header-cell-style="{
      height: '34px',
      background: '#F2F3F5',
      color: '#1D2129',
      'border-width': '0px 1px 1px 0px',
      'border-style': 'solid',
      'border-color': '#DCDFE6',
      padding: '2px 0'
    }"
    :cell-style="{ padding: '2px 0' }"
    :ref="childRef"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :scrollbar-always-on="true"
    :highlight-current-row="highlightCurrentRow"
    v-bind="$attrs"
  >
    <el-table-column
      type="selection"
      width="38"
      v-if="checked"
      :resizable="false"
      :reserve-selection="reserveSelection"
      :selectable="selectable"
    >
      <template #default="scope" v-if="useSelectionSlot">
        <slot name="selectionSlot" :record="scope.row"></slot>
      </template>
    </el-table-column>

    <!-- 普通区域 -->
    <template v-for="(item, index) in tableOptions" :key="`s_${index}`">
      <el-table-column
        :resizable="false"
        :show-overflow-tooltip="item?.['show-overflow-tooltip'] ?? true"
        :formatter="formatter"
        v-click-outside[item.prop]="(e) => onClickOutside(e, item)"
        :class-name="getFilterCellClass(item)"
        v-bind="item"
      >
        <!-- 自定义表头 -->
        <template #header v-if="item?.sufilters || item?.headerSlot">
          <div
            :style="{
              marginRight:
                item.align === 'right' && item?.sufilters?.type ? '22px' : '0'
            }"
          >
            <slot v-if="item?.headerSlot" :name="item?.headerSlot"></slot>
            <span v-else>{{ item?.label }}</span>
          </div>
          <el-popover
            v-if="item?.sufilters"
            placement="top"
            :width="item?.sufilters?.popWidth || 260"
            trigger="click"
            :visible="visiblePop[item?.prop]"
            :hide-after="1000"
            :persistent="false"
          >
            <template #reference>
              <span
                @click.stop="visiblePop[item?.prop] = !visiblePop[item?.prop]"
                class="icon-filter"
                :class="{
                  'icon-filter--active':
                    visiblePop[item?.prop] || isHighlightFilter(item?.prop)
                }"
              >
                <!-- <el-icon-filter /> -->
                <i
                  class="iconfont"
                  :class="
                    isHighlightFilter(item?.prop)
                      ? 'icon-shaixuan1 filter--highlight'
                      : 'icon-Frame13'
                  "
                ></i>
              </span>
            </template>
            <div
              style="
                display: flex;
                align-items: space-around;
                justify-content: center;
              "
              class="filter-container"
              id="filter-container"
            >
              <component
                :is="widgetMap[item?.sufilters?.type]"
                @filter="(val: any, data: any) => { handleFilter(val, data, item); }"
                :data="item?.sufilters?.data"
                :other-data="item?.sufilters?.otherData"
                :active-data="item?.sufilters.activeData"
                :placeholder="
                  item?.sufilters.placeholder || '请输入' + item.label
                "
                :props="item?.sufilters?.props"
              />
            </div>
          </el-popover>
        </template>

        <template #default="scope" v-if="item.slot">
          <slot :name="item?.slot" :row="scope.row" :initData="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <!-- 操作区域 -->
    <el-table-column
      v-bind="actionOptions"
      :resizable="false"
      v-if="actionOptions"
    >
      <template #default="scope">
        <slot name="action" :record="scope.row" :initData="scope"></slot>
      </template>
    </el-table-column>
    <!-- 暂无数据 -->
    <!-- <template v-if="emptyShow" #empty>
        <el-empty :image="imageSrc" :image-size="200">
          <slot name="emptySlot"></slot>
        </el-empty>
      </template> -->
    <template #empty>
      <slot name="emptySlot" v-if="uSlots.emptySlot"></slot>
      <el-empty
        :image="imageSrc"
        :image-size="160"
        v-else-if="isShowEmptyImg"
      ></el-empty>
    </template>
  </el-table>
  <!-- </div> -->
</template>
<script setup lang="ts">
import {
  reactive,
  PropType,
  computed,
  ref,
  useSlots,
  onMounted,
  onUnmounted,
  nextTick
} from 'vue';
import { ITableOptions, INavigatorOptions } from './types';
import { ElTable } from 'element-plus';
import SInput from './components/input.vue';
// import SDate from "./components/date.vue";
// import SDateSection from "./components/date-section.vue";
import SSection from './components/section.vue';
// import STime from "./components/time.vue";
import SEnum from './components/enum.vue';
import SingCheck from './components/sing-check.vue';
import DateTimeGroup from './components/date-time-group.vue';
import Autocomplete from './components/autocomplete.vue';
import InputSearch from './components/input-search.vue';
import SelectMultiple from './components/select-multiple.vue';
import Cascader from './components/cascader.vue';
import { ClickOutside as vClickOutside } from 'element-plus';
const imageSrc = new URL('./img/nodata.webp', import.meta.url).href;

/* 处理居右文字和筛选图标重叠 */
const getFilterCellClass = computed(() => {
  return (item) => {
    return item?.sufilters && item.align === 'right' ? 'cell-filter-right' : '';
  };
});

let uSlots = useSlots();
const props = defineProps({
  // 是否有复选框
  checked: {
    type: Boolean,
    default: false
  },
  // ref
  childRef: {
    type: String,
    required: false,
    default: () => 'hbTableRootRef'
  },
  // 表格的配置
  options: {
    type: Array as PropType<ITableOptions[]>,
    required: true
  },
  //是否反选
  reserveSelection: {
    type: Boolean,
    required: false,
    default: () => false
  },
  selectable: {
    type: Function,
    required: false
  },
  // 加载文案
  elementLoadingText: {
    type: String
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String
  },
  // 加载svg
  elementLoadingSvg: {
    type: String
  },
  // 加载svg的配置
  elementLoadingSvgViewBox: {
    type: String
  },
  // 分页
  pagination: {
    type: Object as PropType<INavigatorOptions>
  },
  useSelectionSlot: {
    //是否使用自定义选择插槽
    type: Boolean,
    default: () => false
  },
  isShowEmptyImg: {
    // 空数据时是否展示图片
    type: Boolean,
    default: () => true
  },
  highlightCurrentRow: {
    //高亮行
    type: Boolean,
    default: () => true
  }
  // emptyShow: {
  //   type: Boolean,
  //   default: () => true
  // }
});

/**
 *数据格式化
 */
const formatter = (row: object, item: object) => {
  // if ((item as any)?.formatter) return (item as any).formatter(row, item);
  const content = row[(item as any).property];
  const bool = ['', undefined, null].includes(content);
  return bool ? '-' : content;
};

// 过滤操作选项之后的配置
const tableOptions = computed(() =>
  props.options.filter((item) => !item.action)
);

// 找出操作项的配置
const actionOptions = computed(() => props.options.find((item) => item.action));

// 分页配置
const paginationOptions = computed(() => props.pagination);

// 过滤方法
const handleFilter = (val: string, data: any, item: any) => {
  item.sufilters.activeData = val;
  item?.sufilters?.fn(val, data);
  visiblePop[item?.prop] = false;
  console.log('66666666------handleFilter', val, data, item);
};

/* 表格有筛选的需高亮 */
const isHighlightFilter = (prop) => {
  let bool = false;
  tableOptions.value?.forEach((val) => {
    if (val.prop === prop) {
      if (val?.sufilters?.type === 'enum') {
        val?.sufilters?.activeData?.length && (bool = true);
      } else if (
        val?.sufilters?.type === 'select-multiple' &&
        val?.sufilters?.activeData
      ) {
        console.log('val?.sufilters?.activeData', val?.sufilters?.activeData);
        let getData = val?.sufilters?.activeData;
        if (
          (getData?.initData && getData?.initData?.length !== 0) ||
          getData?.dealData?.length !== 0
        ) {
          bool = true;
        }
      } else if (val?.sufilters?.activeData) {
        // 下拉单选-选择全部去掉高亮
        if (
          val?.sufilters?.type === 'sing-check' &&
          val?.sufilters?.activeData?.value === null
        )
          return false;
        bool = true;
      }
    }
  });
  return bool;
};

const widgetMap = {
  default: SInput, // 默认模糊搜索
  enum: SEnum, // 枚举
  // date: SDate, // 日期
  // time: STime, // 时间
  // "date-section": SDateSection, // 日期选取
  'num-section': SSection, // 区间
  'sing-check': SingCheck, // 单选,
  dataGroup: DateTimeGroup, //日期组合
  autocomplete: Autocomplete,
  input: InputSearch,
  cascader: Cascader,
  'select-multiple': SelectMultiple
};

// visiblePop
const visiblePop = reactive<any>({});
const commonParentNode = (Node1, Node2) => {
  if (Node1?.contains(Node2)) {
    //如果有包含关系，就返回Node1
    return Node1;
  } else {
    //没有包含关系就自调用(算是一个小递归了)
    return commonParentNode(Node1?.parentNode, Node2);
  }
};
// 点击空白消失弹窗
const onClickOutside = (e, item) => {
  // console.log("e-----", e.target);
  // console.log("item-----", item);
  // console.log("0000----", root, e.target.parentNode);
  const root = document.getElementById('filter-container');
  if (root) {
    const isP = commonParentNode(root, e.target.parentNode); // el-copper-container filter-container
    const isPId = isP.id;
    console.log(isPId, '---------------------');
    if (
      isPId.indexOf('-popper-container') === -1 &&
      isPId.indexOf('filter-container') === -1
    ) {
      visiblePop[item?.prop] = false;
    }
  }
};
/**
 * @description: 监听滚动后,关闭筛选下拉框
 * @return {*}
 */
const tableScroll = () => {
  if (Object.entries(visiblePop)?.length) {
    // console.log('监听滚动条进来了', visiblePop);
    Object.entries(visiblePop).forEach(([key, value]) => {
      visiblePop[key] = false;
    });
  }
};
// let changeprefix = process.argv?.length >= 2 ? process.argv[2] : 'el';
// let str = `.${changeprefix}-table .${changeprefix}-table__body-wrapper`;
// console.log(str, '------------');
onMounted(() => {
  if (document.querySelector('.el-table .el-table__body-wrapper')) {
    document
      .querySelector('.el-table .el-table__body-wrapper')
      .addEventListener('scroll', tableScroll, true);
  } else if (document.querySelector('.wm-table .wm-table__body-wrapper')) {
    document
      .querySelector('.wm-table .wm-table__body-wrapper')
      .addEventListener('scroll', tableScroll, true);
  }
  // window.addEventListener('scroll', tableScroll, true);
});
onUnmounted(() => {
  if (document.querySelector('.el-table .el-table__body-wrapper')) {
    document
      .querySelector('.el-table .el-table__body-wrapper')
      .removeEventListener('scroll', tableScroll, true);
  } else if (document.querySelector('.wm-table .wm-table__body-wrapper')) {
    document
      .querySelector('.wm-table .wm-table__body-wrapper')
      .removeEventListener('scroll', tableScroll, true);
  }
  // window.removeEventListener('scroll', tableScroll, true);
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

:deep(.el-table .el-table__cell) {
  padding: 0;
}

:deep(.el-table .el-popper) {
  max-width: 450px !important;
}

// :deep(.el-table td) {
//   border-color: #dfe1e6;
// }
// :deep(.el-table th) {
//   background: #ebecf0 !important;
//   color: #5e6c84;
//   border-color: #dfe1e6;
//   font-size: 14px;
//   font-weight: 500;
// }

// :deep(.cell) {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-end;
// }
// :deep(.cell .el-tooltip__trigger) {
//   float: right;
//   margin-top: 2px;
//   margin-right: 2px;
//   color: #333;
//   font-size: 12px;
// }
:deep(.caret-wrapper) {
  position: absolute;
  right: 40px;
  top: 12px;

  .sort-caret {
    border-width: 5px;
  }

  .descending {
    border-top-color: #4e5969;
  }

  .ascending {
    border-bottom-color: #4e5969;
  }
}

.icon-filter {
  position: absolute;
  right: 16px;
  top: 6px;
  i {
    font-weight: normal;
  }
  i.filter--highlight {
    font-size: 12px;
    vertical-align: top;
  }
}

.icon-filter--active {
  color: #1678ff !important;
}

:deep(.el-table__row) {
  height: 32px;
}
:deep(.el-loading-mask) {
  top: 38px;
}
:deep(.el-table__body) tr.current-row > td.el-table__cell {
  background-color: #f5f7fa !important;
  color: #1e2f41 !important;
}
// .cell-span {
//   display: inline-block;
//   width: 100%;
//   height: 100%;
// }

// :deep(.el-table thead) {
//   height: 40px;
// }
// .define-header {
//   display: flex;
//   justify-content: space-between;
// }
</style>
<style lang="scss">
.el-table {
  border-radius: 0;
  .cell {
    padding-right: 0 !important; // 设置table间距
    .el-input {
      padding-right: 12px;
    }
  }
  th.cell-filter-right {
    padding-right: 20px;
  }
  td.el-table__cell > div {
    height: 26px;
    .el-button {
      height: 26px;
    }
  }
}

/* 设置table居右间距 */
.el-table .is-right {
  .cell {
    padding-right: 12px !important;
    .el-input {
      padding-right: 0;
    }
  }
}
</style>

<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-15 18:55:48
 * @LastEditors: lg
 * @LastEditTime: 2023-07-18 16:31:19
 * @FilePath: /su-studio/work/packages/components/table/src/components/input.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="su-widget-input-container">
    <!-- {{ activeData }}--{{ input }} -->
    <div class="su-widget-input">
      <!-- <el-icon-search /> -->
      <el-input
        type="text"
        v-model="input"
        :placeholder="placeholder"
        :prefix-icon="Search"
        clearable
      />
      <!-- <el-icon-circleclosefilled v-if="input.length" @click="input = ''" /> -->
    </div>
    <el-scrollbar height="250">
      <ul class="su-widget-input-list">
        <el-tooltip
          v-for="item in data"
          :key="item.id"
          class="box-item"
          effect="dark"
          :content="item?.text"
          :show-after="1000"
          placement="bottom"
        >
          <li
            v-html="
              `<i><el-icon><Document/></el-icon></el-cion></i>` +
              brightenKeyword(input, item.text, '#1678FF', 'select')
            "
            @click="handleFilter(item.text, item.id)"
            :class="choiceCls === item.id ? 'choiceCls' : ''"
          ></li>
        </el-tooltip>
      </ul>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from "vue";
import { brightenKeyword } from "../use-brightenKeyword";
import { Search } from "@element-plus/icons-vue";
const props = defineProps({
  data: {
    type: Array,
  },
  activeData: {
    type: [Object, Array, String],
  },
  placeholder: {
    type: String,
    default: "",
  }
});
const input = ref("");
const { activeData } = toRefs(props);
input.value = activeData.value || "";

const emits = defineEmits(["filter"]);
const handleFilter = (val: string, id: string | number) => {
  emits("filter", val);
  choiceCls.value = id;
};

const choiceCls = ref();
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

.su-widget-input-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  .su-widget-input {
    // width: 100%;
    // height: 30px;
    // line-height: 30px;
    // border-bottom: 1px solid #ebecf0;
    // overflow: hidden;
    // display: flex;
    // vertical-align: middle;
    // display: flex;
    // justify-content: space-around;
    // align-items: center;

    // input {
    //   width: 180px;
    //   height: 100%;
    //   border: 0;
    //   border: none;
    //   -webkit-appearance: none;
    //   /*去除阴影边框*/
    //   outline: none;
    //   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    //   /*点击高亮的颜色*/
    //   margin-right: 10px;
    // }

    // svg {
    //   width: 14px;
    //   height: 14px;
    //   // margin-top: 8px;
    //   // margin-right: 10px;
    //   text-align: center;
    //   flex: 1;

    //   :last-child {
    //     text-align: right;
    //   }
    // }
  }

  .su-widget-input-list {
    width: 100%;
    height: 120px;
    margin-top: 2px;
    // overflow-x: hidden;
    // overflow-y: auto;
    list-style: none;
    font-size: 10px;

    .el-tooltip__popper {
      width: 260px;
      overflow: hidden;
      white-space: normal;
    }

    li {
      width: 100%;
      height: 25px;
      line-height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 1px 4px;

      &:hover {
        background-color: #f4f5f7;
        border-radius: 3px;
      }

      &.choiceCls {
        color: #1678ff;

        i {
          float: right;
          font-size: 15px;
          width: 20px;

          &::after {
            content: "✓";
          }
        }
      }
    }
  }
}
</style>

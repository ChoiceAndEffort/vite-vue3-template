<template>
  <div class="content-layout">
    <div
      v-for="(item, index) in props.contentConfig"
      :key="index"
      class="content-view"
    >
      <div class="content">
        <hb-card-module :title="item.title" :height="item.height">
          <slot :name="`component-${item.slot}`"></slot>
        </hb-card-module>
      </div>
      <div class="code">
        <div class="code-show">
          <el-button type="text" @click="fuShow(index)">{{
            `${showArr[index] === true ? '隐藏' : '查看'}源代码`
          }}</el-button>
        </div>
        <Transition :duration="550">
          <div v-if="showArr[index]" class="code-view">
            <v-md-editor :model-value="item.code" mode="preview"></v-md-editor>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const props: any = defineProps({
  contentConfig: {
    type: Array,
    required: true,
    default: () => []
  }
});
const showArr = ref([]);
const numAdd = () => {
  const length = props.contentConfig.length;
  if (length !== 0) {
    props.contentConfig.forEach(() => {
      showArr.value.push(false);
    });
  }
};
numAdd();
const fuShow = (index: number) => {
  showArr.value[index] = !showArr.value[index];
};
</script>
<style lang="scss" scoped>
.content-layout {
  .content-view {
    h4 {
      padding: 16px 0;
    }
    .text {
      margin-bottom: 16px;
    }
    .content {
      border-bottom: 1px solid #ebebeb;
      border: 1px solid #ebebeb;
      padding: 10px;
      border-radius: 3px;
      transition: 0.2s;
      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
          2px 4px rgba(232, 237, 250, 0.5);
      }
    }
    .tip {
      padding: 10px;
      background: #f4f5f7;
      border-radius: 3px;
      margin-bottom: 12px;
    }
    .code {
      border-top: 1px solid #ebebeb;
      .code-show {
        padding: 0 10px;
        text-align: right;
      }
      .code-view {
        min-height: 40px;
        background-color: #f4f5f7;
        /* padding: 16px; */
      }
    }
  }
}
::v-deep .github-markdown-body {
  padding: 0;
}
::v-deep .github-markdown-body .pre {
  margin-bottom: 0;
}
::v-deep .el-row {
  padding: 10px 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

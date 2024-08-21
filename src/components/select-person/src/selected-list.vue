<!--
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-03-04 17:27:49
 * @LastEditors: qf
 * @LastEditTime: 2024-01-26 13:16:55
 * @FilePath: \hb-ui-plus\components\select-person\src\selected-list.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="su-selected-list">
    <div v-if="selectedAry?.length === 0" class="no-data">暂无数据</div>
    <ul class="su-selected-list__content">
      <li v-for="(item, index) in selectedAry" :key="index">
        <div class="selected-item__content">
          <span class="selected-item__icon"><img :src="imgIcon" /></span>
          <div class="selected-item__text">
            <span>{{ item.name }}</span>
            <span class="selected-item__text--mobile">{{ item?.mobile }}</span>
          </div>
        </div>
        <span class="action" @click.stop="handleDel(item)"
          ><el-icon><CloseBold /></el-icon
        ></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue';
import { useUsersStore } from './store/user';
import { ISelectItem } from './types';
import { CloseBold } from '@element-plus/icons-vue';
import imgIcon from './icon/icon-user.webp';
const store = useUsersStore();
const selectedAry = ref([]);

store.$subscribe((_, __) => {
  const selectedIdAry = store.selected.map((v) => v);
  let __Ary = [];
  store.list.map((v: ISelectItem, __: number) => {
    if (selectedIdAry.indexOf(v.id) > -1) {
      __Ary.push(v);
    }
  });
  selectedAry.value = [...__Ary];
});

defineProps({
  data: Array as PropType<ISelectItem[]>
});

// 删除
const handleDel = (item: any) => {
  const id =
    item.staffSubscribeThaliId ||
    item.accountEnterpriseId ||
    item.positionId ||
    item.departmentId;
  store.delSelected([id]);
};
</script>

<style scoped lang="scss">
.su-selected-list {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.no-data {
  flex: 1;
  line-height: 150px;
  text-align: center;
  vertical-align: middle;
  color: #aaa;
}

.su-selected-list__content {
  height: 100%;
  li {
    /* height: 38px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 5px;
    padding: 0 24px;
    &:hover {
      background-color: #f5f7fa;
    }
    .selected-item__content {
      display: flex;
      align-items: center;
    }
    .selected-item__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: #1678ff;
      border-radius: 50%;
      margin-right: 8px;
    }
    .selected-item__text {
      display: flex;
      flex-direction: column;
      height: 38px;
      justify-content: space-between;
      color: #172b4d;
    }
    .selected-item__text--mobile {
      color: #7a869a;
      font-size: 12px;
    }
    .action {
      cursor: pointer;
      font-size: 14px;
      color: #172b4d;
    }
  }
}
</style>

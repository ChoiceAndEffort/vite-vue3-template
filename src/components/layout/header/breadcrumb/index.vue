<template>
  <div class="">
    <el-breadcrumb :separator-icon="ArrowRight">
      <!-- {{ getNewBreadcrumbList }} -->
      <el-breadcrumb-item
        v-for="(item, index) in getNewBreadcrumbList"
        :key="item.path"
        :to="item.components ? item.fullPath || item.path : ''"
        :class="{ 'breadcrumb-active': index === 0 }"
        >{{ item?.meta?.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { computed, watch } from 'vue';
import useUserAuthStore from '@/store/user-auth/index';
import { useRouteRouter } from '@/hooks/use-route-router';
const userAuthStore = useUserAuthStore();

const { routerReplaceByPath, router, route } = useRouteRouter();

/**
 * @description:拿到store中存储的面包屑列表处理后展示到页面中
 * @param {*} computed
 * @return {*}
 */
const getNewBreadcrumbList = computed(() => {
  const dataArray = userAuthStore.getBreadcrumbList
    .map((item) => {
      if (item.path) {
        return item;
      }
      return null;
    })
    .filter((item) => item);
  //去重
  return Array.from(new Set(dataArray.map((obj) => obj.path))).map((path) => {
    return dataArray.find((obj) => obj.path === path);
  });
});

/**
 * @description: 面包屑列表
 * @param {*} computed
 * @return {*}
 */
const breadcrumbList = computed(() => {
  const routerAllArr = router.currentRoute.value.matched;

  const showArr = routerAllArr
    .filter((item) => item.meta?.title)
    .filter((item) => !item.children?.length) //过滤有子级的,避免层级展示错误
    .map((el) => el.path.split('/'))
    .flat(Infinity)
    .filter((a) => a);

  const allRoutesFlat = router.getRoutes();
  const breadList = [...new Set(showArr)].map((item) => {
    let obj = allRoutesFlat.find((el) => el.name === item);
    return {
      ...obj
    };
  });

  return breadList;
});

/**
 * @description:监听路由,设置面包屑列表的fullPath,用于面包屑点击跳转传参
 * @return {*}
 */
watch(
  () => route,
  (to) => {
    const { fullPath, matched } = to;
    matched[matched.length - 1].fullPath = fullPath;
    // console.log(matched, 'matched--------------');

    if (breadcrumbList.value[breadcrumbList.value.length - 1]?.fullPath) {
      breadcrumbList.value[breadcrumbList.value.length - 1].fullPath = fullPath;
    }

    //过滤掉有重定向的
    const filterHaveRedirectRouter = breadcrumbList.value.filter(
      (item) => !item.redirect
    );

    filterHaveRedirectRouter.forEach((item) => {
      let findObj = userAuthStore.getBreadcrumbList.find(
        (el) => el.path === item.path
      );
      if (findObj) {
        item.fullPath = findObj.fullPath;
      }
    });
    //存储面包屑列表
    userAuthStore.setBreadcrumbList(filterHaveRedirectRouter);
  },
  {
    deep: true,
    immediate: true
  }
);
</script>
<style scoped lang="scss">
:deep(.el-breadcrumb__inner) {
  font-size: 14px;
  color: #172b4d !important;
  font-weight: 400;
}
.breadcrumb-active {
  :deep(.el-breadcrumb__inner) {
    color: #6b778c !important;
  }
}
</style>

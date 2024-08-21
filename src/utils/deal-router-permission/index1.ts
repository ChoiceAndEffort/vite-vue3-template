/*
 * @Author: lg
 * @Date: 2024-07-16 09:01:54
 * @LastEditors: lg
 * @LastEditTime: 2024-08-02 16:09:03
 * @Description:
 * @FilePath: \vite-vue3-template\src\utils\deal-router-permission\index.ts
 */

//获取后端返回的路由列表  传入返回的路由列表
//将路由字段转换成前端字段
//路由调整为二级,用于keep-alive
//根据页面情况确定路由是否提升

import { cloneDeep } from 'lodash-es';

// 加载所有页面模块
const modules = import.meta.glob('/src/views/**/*.vue');

/**
 * @description: 遍历修改用到的方法2
 * @description: 将后端字段映射到前端需要的字段
 * @param {*} item
 * @return {*}
 */
export const transForBackKeyWord = (
  item: any,
  btnChildren: any[] = [],
  addPrefix: string = ''
) => {
  const otherRemark = item.otherRemark && JSON.parse(item.otherRemark);

  //powerType :M -菜单, P -页面,B-按钮
  const path = addPrefix
    ? `${addPrefix}/${item.terminalRoute}`
    : `${item.terminalRoute}`;
  return {
    component: otherRemark?.componentMapping,
    path: path,
    name:
      item?.terminalRoute.slice(0, 1) === '/'
        ? item?.terminalRoute.slice(1)
        : item?.terminalRoute,
    meta: {
      powerId: item.powerId,
      icon: item.powerIcon,
      iconColor: item.iconColor,
      powerIcon: item.powerIcon,
      title: item.powerName,
      isAside: item.powerType === 'M',
      levelIncrease: otherRemark?.levelIncrease || false,
      btnPermissions: btnChildren,
      isQuickEntry: otherRemark?.isQuickEntry || false,
      entryTitle: otherRemark?.entryTitle,
      pageType: otherRemark?.pageType || ''
    },
    redirect: (otherRemark?.redirect && `${str}${otherRemark?.redirect}`) || ''
  };
};

/**
 * @description:遍历修改用到的方法1
 * @description:同时提取按钮权限
 * @param {any} org
 * @return {*}
 */
const mapTree = (org: any, addPrefix = '') => {
  let btnChildren,
    notBtnChildren = [];
  if (Array.isArray(org.children) && org.children?.length > 0) {
    btnChildren = org.children
      .filter((item: any) => item.powerType === 'B')
      .map((el: any) => el.terminalRoute);
    notBtnChildren = org.children.filter((item) => item.powerType !== 'B');
  }

  const haveChildren = notBtnChildren?.length > 0;
  const dealOrg = transForBackKeyWord(org, btnChildren, addPrefix);
  return {
    ...org,
    ...dealOrg,
    children: haveChildren
      ? notBtnChildren.map((r) => mapTree(r, dealOrg.path))
      : []
  };
};

/**
 * @description: 遍历修改后端字段的入口
 * @description: 用到的对应方法=遍历修改用到的方法1+遍历修改用到的方法2
 * @description: 便利修改树形数组字段,将后端字段映射到前端需要的字段
 * @param {*} tree
 * @return {*}
 */
export const traverseAndModify = (tree: any) => {
  return tree.map((org) => mapTree(org));
};

/**
 * @description: 对菜单字段进行排序
 * @description: 只排一级和二级就可以了,多的层级用不上
 * @param {*} tree
 * @return {*}
 */
export const sortMenuList = (tree: any) => {
  const list = tree
    ?.map((item) => {
      return {
        ...item,
        children: item.children?.sort((a: any, b: any) => a.sortNo - b.sortNo)
      };
    })
    ?.sort((a: any, b: any) => a.sortNo - b.sortNo);

  return list;
};

/**
 * @description:递归将多层级的路由转换为两层级,用于路由缓存
 * @return {*}
 */
export const transformRouterTwoLevel = (list: Array<any>) => {
  let result: Array<any> = [];
  for (const item of list) {
    const copyItem = cloneDeep({
      ...item
    });
    delete copyItem['children'];
    result.push(copyItem); // 只取当前节点的信息，不包括 children
    if (item.children === null || item.children === undefined) {
      continue;
    }
    const getChildren = transformRouterTwoLevel(item.children, item.path);
    result = result.concat(getChildren);
  }
  return result;
};

/**
 * @description:将多层级的路由转换为两层级,用于路由缓存
 * @return {*}
 */
export const transformRouterTwoLevelEnter = (tree: any[]) => {
  const list = tree?.map((item) => {
    const copyItem = cloneDeep(item);
    delete copyItem['children'];
    return {
      ...copyItem,
      children: transformRouterTwoLevel(item?.children || [])
    };
  });
  return list;
};

/**
 * @description: 将标识需要提高的路由层级进行提高
 * @description: meta中标识为levelIncrease:true的
 * @return {*}
 */
export const routerLevelIncrease = (tree: any[]) => {
  // console.log('===========', tree);
  let list = [];
  list = tree
    ?.map((item) => {
      //路由层级提升
      const levelIncreaseList = item?.children?.filter(
        (el) => el.meta.levelIncrease
      );

      //路由层级不提升
      const levelNotIncreaseList = item?.children?.filter(
        (el) => !el.meta.levelIncrease
      );

      const copyItem = cloneDeep(item);

      delete copyItem['children'];
      return [
        {
          ...copyItem,
          children: [...levelNotIncreaseList]
        },
        ...levelIncreaseList
      ];
    })
    .flat(Infinity);
  return list;
};
/**
 * @description: 安装宝,涂装宝,制造宝增加前缀
 * @return {*}
 */

const addSaasPrefix = (tree) => {
  const str = getDyUrl();
  return tree.map((item) => {
    return {
      ...item,
      path: str ? `/${str}${item.path}` : item.path,
      children: item?.children?.map((el) => {
        return {
          ...el,
          path: str ? `/${str}${el.path}` : el.path
        };
      })
    };
  });
};

/**
 * @description: 整合后的方法
 * @param {any} tree,//后台返回的树形路由
 * @param {*} cb,//用于存储侧边的菜单
 * @return {*}
 */
export const permissionGroup = (tree: any[], cb: any = null) => {
  let list = [];
  //转换后端的字段
  list = traverseAndModify(tree);
  // console.log('list-----11---------', list);
  //菜单排序
  list = sortMenuList(list);
  // console.log('list-0000000000', list);
  //两层级的路由转换
  list = transformRouterTwoLevelEnter(list);
  // console.log('list-----2222222---------', list);
  //路由层级提升
  list = routerLevelIncrease(list);
  //这里用于存储侧边栏菜单列表
  // cb(list);
  console.log('list-----3333---------', list);

  //增加saas项目的前缀
  list = addSaasPrefix(list);
  // console.log('list-----4444---------', list);

  return list;
};

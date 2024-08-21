/*
 * @Author: lg
 * @Date: 2024-07-08 11:05:31
 * @LastEditors: lg
 * @LastEditTime: 2024-07-30 10:39:51
 * @Description:
 * @FilePath: \vite-vue3-template\src\hooks\use-select-department-person\index.ts
 */
import { ref, reactive, provide, watch } from 'vue';
import { getOrganizationApi } from '@/api/common/index';
const mapTree = (org: any) => {
  const haveChildren = Array.isArray(org.children) && org.children.length > 0;
  return {
    ...org,
    disabled: true,
    children: haveChildren ? org.children.map((r) => mapTree(r)) : []
  };
};

const traverseAndModify = (tree: any) => {
  return tree?.map((org) => mapTree(org));
};

export function useSelectDepartmentPerson(sendData: any = {}) {
  const initOptions = ref<any>({
    // isShow: true,
    selectType: sendData.selectType || 3, //1-仅选人,2- 选择部门,3-选择部门和人; (默认是3选择部门和人)
    limitSelectNum: sendData.limitSelectNum || '', //限制选择的数量,''的时候可以选择无限大
    limitSelectNoticeTitle: sendData.limitSelectNoticeTitle, //限制选择的提示title
    title: sendData.title || '添加成员', //标题
    selectPersonLoading: false, //查询的时候loading
    treeList: [], //列表
    initUserList: [], //用户列表
    initLastCheckedListIds: sendData.initLastCheckedListIds || [], //初始化用户回显上次已选ids
    initLastCheckedList: [], //初始化用户回显上次已选数据对象
    configKey: {
      nameKey: 'employeeName',
      mobileKey: 'phone',
      userIdKey: 'employeeId', //用户列表唯一标识id
      departmentKey: {
        departmentIdKey: 'departmentId',
        children: 'children',
        label: 'departmentName',
        departmentIdListKey: 'departmentIdList',
        userTotalKey: 'employeeCount'
      }
    },
    onOutSubmit: sendData.onOutSubmit,
    onOutCancel: sendData.onOutCancel
  });

  const treeListSearch = ref<any>({ tenantId: 'sys' });

  // 树形数组转扁平数组
  const transferTreeToArray = (tree: any):Array<any> => {
    let res = [];
    for (const item of tree) {
      res.push(item);
      if (item?.children && item?.children?.length) {
        res = res.concat(transferTreeToArray(item.children));
      }
    }
    return res;
  };

  /**
   * @description: 获取列表数据
   * @return {*}
   */
  const getTreeList = async () => {
    const res = await getOrganizationApi(treeListSearch.value);
    // console.log('res----------', res);
    const transEmployeeList = res.data.employeeList?.map((item) => {
      return {
        ...item,

        [initOptions.value.configKey.departmentKey.departmentIdKey]:
          item[initOptions.value.configKey.userIdKey],
        [initOptions.value.configKey.departmentKey.label]:
          item[initOptions.value.configKey.nameKey],
        hierarchyLeave: 1,
        children: []
      };
    });
    let treeList: any[] = [];
    // console.log('transEmployeeList-----', transEmployeeList);
    if (initOptions.value.selectType === 1) {
      //仅选人-这里要将部门置为禁用状态
      let departmentList = res.data.departmentList;
      departmentList = traverseAndModify(departmentList);
      // console.log(departmentList, 'departmentList--------------');
      treeList = [...departmentList, ...transEmployeeList];
      initOptions.value.initUserList = transEmployeeList;
    } else if (initOptions.value.selectType === 2) {
      //仅选部门
      treeList = [...res.data.departmentList];
      initOptions.value.initUserList = [];
    } else if (initOptions.value.selectType === 3) {
      //选择部门和人
      treeList = [...res.data.departmentList, ...transEmployeeList];
      initOptions.value.initUserList = transEmployeeList;
    }
    initOptions.value.treeList = treeList;
    initOptions.value.initLastCheckedList = transferTreeToArray(
      treeList
    ).filter((item) =>
      initOptions.value.initLastCheckedListIds.includes(
        item[initOptions.value.configKey.departmentKey.departmentIdKey]
      )
    );

    console.log(
      treeList,
      'treeList-----------------------',
      initOptions.value.initLastCheckedList
    );
  };

  /**
   * @description: 打开选人弹框
   * @return {*}
   */
  const handleOpenDialog = () => {
    sendData.selectDepartmentPersonRef.value?.OpenDialog();
    getTreeList();
  };
  /**
   * @description: 搜索人员
   * @return {*}
   */
  const handleKeywordsSearch = (keywords: string) => {
    treeListSearch.value.keywords = keywords;
    getTreeList();
  };

  provide('keywords-search', handleKeywordsSearch);
  return {
    initOptions,
    handleOpenDialog
  };
}

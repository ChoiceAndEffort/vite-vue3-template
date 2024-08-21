/*
 * @Author: lg
 * @Date: 2024-07-01 15:19:46
 * @LastEditors: lg
 * @LastEditTime: 2024-07-03 15:04:41
 * @Description:
 * @FilePath: \vite-vue3-template\src\hooks\use-wm-select-person\index.ts
 */
import { ref, reactive, provide, watch } from 'vue';
import { getUserListApi, getDepartmentList } from '@/api/common/index';

export function useVmSelectPerson(sendData: any = {}) {
  const tabIndex = ref('fourth');
  //用户列表的查询参数
  const userListSearchData = ref({
    page: 0,
    size: 2000,
    departmentId: '',
    keywords: ''
  });
  //部门列表的查询参数
  const departmentListSearchData = ref({});

  const onOutSubmit = (v: any) => {
    console.log('选择的人员', v);
  };

  const onOutCancel = () => {
    console.log('取消');
  };
  const initOptions = ref({
    title: '选择人员', //标题
    selectPersonLoading: false, //查询的时候loading
    initDepartmentList: [], //部门列表
    initUserList: [], //用户列表
    initUserLastCheckedList: [
      // '2211109TPFP5W094'
    ], //用户回显数据
    tabPanesList: [
      {
        label: '按部门',
        name: 'second'
      },
      {
        label: '按用户',
        name: 'fourth'
      }
    ],
    companyInfo: {
      name: ' 海波重型工程科技股份有限公司'
    },
    configKey: {
      nameKey: 'employeeName',
      mobileKey: 'phone',
      userIdKey: 'employeeId', //用户列表唯一标识id
      departmentKey: {
        departmentIdKey: 'departmentId',
        children: 'children',
        label: 'departmentName'
      }
    },
    onOutSubmit,
    onOutCancel
  });

  /**
   * @description: 公共获取数据
   * @param {string} keywords
   * @return {*}
   */
  const publicGetList = (keywords: string = '') => {
    if (tabIndex.value === 'second') {
      if (tabIndex.value === 'second') {
        getDepartment();
      } else if (tabIndex.value === 'fourth') {
        getUserList();
      }
    } else if (tabIndex.value === 'fourth') {
      userListSearchData.value.keywords = keywords;
      getUserList();
    }
  };
  /**
   * @description: 获取用户列表数据
   * @return {*}
   */
  const getUserList = async (
    sendData: any = {},
    cb: any = () => {
      console.log('cb', cb);
    }
  ) => {
    try {
      initOptions.value.selectPersonLoading = true;
      const res: any = await getUserListApi({
        ...userListSearchData.value,
        departmentId: sendData.departmentId
      });
      initOptions.value.initUserList = res.data.data;
      //将参数cb出去给到组件内选择部门后使用
      cb(initOptions.value.initUserList);
      // console.log(initOptions.value, 'initOptions.value----------');
    } catch (error) {
      console.log(error);
    } finally {
      initOptions.value.selectPersonLoading = false;
    }
  };
  /**
   * @description: 获取部门列表
   * @return {*}
   */
  const getDepartment = async () => {
    try {
      initOptions.value.selectPersonLoading = true;
      const res: any = await getDepartmentList(departmentListSearchData.value);
      initOptions.value.initDepartmentList = res.data;
    } catch (error) {
      console.log(error);
    } finally {
      initOptions.value.selectPersonLoading = false;
    }
  };
  /**
   * @description: tab切换调用查询接口
   * @param {any} value
   * @return {*}
   */
  const handleTabChangeOut = (value: any) => {
    console.log(value.paneName, '--------value');
    tabIndex.value = value.paneName;
    initOptions.value.initUserList = [];
    initOptions.value.initDepartmentList = [];
    publicGetList();
  };
  /**
   * @description: 打开选人弹框
   * @return {*}
   */
  const handleOpenDialog = () => {
    sendData.vmSelectPersonRef.value?.OpenDialog();
    publicGetList();
  };

  /**
   * @description: 搜索人员
   * @return {*}
   */
  const handleKeywordsSearch = (
    keywords: string,
    type: string,
    departmentId: string
  ) => {
    publicGetList(keywords);
  };

  provide('tab-change', handleTabChangeOut);
  provide('keywordsSearch', handleKeywordsSearch);
  provide('get-child-data', getUserList);
  return {
    initOptions,
    handleOpenDialog
  };
}

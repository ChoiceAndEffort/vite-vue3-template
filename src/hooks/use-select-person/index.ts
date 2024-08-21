import { ref, reactive, provide, watch } from 'vue';
import { getUserListApi, getDepartmentList } from '@/api/common/index';

// import useUserStore from '@/store/accounts/index';
// const userStore = useUserStore();

export function useSelectPerson(sendData: any) {
  const selectPersonLoading = ref(false);
  const tabActiveTab = ref(sendData.sendTabActiveTab); //first-最近使用;second-按部门;third-按岗位;fourth-按用户
  // const companyName = userStore.roleInfo?.company?.companyName;
  const isFirstOpenDialog = ref(false); //初始开启弹框

  //查询数据
  const userSearchData: any = reactive({
    page: 0,
    size: sendData.size ?? 10,
    keywords: '',
    trueName: '',
    mobile: ''
  });
  //用户数据
  const userResData = ref<any>(undefined);

  // 选人组件配置项
  const selectPersonOptions = reactive({
    title: sendData.dialogTitle,
    activeTab: tabActiveTab.value,
    maxCheckMore: sendData.maxCheckMore,
    autoCompleteValueKey: sendData.autoCompleteValueKey,
    search: async (keywords: string) => {
      console.log('查询------------', keywords);
    },
    department: sendData.department,
    position: sendData.position,
    user: [],
    userCheckedList: sendData.userCheckedList //人员上次勾选的数据,用于回显
    // department: {
    //   data: [],
    //   childData: [],
    //   onlyChoicePerson: false, //仅仅选人true-仅选人,false-可选部门
    //   onlyChoiceDepartment: true //仅选部门 true-仅选部门,false-可选人
    // },
    // position: {
    //   data: [],
    //   childData: [],
    //   onlyChoicePerson: false, //仅仅选人
    //   onlyChoicePosition: true //仅选部门 true-仅选部门,false-可选人
    // },
    // user: []
  });

  /**
   * @description: 获取用户列表数据
   * @return {*}
   */
  const getUserList = async (senData: any = '', isAddLeftList = true) => {
    try {
      selectPersonLoading.value = true;
      // const res = await getCustomerListApi(userSearchData);
      const res: any = await getUserListApi(
        senData || {
          ...userSearchData
          // enterpriseId: JSON.parse(window.localStorage.getItem('siip-admin'))
          //   ?.enterpriseInfo?.enterpriseId
        }
      );
      // const dealData = res.data.data?.map((item) => {
      //   return {
      //     nickname: item.trueName,
      //     ...item
      //   };
      // });
      userResData.value = res.data;
      // selectPersonOptions.user.push(...res.data.data);
      if (isAddLeftList) {
        // selectPersonOptions.user.push(...res.data.data);
        // selectPersonOptions.user.push(...res.data);
        selectPersonOptions.user = res.data;
      }

      return res.data;
    } catch (error) {
      console.log(error);
    } finally {
      selectPersonLoading.value = false;
    }
  };

  /**
   * @description: 获取部门列表
   * @return {*}
   */
  const getDepartment = async () => {
    try {
      selectPersonLoading.value = true;
      const res = await getDepartmentList({});
      // console.log(res, '部门列表数据-----------');
      // selectPersonOptions.department.data.push(...res.data);
      selectPersonOptions.department.data = res.data;
    } catch (error) {
      console.log(error);
    } finally {
      selectPersonLoading.value = false;
    }
  };

  /**
   * @description: 获取岗位列表
   * @return {*}
   */
  const getPosition = async () => {
    try {
      // selectPersonLoading.value = true;
      // const res = await getPositionList({ deleted: 0 });
      // // console.log(res, '岗位列表数据-----------');
      // selectPersonOptions.position.data.push(...res.data);
    } catch (error) {
      console.log(error);
    } finally {
      selectPersonLoading.value = false;
    }
  };
  const tabChangeGetList = () => {
    if (tabActiveTab.value === 'second') {
      getDepartment();
    } else if (tabActiveTab.value === 'third') {
      getPosition();
    } else if (tabActiveTab.value === 'fourth') {
      getUserList();
    }
  };

  /**
   * @description: 打开选人弹框
   * @return {*}
   */
  const handleSelectPerson = () => {
    // debugger
    selectPersonOptions.user = []; //重置选人的列表
    //重置选人列表的查询条件
    userSearchData.page = 0;
    userSearchData.size = sendData.size ?? 10;
    userSearchData.keywords = '';
    userSearchData.staffState = 'ONJOB';
    userSearchData.locked = 'F';
    userSearchData.enabled = 'T';
    isFirstOpenDialog.value = true;
    sendData.refDom.value.handleToggleVisible();

    tabChangeGetList();
  };

  /**
   * @description: 加载更多
   * @return {*}
   */
  const handleLoadMore = () => {
    console.log('外部加载更多触发', userResData.value);
    if (['second', 'third'].includes(tabActiveTab.value)) return false;
    userSearchData.page++;
    if (userSearchData.page > userResData.value.totalPages) return false;
    getUserList();
  };
  /**
   * @description: 选人组件tab切换触发
   * @param {*} v
   * @return {*}
   */
  const handleTabChange = (v) => {
    tabActiveTab.value = v;
    // selectPersonOptions.userCheckedList = selected;
    console.log('外部的tab-change', v);
    tabChangeGetList();
  };
  /**
   * @description: 获取部门和岗位子集的数据
   * @return {*}
   */
  const handleGetChildData = async (value: any, params) => {
    // console.log(
    //   '---------handleGetChildData----------',
    //   selectPersonOptions.department,
    //   tabActiveTab.value
    // );

    if (
      selectPersonOptions.department?.onlyChoiceDepartment &&
      tabActiveTab.value === 'second'
    )
      return false;
    if (
      selectPersonOptions.position?.onlyChoicePosition &&
      tabActiveTab.value === 'third'
    )
      return false;
    // console.log('获取部门和岗位子集的数据---------外部的', value);
    const res: any = await getUserListApi({
      departmentId: value?.departmentId || value,
      positionId: value?.positionId,
      page: 0,
      size: 2000,
      staffState: 'ONJOB',
      locked: 'F',
      enabled: 'T',
      ...params
    });
    if (tabActiveTab.value === 'second') {
      // selectPersonOptions.department.childData = res.data.data;
      selectPersonOptions.department.childData = res.data;
    } else if (tabActiveTab.value === 'third') {
      // selectPersonOptions.position.childData.push(...res.data.data);
      // selectPersonOptions.position.childData = res.data.data;
      selectPersonOptions.position.childData = res.data;
    }
    // console.log('请求获取子集的数据--0', res);
  };
  const querySearchAsync = async (
    queryString: string,
    cb: (data: any) => any
  ) => {
    const res: any = await getUserList(
      {
        // enterpriseId:
        //   JSON.parse(window.localStorage.getItem('siip-admin')) ||
        //   '123'?.enterpriseInfo?.enterpriseId,
        trueName: queryString
      },
      false
    );
    console.log(queryString, '远程搜索-----', res);
    cb(res.data);
  };

  /*  input搜索 */
  const keywordsSearch = (
    keywords: string,
    type: string,
    departmentId: string
  ) => {
    // userSearchData.keywords = keywords;
    // console.log('----keywordsSearch-----', keywords, type, departmentId);

    if (type) {
      userSearchData[type] = keywords;
      // getUserList({[type]: keywords})
    }
    if (tabActiveTab.value === 'second') {
      handleGetChildData(departmentId, { [type]: keywords });
    } else if (tabActiveTab.value === 'fourth') {
      getUserList();
    }
  };

  provide('load-more', handleLoadMore);
  provide('tab-change', handleTabChange);
  provide('selectPersonLoading', selectPersonLoading);
  provide('get-child-data', handleGetChildData);
  provide('querySearchAsync', querySearchAsync);
  provide('keywordsSearch', keywordsSearch);
  // provide('companyName', companyName);
  provide('isFirstOpenDialog', isFirstOpenDialog);
  return {
    selectPersonLoading,
    selectPersonOptions,
    handleSelectPerson
  };
}

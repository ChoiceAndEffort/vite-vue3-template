/*
 * @Author: lg
 * @Date: 2023-08-21 11:05:19
 * @LastEditors: lg
 * @LastEditTime: 2024-07-03 11:24:59
 * @Description: 不同模块公用的接口
 * @FilePath: \vite-vue3-template\src\api\common\index.ts
 */

import { ajax } from '@/request/index';
import { requestHeader, ServerType } from '@/global/constants';

// 获取部门列表数据-树结构
export const getDepartmentList = (data: any): Promise<any> =>
  // ajax.post(`${ServerType.Hrs}/department/departmentList`, data);
  ajax.post(
    `http://192.168.20.155:3130/gj-auth/department/getTreeOfDepartment`,
    data
  );

//获取人员id
export const getUserListApi = (data: any): Promise<any> =>
  ajax.post(
    `http://192.168.20.155:3130/gj-auth/uc/employee/getPageOfEmployeeIncludeChildByDeptId`,
    data
  );
// ajax.post(`http://192.168.20.155:3130/gj-ops/employee/getListOfEmployeeSimple`, data);

export const getOrganizationApi = (data: any): Promise<any> =>
  ajax.post(
    `http://192.168.20.155:3130/gj-auth/department/getDepartmentWithEmployeeInfo`,
    data
  );

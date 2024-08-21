/*
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-20 18:27:01
 * @LastEditors: lg
 * @LastEditTime: 2023-06-29 15:21:46
 * @FilePath: /su-code/vue3/ui-plus/packages/components/select-person/src/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 人员
export interface IUser {
  accountEnterpriseId: number;
  departmentName: string;
  positionName: string;
  nickname: string;
  mobile: string;
  headImgUrl: string;
}

// 部门
export interface IDepartment {
  departmentId: number;
  name: string;
}

// 岗位
export interface IPostion {
  positionId: number;
  name: string;
}

// 企业
export interface IEnterprise {
  enterpriseId: number;
  name: string;
}

// 历史
export interface IHistory {
  accountEnterpriseId: number;
  departmentName: string;
  positionName: string;
  nickname: string;
  mobile: string;
  headImgUrl: string;
}

// 选择的数据
export interface ISelectItem {
  enterpriseId: number; // 企业id
  enterpriseName: string; // 企业名称

  departmentId: number; // 部门id
  departmentName: string; // 部门名称

  positionId: number; // 部门id
  positionName: string; // 部门名称

  accountEnterpriseId: number; // 账户id
  nickname: string; // 用户名

  mobile: string;
  headImgUrl: string;
}

export interface ISelectPersonOptions {
  title: string;
  search: any;
  submit: Function;
  history?: Function;
  department?: {
    data: Function;
    subData: Function;
  };
  position?: {
    data: Function;
    subData: Function;
  };
  user: Function;
  cancelCallback?: Function;
}

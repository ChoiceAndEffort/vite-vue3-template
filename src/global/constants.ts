/*
 * @Author: lg
 * @Date: 2023-12-26 17:53:42
 * @LastEditors: lg
 * @LastEditTime: 2024-07-01 09:12:06
 * @Description:
 * @FilePath: \vite-vue3-template\src\global\constants.ts
 */


export const requestHeader = {
  pcV1: {
    'client-type': 'pc', // 端的标识pc/app/common
    'x-api-version': '1.0.1' //版本
  },
  commonV1: {
    'client-type': 'common', // 端的标识pc/app/common
    'x-api-version': '1.0.1' //版本
  },
  pcV12: {
    'client-type': 'pc', // 端的标识pc/app/common
    'x-api-version': '1.0.2' //版本
  },
  commonV2: {
    'client-type': 'common', // 端的标识pc/app/common
    'x-api-version': '1.0.2' //版本
  }
};


export enum ServerType {
  Common = '/bms/v1', //公共的
  Cus = '/cus/v1',
  Default = '/pds',
  Hrs = '/hrs/v1',
  Scs = '/scs/v1' // 供应链
}


/*
 * @Author: lg
 * @Date: 2023-09-16 17:37:32
 * @LastEditors: lg
 * @LastEditTime: 2024-07-06 02:15:35
 * @Description:
 * @FilePath: \vite-vue3-template\src\request\index.ts
 */
import { HttpRequest } from '@hb/hb-services';

const TIME_OUT = 30 * 1000;
const { VITE_APP_API } = import.meta.env;
const baseUrl = VITE_APP_API;

const options = {
  // baseURL: baseUrl,
  baseURL: 'http://192.168.20.152:7077',
  withCredentials: false,
  timeout: TIME_OUT,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  //自定义配置
  customParams: {},
  messageCallback: (message: string, type: any = 'error', response: any) => {
    try {
      console.log('*---');
    } catch (error) {
      console.log(error);
    }
  },
  addHeaderFn: () => {
    return {
      token: 'a06d69a543f149979b7185ec54a7639b'
    };
  }
};
const { instance: ajax } = new HttpRequest(options);

export { ajax, baseUrl };

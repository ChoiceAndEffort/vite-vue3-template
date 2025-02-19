/*
 * @Author: lg
 * @Date: 2023-09-16 17:37:32
 * @LastEditors: lg
 * @LastEditTime: 2024-05-10 17:18:52
 * @Description:
 * @FilePath: \vite-project\src\request\index.ts
 */
import HttpRequest from './http-request';

const TIME_OUT = 30 * 1000;
const { VITE_APP_API } = import.meta.env;
const baseUrl = VITE_APP_API;

const options = {
  baseURL: baseUrl,
  withCredentials: false,
  timeout: TIME_OUT,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  //自定义配置
  customParams: {},
  messageCallback: (message: string, type: any = 'error', response: any) => {
    try {
      console.log('做事');
    } catch (error) {
      console.log(error);
    }
  },
  addHeaderFn: () => {
    return {
      token: ''
    };
  }
};
const { instance: ajax } = new HttpRequest(options);

export { ajax, baseUrl };

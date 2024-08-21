import axios from 'axios';

const MESSAGE_NOTICE = {
  503: '服务器内部异常!',
  401: '访问凭证无效，请重新登录授权!',
  403: '访问凭证无效，请重新登录授权!'
};

class HttpRequest {
  constructor(options) {
    this.instance = axios.create(options);
    this.instance.CancelToken = axios.CancelToken;
    // 手动挂载2个方法
    this.instance.all = axios.all;
    this.instance.spread = axios.spread;
    this.instance.token = options?.customParams?.token;
    this.instance.setToken = (token) => {
      this.instance.token = token;
    };
    this.addRequestInterceptor(options);
    this.addResponseInterceptor(options);
  }
  //请求拦截
  addRequestInterceptor(options) {
    this.instance.interceptors.request.use(
      (config) => {
        const token =
          this.instance.token ||
          JSON.parse(window.sessionStorage.getItem('vuex'))?.user?.token;
        config.headers.token = token || '';
        if (options.addHeaderFn) {
          config.headers = Object.assign(
            {},
            config.headers,
            options.addHeaderFn()
          );
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  //相应拦截
  addResponseInterceptor(options) {
    this.instance.interceptors.response.use(
      (response) => {
        // console.log('interceptors.response', options);
        //返回数据是json格式处理函数
        function jsonHandler(response) {
          const { code, msg } = response.data;
          const res = response.data;
          //code===0用于基石板erp, '200'用于saas,后期统一用'200','0'用于saas派工融入erp
          if (code === 0 || code === '200' || code === '0') {
            return response.data;
          } else if (code === 401 || code === 403) {
            options.messageCallback(
              res.msg || MESSAGE_NOTICE[code],
              options?.componentType,
              response
            );

            //如果返回码为需要登录, 清除token,跳转到登录页
            setTimeout(() => {
              window.sessionStorage.removeItem('vuex');
              const url =
                options?.customParams?.jumpUrl ||
                window.location.href?.split('#')?.[0];
              window.location.href = url;
            }, 500);
            return Promise.reject(res);
          } else if (options?.toDealErrorCodeOut?.includes(code)) {
            return Promise.reject(res);
          } else {
            options.messageCallback(
              res.msg || 'Error',
              options?.componentType,
              response
            );
            return Promise.reject(res);
          }
        }

        if (response.status === 200) {
          console.log('新镜像请求来了------ajax----');
          //返回的数据不是对象
          if (
            Object.prototype.toString.call(response.data) !== '[object Object]'
          ) {
            return response;
          }
          return jsonHandler(response);
        } else {
          options.messageCallback(
            response.statusText || 'Error',
            options?.componentType,
            response
          );
          return Promise.reject(response);
        }
      },
      (error) => {
        options.messageCallback(
          '网络异常,请刷新重试' || error,
          options?.componentType,
          error
        );
        return Promise.reject(error);
      }
    );
  }
}

export default HttpRequest;

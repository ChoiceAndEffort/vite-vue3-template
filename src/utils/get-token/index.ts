/*
 * @Author: lg
 * @Date: 2024-05-21 09:40:49
 * @LastEditors: lg
 * @LastEditTime: 2024-08-02 16:06:42
 * @Description:获取登录信息
 * @FilePath: \vite-vue3-template\src\utils\get-token\index.ts
 */

export const getCurrentLoginInfo = (): Record<string, any> => {
  return {
    loginInfo: {
      token: 'f35363108e6c40819c9da73cb1cf72d0',
      refreshToken: '240626106899622068224',
      loginId: '240625106629670371328',
      nickname: 'lg',
      mobile: '18824399959',
      headImgUrl: null,
      expirationTime: '2024-06-27 14:09:33'
    }
  };
};

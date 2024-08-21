/*
 * @Author: lg
 * @Date: 2024-05-21 11:35:47
 * @LastEditors: lg
 * @LastEditTime: 2024-08-06 17:55:04
 * @Description:
 * @FilePath: \vite-vue3-template\src\router\constants.ts
 */
/*
 * @Author: lg
 * @Date: 2024-05-21 11:35:47
 * @LastEditors: lg
 * @LastEditTime: 2024-06-12 10:43:16
 * @Description:
 * @FilePath: \ssii-user-bk\src\router\constants.ts
 */

// otherRemark: "{\"componentMapping\":\"project-information/coating-system/detail\",\"pageType\":\"coating-project\",\"levelIncrease\":true}"
export const mockMenuList = [
  // powerType 'M'-菜单, 'P'-页面, 'B'-按钮
  {
    path: 'home',
    name: 'home',
    title: '首页',
    powerType: 'M',
    frontCfgJson: '',
    meta: {},
    component: 'home/major'
  },
  // {
  //   path: 'basic-components',
  //   name: 'basic-components',
  //   title: '基础组件',
  //   powerType: 'M',
  //   frontCfgJson: '',
  //   meta: {},
  //   component: ''
  // },
  {
    path: 'business-components',
    name: 'business-components',
    title: '业务组件',
    powerType: 'M',
    frontCfgJson: '',
    meta: {},
    component: '',
    children: [
      {
        path: 'select-department-person',
        name: 'select-department-person',
        title: '组合选部门人员',
        powerType: 'M',
        frontCfgJson: '',
        meta: {},
        component: 'business-components/select-department-person/major'
      },
      {
        path: 'name-avatar',
        name: 'name-avatar',
        title: '头像图片',
        powerType: 'M',
        frontCfgJson: '',
        meta: {},
        component: 'business-components/name-avatar/major'
      },
      {
        path: 'verification-code',
        name: 'verification-code',
        title: '验证码插件',
        powerType: 'M',
        frontCfgJson: '',
        meta: {},
        component: 'business-components/verification-code/major'
      },
      {
        path: 'permission-config',
        name: 'permission-config',
        title: '路由和菜单权限配置',
        powerType: 'M',
        frontCfgJson: '',
        meta: {},
        component: 'business-components/permission-config/major'
      }
    ]
  }
];

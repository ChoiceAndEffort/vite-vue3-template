/*
 * @Author: lg
 * @Date: 2024-08-02 17:11:04
 * @LastEditors: lg
 * @LastEditTime: 2024-08-02 17:18:06
 * @Description:
 * @FilePath: \vite-vue3-template\src\hooks\use-select-person\constants.ts
 */
export const mockData = {
  data: {
    departmentList: [
      {
        departmentId: '240731149945732562944',
        pid: '0',
        departmentName: '质量部',
        category: 'DEPT',
        types: 'P',
        hierarchyLeave: 1,
        sorted: 1,
        employeeCount: 3,
        leaderId: '240731147298885566464',
        leaderName: null,
        children: null
      }
    ],
    employeeList: [
      {
        employeeId: '240731147298885566464',
        employeeName: '罗*月',
        email: null,
        jobNumber: null,
        profilePhotoUrl: null,
        phone: '13476360642',
        jobState: 1,
        accountState: 0,
        createdTime: '2024-07-31 19:30:38',
        tenantId: '240731147298868789248',
        departmentIdList: []
      },
      {
        employeeId: '240731150069802172416',
        employeeName: '杨*丽',
        email: '',
        jobNumber: '001',
        profilePhotoUrl: null,
        phone: '13129944184',
        jobState: 1,
        accountState: -1,
        createdTime: '2024-07-31 19:52:39',
        tenantId: '240731147298868789248',
        departmentIdList: ['240731149945732562944']
      },
      {
        employeeId: '240731150280150712320',
        employeeName: '周*敏',
        email: null,
        jobNumber: null,
        profilePhotoUrl: null,
        phone: '15071100978',
        jobState: 1,
        accountState: 0,
        createdTime: '2024-07-31 19:54:19',
        tenantId: '240731147298868789248',
        departmentIdList: ['240731149945732562944']
      },
      {
        employeeId: '240731152310932045824',
        employeeName: '邱*凤',
        email: '2125421542@qq.com',
        jobNumber: '002',
        profilePhotoUrl: null,
        phone: '13714069956',
        jobState: 1,
        accountState: 0,
        createdTime: '2024-07-31 20:10:28',
        tenantId: '240731147298868789248',
        departmentIdList: ['240731149945732562944']
      }
    ]
  }
};

/*
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-03-06 19:50:19
 * @LastEditors: qf
 * @LastEditTime: 2024-01-29 11:28:18
 * @FilePath: \hb-ui-plus\components\select-person\src\store\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';
export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      selected: [],
      choiced: [],
      list: [],
      deleteId: [],
      departmentId: '',
      departmentList: [] // 勾选的部门id
    };
  },
  actions: {
    setSelected(value) {
      this.selected = [...new Set(value)];
    },
    addSelected(value: any) {
      const newSelected = [...this.selected, ...value];
      this.selected = [...new Set(newSelected)];
    },
    delSelected(value) {
      this.selected = this.selected.filter((v) => value.indexOf(v) == -1);
      console.log('---------delSelected------------', this.selected);
      this.deleteId = [...value];
    },
    addList(value: [], type?: string) {
      const tempV: any = [];
      value.map((v) => {
        tempV.push({
          ...v,
          id:
            v.staffSubscribeThaliId ||
            v.accountEnterpriseId ||
            v.positionId ||
            v.departmentId ||
            v.enterpriseId,
          name:
            v.trueName ||
            v.nickname ||
            v.positionName ||
            v.departmentName ||
            v.enterpriseName
        });
      });

      const newList = [...this.list, ...tempV];

      const obj = {};
      this.list = newList.reduce((cur, next) => {
        const __idNext = next.id;
        obj[__idNext] ? '' : (obj[__idNext] = true && cur.push(next));
        return cur;
      }, []);
    },
    delList(value) {
      const delId = value.map((v) => v.id);

      this.list = this.list.filter((v) => delId.indexOf(v.id) === -1);
    },
    setDepartmentId(value) {
      this.departmentId = value;
    },
    addDepartment(val) {
      const newData = [...this.departmentList, val];
      this.departmentList = [...new Set(newData)];
    },
    deleteDepartment(id) {
      this.departmentList = this.departmentList.filter(item => item !== id);
    }
  }
});

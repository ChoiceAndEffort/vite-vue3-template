/*
 * @Author: lg
 * @Date: 2024-08-07 08:34:45
 * @LastEditors: lg
 * @LastEditTime: 2024-08-08 17:32:28
 * @Description:
 * @FilePath: \vite-vue3-template\src\utils\deal-permission-config\index.ts
 */
import { cloneDeep } from 'lodash-es';
// 树形数组转扁平数组
export const treeToArray = (tree: any): Array<any> => {
  let res = [];
  for (const item of tree) {
    res.push(item);
    if (item?.children && item?.children?.length) {
      res = res.concat(treeToArray(item.children));
    }
  }
  return res;
};

/**
 * @description:遍历修改用到的方法1
 * @description:同时提取按钮权限
 * @param {any} org
 * @return {*}
 */
const mapTree = (org: any) => {
  let btnChildren,
    notBtnChildren = [];
  if (Array.isArray(org.children) && org.children?.length > 0) {
    btnChildren = org.children.filter((item: any) => item.powerType === 'B');
    btnChildren.forEach((element) => {
      element.isChecked = false;
    });
    notBtnChildren = org.children.filter((item) => item.powerType !== 'B');
  }

  const haveChildren = notBtnChildren?.length > 0;
  const copyOrg = cloneDeep(org);
  delete copyOrg['hasChildren'];
  return {
    ...copyOrg,
    // pathName: org.pathName,
    // powerType: org.powerType,
    // powerId: org.powerId,
    // powerName: org.powerName,
    isSelect: false, //isSelect，用三个值区分：true为全勾选，false为未勾选,''为半选)
    actions: btnChildren,
    children: haveChildren ? notBtnChildren.map((r) => mapTree(r)) : []
  };
};

//回显上次选择的数据
export const mapTreeLastChecked = (org: any, checkedArray: any[] = []) => {
  //回显按钮
  if (org?.actions?.length > 0) {
    org?.actions.forEach((element) => {
      if (checkedArray.includes(element.powerId)) {
        element.isChecked = true;
      }
    });
  }
  //如果按钮都选择了,且页面也是选择的,则页面选择
  //如果按钮没有全选,且页面也是选择的,则页面是半选
  //如果没有按钮,,且页面也是选择的,则页面是选择
  if (checkedArray.includes(org.powerId)) {
    // const haveBtnSomeChecked = org.actions?.some(
    //   (element) => element.isChecked
    // );
    const haveBtnEveryChecked = org.actions?.every(
      (element) => element.isChecked
    );
    if (haveBtnEveryChecked || !org.actions?.length) {
      org.isSelect = true;
    } else {
      org.isSelect = '';
    }
  }
  const haveChildren = Array.isArray(org.children) && org.children?.length > 0;
  if (haveChildren) {
    org.children.forEach((r) => {
      mapTreeLastChecked(r, checkedArray);
    });
  }
};
/**
 * @description: 遍历修改后端字段的入口
 * @description: 用到的对应方法=遍历修改用到的方法1+遍历修改用到的方法2
 * @description: 便利修改树形数组字段,将后端字段映射到前端需要的字段
 * @param {*} tree
 * @return {*}
 */
export const traverseAndModify = (tree: any) => {
  return tree.map((org) => mapTree(org));
};

/**
 * @description: 递归全选和非全选
 * @param {*} org
 * @param {boolean} checkStatus
 * @return {*}
 */
export const mapTreeCheckedAndNotChecked = (org, checkStatus: boolean | '') => {
  const haveChildren = Array.isArray(org.children) && org.children?.length > 0;
  const dealActions = org.actions;
  dealActions?.length &&
    dealActions.forEach((element) => {
      element.isChecked = checkStatus;
    });
  // console.log(dealActions, 'dealActions-----------');
  return {
    ...org,
    isSelect: checkStatus,
    actions: dealActions || [],
    children: haveChildren
      ? org.children.map((r) => mapTreeCheckedAndNotChecked(r, checkStatus))
      : []
  };
};

// /**
//  * @description: 递归修改已选状态的值,未选状态的值恢复初始状态
//  * @param {*} org
//  * @param {boolean} checkStatus
//  * @return {*}
//  */
// export const mapTreeCheckedAndInitNotChecked = (
//   org: any,
//   checkArrayPowerIds: Array<string>
// ) => {
//   const haveChildren = Array.isArray(org.children) && org.children?.length > 0;
//   let dealActions = org.actions;
//   dealActions?.length &&
//     dealActions.forEach((element) => {
//       if (!element.isChecked) {
//         element.isChecked = checkArrayPowerIds.includes(org.powerId);
//       }
//     });

//   return {
//     ...org,
//     isSelect: checkArrayPowerIds.includes(org.powerId),
//     actions: dealActions || [],
//     children: haveChildren
//       ? org.children.map((r) =>
//           mapTreeCheckedAndInitNotChecked(r, checkArrayPowerIds)
//         )
//       : []
//   };
// };

/**
 * @description: 发现对应id的节点
 * @param {*} tree
 * @param {*} nodeId
 * @return {*}
 */
export const findNodeById = (tree, nodeId): any => {
  for (const node of tree) {
    if (node.powerId === nodeId) {
      return node;
    }
    if (node.children?.length > 0) {
      const foundNode = findNodeById(node.children, nodeId);
      if (foundNode) {
        return foundNode;
      }
    }
  }
  return null;
};

/**
 * @description: 修改对应id的节点
 * @param {*} tree
 * @param {*} nodeId
 * @param {*} newData
 * @return {*}
 */
export const updateNodeById = (tree, nodeId, newData): any => {
  const nodeToUpdate = findNodeById(tree, nodeId);
  if (nodeToUpdate) {
    Object.assign(nodeToUpdate, newData);
    console.log(nodeToUpdate, 'nodeToUpdate------------');
  } else {
    console.log(`Node with id ${nodeId} not found.`);
  }
};

// //知道到当前节点的所有父节点
// export const findNodeParentIds = (tree, nodeId, parents = []) => {
//   for (const node of tree) {
//     if (node.powerId === nodeId) {
//       return parents; // 找到节点，返回父节点数组
//     }

//     if (node.children && node.children.length > 0) {
//       const foundInChild = findNodeParentIds(node.children, nodeId, [
//         ...parents,
//         node
//       ]);
//       if (foundInChild) {
//         return foundInChild; // 在子节点中找到了，返回父节点数组
//       }
//     }
//   }

//   return null; // 没有找到节点
// };

//获取当前节点的所有子节点和按钮配置
// export const findCurrentNodeAllChildren = (tree, nodeId) => {
//   let res = [];
//   for (const item of tree) {
//     if (item.powerId === nodeId) {
//       res.push(item.children);
//     }

//     if (item?.children && item?.children?.length) {
//       res = res.concat(findCurrentNodeAllChildren(item.children, nodeId));
//     }
//   }
//   return res;
// };
/////////////////////////////////////////////////////

// 更新单个节点的选中状态
const updateNodeSelection = (node) => {
  if (node.children.length === 0) {
    // 如果没有子节点，则直接以自身的选中状态为准
    return;
  }
  const currentNode = [...node.actions, ...node.children].map((el) => {
    if (['M', 'P'].includes(el.powerType)) {
      return el.isSelect;
    } else {
      return el.isChecked;
    }
  });
  console.log('t-************', node);

  const allSelected = node.children.every((child) => child.isSelect);
  const someSelected = node.children.some(
    (child) => child.isSelect || child.isSelect === ''
  );
  // const banxuan = currentNode.some((item) => item || item == '');
  const quanxuanTrue = currentNode.every((item) => item);
  const quanxuanfalse = currentNode.every((item) => item === false);
  if (quanxuanTrue) {
    node.isSelect = true;
  } else if (quanxuanfalse) {
    node.isSelect = '';
  } else {
    node.isSelect = '';
  }

  // if (allSelected) {
  //   node.isSelect = true;
  // } else if (someSelected) {
  //   node.isSelect = ''; // 表示半选状态
  // } else {
  //   node.isSelect = false;
  // }
  // console.log(node, '-----更新单个节点的选中状态-----');
};

// 辅助函数：根据id查找节点
const findNode = (tree, nodeId) => {
  for (const node of tree) {
    if (node.powerId === nodeId) {
      return node;
    }
    if (node.children && node.children.length > 0) {
      const foundInChildren = findNode(node.children, nodeId);
      if (foundInChildren) {
        return foundInChildren;
      }
    }
  }
  return null;
};

// 辅助函数：查找节点的父节点id
const findParentId = (tree, nodeId) => {
  for (const node of tree) {
    if (
      node.children &&
      node.children.some((child) => child.powerId === nodeId)
    ) {
      return node.powerId;
    }
    if (node.children && node.children.length > 0) {
      const foundInChild = findParentId(node.children, nodeId);
      if (foundInChild !== null) {
        return foundInChild;
      }
    }
  }
  return null;
};

// 从指定的节点开始向上更新父节点的选中状态
export const updateParentSelection = (tree, nodeId) => {
  const node = findNode(tree, nodeId);

  if (!node) {
    console.log('Node with id', nodeId, 'not found in the tree.');
    return;
  }

  updateNodeSelection(node);

  const parentId = findParentId(tree, nodeId);
  if (parentId !== null) {
    updateParentSelection(tree, parentId);
  }
};

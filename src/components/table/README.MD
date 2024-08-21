<!--
 * @Author: suchiva@126.com
 * @Date: 2023-01-31 10:39:06
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-06-29 10:08:41
 * @FilePath: /su-code/vue3/packages/su-ui-plus/src/components/table/README.MD
 * @Description: table组件说明文档
 *
 * Copyright (c) 2023 by suchiva@126.com, All Rights Reserved.
-->

### 常规表格 组件

#### 功能

- 基本功能：自定义、自定义列宽、自定义表格内容、loading 【完成】
- 表头搜索： 模糊、枚举、数字区间、日期时间、日期区间、拖拉列【低】
- 分页 【完成】
- 固定列 【完成】
- 子表 【完成】

### Table 属性

| 属性名                   | 说明                                           | 类型                             | 可选值 | 默认值 |
| ------------------------ | ---------------------------------------------- | -------------------------------- | ------ | ------ |
| checked                  | 是否有复选框                                   | boolean                          | -      | false  |
| childRef                 | 获取 el-table 表格 dom                         | string                           | -      | -      |
| options                  | 表格的配置                                     | array                            | -      | -      |
| elementLoadingText       | 加载文案                                       | string                           | -      | -      |
| elementLoadingSpinner    | 加载图标名                                     | string                           | -      | -      |
| elementLoadingBackground | 加载背景颜色                                   | string                           | -      | -      |
| elementLoadingSvg        | 加载 svg                                       | string                           | -      | -      |
| elementLoadingSvgViewBox | 加载 svg 的配置                                | string                           | -      | -      |
| pagination               | 加载 svg 的配置                                | string                           | -      | -      |
| lazy                     | 是否懒加载子节点数据                           | boolean                          | -      | -      |
| load                     | 加载子节点数据的函数，<br> lazy 为 true 时生效 | function(row, treeNode, resolve) | -      | -      |


### Table 事件

### Table 方法

### Table 插槽

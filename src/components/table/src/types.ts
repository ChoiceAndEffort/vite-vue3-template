/*
 * @Author: suchiva@126.com
 * @Date: 2023-01-30 21:16:58
 * @LastEditors: 陈迪秀 1170776994@qq.com
 * @LastEditTime: 2023-06-16 15:30:05
 * @FilePath: /su-code/vue3/packages/su-ui-plus/src/components/table/src/types.ts
 * @Description: types
 *
 * Copyright (c) 2023 by suchiva@126.com, All Rights Reserved.
 */

// 表格配置
export interface ITableOptions {
  // 表头
  label?: string;
  // 字段名称
  prop?: string;
  // 列宽
  width?: string | number;
  // 对齐方式
  align?: 'left' | 'center' | 'right';
  // 自定义列表模版名称
  slot?: any;
  action?: boolean;
  // 是否固定列
  fixed?: boolean | string;
  // 某列是否强制不换行，对应提示tool-tip
  showOverflowTooltip?: boolean;
  // 过滤数据
  filters?: any[];
  // 过滤方法
  filterMethod?: any;
  // 排序
  sortable?: boolean;
  // 过滤
  sufilters?: {
    required?: boolean;
    type: string;
    data?: any;
    fn: any;
    popWidth?: number;
  };
  // 用来格式化内容 与el-table 保持一致
  formatter?: Function
}

// 分页配置
export interface INavigatorOptions {
  // 大中小
  small?: boolean;
  // 是否有背景
  background?: boolean;
  // 布局
  layout: string;
  // 总数目
  total: number;
  // 分类
  class?: string;
  // 每页数码
  pageSize: number | number[];
  // 改变页面
  currentChange: () => {};

}

// 数据格式
export interface IData {
  id: number;
  date: string;
  name: string;
  address: string;
  tag: string;
  hasChildren?: boolean;
  children?: IData[];
}

// 过滤种类
export interface IFilterTypes {
  type?: 'default' | 'enum' | 'num' | 'date' | 'time' | 'date-section' | 'section';
}

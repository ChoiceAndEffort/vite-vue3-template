/*
 * @Author: lg
 * @Date: 2023-09-01 09:30:48
 * @LastEditors: lg
 * @LastEditTime: 2024-05-10 17:16:38
 * @Description:
 * @FilePath: \vite-project\src\utils\get-dynamic-images\index.ts
 */

/**
 * @description:获取图片的动态路径
 * @param {string} url- 图片名字[如: 404.webp]
 * @return {*}
 */
export default function (url: string) {
  return new URL(`/src/assets/images/${url}`, import.meta.url).href;
}

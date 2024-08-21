/*
 * @Author: suchiva suchvia@126.com
 * @Date: 2023-02-16 22:38:27
 * @LastEditors: suchiva suchvia@126.com
 * @LastEditTime: 2023-02-17 14:57:04
 * @FilePath: /su-code/vue3/packages/su-ui-plus/src/components/table/src/use-brightenKeyword.ts
 * @Description: 搜索高亮
 */

const eacapeReg = (val: string): string => {
  return val
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\./g, '\\.')
    .replace(/\+/g, '\\+')
    .replace(/\*/g, '\\*')
    .replace(/\$/g, '\\$')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\^/g, '\\^')
    .replace(/\|/g, '\\|')
    .replace(/-/g, '\\-')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\?/g, '\\?')
    .replace(/!/g, '\\!')
    .replace(/,/g, '\\,');
};
export const brightenKeyword = (hText: string, text: string, color: string, select: any) => {
  if (text) {
    /**
     * 全局匹配、不区分大小写
     */
    const Reg = new RegExp(eacapeReg(hText), 'gi');
    return text.replace(Reg, function ($1) {
      return `<span style="color: ${color};">${hText === $1 ? hText : $1}</span>`;
    });
  }
};

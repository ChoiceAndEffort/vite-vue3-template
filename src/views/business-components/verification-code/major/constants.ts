/*
 * @Author: lg
 * @Date: 2024-08-03 14:26:57
 * @LastEditors: lg
 * @LastEditTime: 2024-08-03 15:20:41
 * @Description:
 * @FilePath: \vite-vue3-template\src\views\business-components\verification-code\major\constants.ts
 */
export const contentConfig = [
  {
    title: '验证码',
    slot: 'code',
    height: 230,
    code: `
    <template>
    {{ verificationCodePluginRef?.inputCode }}
    <lg-verification-code
    ref="verificationCodePluginRef"
     ></lg-verification-code>
    <template>

    <script lang="ts" setup>
    import { ref } from 'vue';
    const verificationCodePluginRef = ref(null);
    </script>
      `
  }
];

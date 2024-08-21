<!--
 * @Author: lg
 * @Date: 2024-05-10 17:10:25
 * @LastEditors: lg
 * @LastEditTime: 2024-05-13 14:23:37
 * @Description:
 * @FilePath: \vite-vue3-template\src\test-lg\major\index.vue
-->
<template>
  <div class="home">
    <h2>测试页</h2>
    <el-form
      label-position="left"
      label-width="auto"
      :model="formData"
      style="max-width: 600px"
    >
      <el-form-item label="中英文切换:">
        <el-switch
          v-model="formData.language"
          size="large"
          :active-text="t('languageObj.en')"
          active-value="en"
          :inactive-text="t('languageObj.zh')"
          inactive-value="zh"
          @change="handleLanguageSwitch"
        />
      </el-form-item>

      <el-form-item label="按钮样式修改">
        <el-button>按钮</el-button>
      </el-form-item>
    </el-form>
    <ul>
      <li>ddd</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useTestLgStore from '@/store/test-lg';
import useUserConfigStore from '@/store/user-config';
const testLgStore = useTestLgStore();
const userConfigStore = useUserConfigStore();

const { t, locale: i18nLanguage } = useI18n();

const formData = reactive<any>({
  language: 'zh'
});

const handleLanguageSwitch = (v: string | number | boolean) => {
  // debugger
  console.log('语言切换', v);
  userConfigStore.setLanguage(v);

  // location.reload();
  window.location.reload();
};
onMounted(() => {});
formData.language = userConfigStore.getLanguage;
</script>

<style scoped lang="scss">
ul {
  width: vw(230);
  height: vh(364);
  background: rgb(112, 101, 101);
  font-size: vw(16);
}
</style>

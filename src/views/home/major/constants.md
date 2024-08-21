# 基础

## 安装
```sh
npm i @lg/lg-ui-plus -S
```


## 快速开始

### 完整引入
```sh
 import LgUI from '@lg/lg-ui-plus';
 import '@lg/lg-ui-plus/dist/style.css';

const app = createApp(App)
app.use(LgUI)
app.mount('#app')
```


### 按需引入
```sh
import { LgNameAvatar,LgSelectDepartmentPerson,LgVerificationCode} from '@lg/lg-ui-plus';
import '@lg/lg-ui-plus/dist/name-avatar/style.css';
import '@lg/lg-ui-plus/dist/select-department-person/style.css';
import '@lg/lg-ui-plus/dist/verification-code/style.css';

const app = createApp(App)
app.use(LgNameAvatar)
app.use(LgSelectDepartmentPerson)
app.use(LgVerificationCode)
app.mount('#app')

```

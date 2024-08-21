# hb-major-page 页面布局

## 介绍
    列表页和详情页各种布局，目前有8种
    1. 整屏一栏  type='list' （默认类型，不用传参）
    2. 整屏两栏  type='list__two-col'
    3. 非整屏布局（卡片式布局）type='detail'

## 使用方法
    <hb-major-page>
        <template #headerOperate>
        <hb-button>新增</hb-button>
        </template>
        <template #headerTitle>title11 </template>
        <template #aside>侧边栏</template>
        <div class="pd-normal">
            组织架构-部门详情信息页 组织架构-部门详情信息页2 组织架构-部门详情信息页3
        </div>
    </hb-major-page>

    插槽headerOperate：头部右侧按钮区域
    插槽headerTitle：  头部左侧第二区域
    插槽aside：        两栏布局左侧区域（主内容直接写即可）
    

### 属性
| 属性名 | 说明       | 类型   | 可选值 | 默认值 |
| ------ | ---------- | ------ | ------ | ------ |
| title | 头部标题，可传参或自动从路由meta获取 | string | -  | -  |
| isShowHeader | 是否显示头部区域 | boolean | false、true  | true      |
| isShowStretch | 是否显示伸缩侧边栏操作按钮（整屏两栏有效） | boolean | false、true  | true      |
| type | 布局类型 | string | 'list'、'list__two-col'、'detail'| 'list' |

## 依赖
    element-plus

## 开发者
    初步开发者：龚磊
    后期优化者：邱凤
## 版本
    0.0.1

## 问题日志清单
    暂无
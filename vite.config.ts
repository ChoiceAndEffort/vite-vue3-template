/*
 * @Author: lg
 * @Date: 2024-05-10 16:09:19
 * @LastEditors: lg
 * @LastEditTime: 2024-05-16 17:24:05
 * @Description:
 * @FilePath: \vite-vue3-template\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

//开启gzip
import viteCompression from 'vite-plugin-compression';

//CDN
import { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import';

// import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// import ElementPlus from 'unplugin-element-plus/vite'

// 图片压缩
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgo from 'svgo'; // 引入 svgo

//打包分析
import { visualizer } from 'rollup-plugin-visualizer';

//使用这个引入CDN
import externalGlobals from 'rollup-plugin-external-globals';
//并在index.html中生成对应的CDN引入
import { createHtmlPlugin } from 'vite-plugin-html';
const cdn = {
  css: [],
  js: [
    'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue.global.js',
    'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue-router.global.js',
    'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue-demi0.14.7.iife.min.js',
    'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/pinia2.1.7.iife.prod.min.js',
    'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue-i18n.global.js',
    'https://cdn.bootcdn.net/ajax/libs/element-plus/2.7.2/index.full.js'
  ]
};

const externalGlobalsObj = {
  vue: 'Vue',
  'vue-demi': 'VueDemi',
  'vue-router': 'VueRouter',
  pinia: 'Pinia',
  'vue-i18n': 'VueI18n',
  'element-plus': 'ElementPlus'
};

//配置环境
const PRODUCTION_ENV: Array<string> = ['sit', 'uat', 'prod'];

export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_HOST, VITE_APP_PORT, VITE_APP_MODE, VITE_BUILD_BASE_API } =
    env;
  return defineConfig({
    base: VITE_BUILD_BASE_API,
    server: {
      host: VITE_APP_HOST,
      port: ~~VITE_APP_PORT, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true
    },
    build: {
      minify: 'terser',
      assetsInlineLimit: 4096, // 图片转base64编码的阈值
      cssCodeSplit: true, //启用/禁用 CSS 代码拆分
      sourcemap: false, //构建后是否生成 source map 文件
      terserOptions: {
        compress: {
          //生产环境时移除console+debugger
          drop_console: PRODUCTION_ENV.includes(VITE_APP_MODE),
          drop_debugger: PRODUCTION_ENV.includes(VITE_APP_MODE)
        }
      },
      rollupOptions: {
        output: {
          //使用 rollupOptions 的 manualChunks 选项来手动配置代码分割（code splitting）的行为。通过 manualChunks，你可以控制将哪些模块打包到单独的文件中。
          //最小化拆分包(打包的有些js文件整合了太多的第三方包,文件太大,通过该方法拆包后,js文件夹数量增多,单个包变小了)
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },

          chunkFileNames: 'static/assets/js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'static/assets/js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: 'static/assets/[ext]/[name]-[hash].[ext]' // 资源文件像 字体，图片等
        },
        external: Object.keys(externalGlobalsObj),//排除CDN引入的资源打包
      }
    },
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': `${resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "@/styles/element/index.scss" as *;`,
          additionalData: `@use "@/styles/utils.scss" as *;`
          // additionalData: `@import "@/styles/utils.scss";` //引入全局变量文件
          // additionalData: `@use "@/styles/index.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()]
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),

      Components({
        // allow auto load markdown components under `./src/components/`
        // extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        // include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
        // dts: 'src/components.d.ts'
      }),
      createHtmlPlugin({
        inject: {
          data: {
            cdnCss: PRODUCTION_ENV.includes(VITE_APP_MODE) ? cdn.css : [],
            cdnJs: PRODUCTION_ENV.includes(VITE_APP_MODE) ? cdn.js : []
          }
        }
      }),

      {
        ...externalGlobals(externalGlobalsObj),
        enforce: 'post',
        apply: 'build'
      },
      // importToCDN({
      //   modules: [
      //     {
      //       name: 'vue',
      //       var: 'Vue',
      //       path: 'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue.global.js'
      //     },
      //     {
      //       name: 'vue-router',
      //       var: 'VueRouter',
      //       path: 'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue-router.global.js'
      //     },
      //     {
      //       name: 'vue-demi',
      //       var: 'VueDemi',
      //       path: `https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue-demi0.14.7.iife.min.js`
      //     },
      //     {
      //       name: 'pinia',
      //       var: 'Pinia',
      //       path: 'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/pinia2.1.7.iife.prod.min.js'
      //     },

      //     {
      //       name: 'vue-i18n',
      //       var: 'VueI18n',
      //       path: 'https://gggj-fe.oss-cn-hangzhou.aliyuncs.com/saas-pc/vue-i18n.global.js'
      //     },
      //     {
      //       name: 'element-plus',
      //       var: 'ElementPlus',
      //       path: `https://cdn.bootcdn.net/ajax/libs/element-plus/2.7.2/index.full.js`
      //       // css: 'https://cdn.bootcdn.net/ajax/libs/element-plus/2.7.2/index.css' //这里修改了自定义命名空间,所以样式不能CDN引入
      //     }
      //   ]
      // }),
      // 图片资源压缩
      ViteImageOptimizer({
        webp: {
          quality: 75
        },
        svgo
      }),

      //大文件压缩.gz
      //对于较大的文件开启 Gzip 压缩效果更好。因为 Gzip 压缩可以减小文件的大小，从而减少传输时间和网络带宽消耗。
      viteCompression({
        disable: false, //是否禁用压缩，默认为 false
        // 需要注意的是，开启 Gzip 压缩时，服务器将对文件进行实时压缩处理，这会增加一定的 CPU 开销。如果服务器资源有限或性能敏感，可以根据实际情况选择合适的文件大小阈值。
        threshold: 10240, // 文件容量大于这个值进行压缩,启用压缩的文件大小限制，单位是字节
        algorithm: 'gzip', // 压缩方式
        ext: '.gz', // 后缀名
        deleteOriginFile: false // 压缩后是否删除压缩源文件
      }),
      visualizer({
        // open: true, // 注意这里要设置为true，否则无效，如果存在本地服务端口，将在打包后自动展示
        // gzipSize: true,
        // file: 'stats.html', //分析图生成的文件名
        // brotliSize: true
      })
    ]
  });
};

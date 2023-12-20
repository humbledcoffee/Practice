import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

//gzip插件
import viteCompression from 'vite-plugin-compression'
//mock插件
import {viteMockServe} from 'vite-plugin-mock'

const resolve = (dir:string)=> path.resolve(__dirname,dir)
// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  publicDir:resolve("public"),
  plugins: [
    vue(),
    vueJsx(),
    //gzip压缩 生产环境生成 .gz文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext:'.gz'
    }),
    //mock
    viteMockServe({
      mockPath: './mocks',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    //导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    //css预处理器
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `
    //     @import "@/assets/styles/global.scss";
    //     @import "@/assets/styles/reset.scss";
    //     @import "@/assets/styles/common.scss";
    //     `
    //   }
    // }
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,//自动在浏览器打开
    proxy:{}//暂时不需要代理
  },
  build: {
    //浏览器兼容性 "esnext"|"modules"
    target: 'modules',
    //指定输出路径
    outDir: 'build',
    //生成静态资源的存放路径
    assetsDir: 'assets',
    //启用/禁用css代码拆分
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 10240,
    //打包环境移除console.log, debugger
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger:true,
      },
    },
    rollupOptions: {
      input: {
        main:resolve('index.html')
      },
      output: {
        entryFileNames: `js/[name]-[hash].js`,
        chunkFileNames: `js/[name]-[hash].js`,
        assetFileNames:`[ext]/[name]-[hash].[ext]`
      }

    }
  },
  
})

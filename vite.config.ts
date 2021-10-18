import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import importElementPlus from 'vite-plugin-element-plus' // element-plus按需引入

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importElementPlus({
      useSource: true
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './', //打包路径
  server: {
    port: 8088,
    open: true, // 是否自动打开浏览器
    cors: true, // 是否能够跨域
  }
})

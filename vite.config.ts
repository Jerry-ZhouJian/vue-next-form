import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  server: {
    port: 2999,
  },
  plugins: [vue(),dts({
    // 包含 types 目录
    include: ['src/components/vue-next-form/types', 'src/components/vue-next-form/index.d.ts'], 
    // 输出到 dist 目录
    outDir: 'dist', 

  })],
  build: {
    lib: {
      entry: 'src/components/vue-next-form/index.ts', // 入口文件
      name: 'VueNextForm', // 库的全局变量名
      fileName: (format) => `vue-next-form.${format}.js`, // 输出文件名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue','element-plus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        }
      },
    },
  },
});

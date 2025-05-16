import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 2999,
  },
  plugins: [vue(), ElementPlus({})],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./src/components/vue-next-form/index.ts",
      name: "vue-next-form",
      fileName: (format) => `vue-next-form.${format}.js`,
    },
  },
});

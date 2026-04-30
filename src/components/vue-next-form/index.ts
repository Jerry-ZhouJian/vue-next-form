import 'element-plus/dist/index.css' // 关键：引入 ElementPlus 核心样式
import VueNextForm from './src/index.vue'
import type { FormItemProps, FormProps } from './types/formProps'

// 组件列表
const components = [VueNextForm]

// 安装函数
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  // 自动注册 ElementPlus 组件
  // 为 Window 对象添加 ElementPlus 属性声明，解决类型检查报错

  if (window.ElementPlus) {
    app.use(window.ElementPlus)
  } else {
    console.warn(`[VueNextForm] 检测到未安装 ElementPlus，你需要自行安装：npm install element-plus`)
  }
}

// 导出组件和安装方法
export { VueNextForm }
export type { FormItemProps, FormProps }
export default { install }

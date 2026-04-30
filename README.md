中文 | [English](./readme.en.md)

# vue-next-form

基于 vue，使用了 element-plus 组件库封装的，通过配置文件驱动的，下一代动态表单

## 安装

```bash
npm install --save vue-next-form
```

## 配置字段说明

| 属性名       | 说明                             | 类型                 | Default |
| :----------- | :------------------------------- | :------------------- | :------ |
| type         | 表单元素的类型                   | 请查看使用说明       | -       |
| model        | 绑定的字段                       | string               | -       |
| defaultValue | 表单元素的默认值                 | 和表单元素的类型一致 | -       |
| placeholder  | 占位符                           | string               | -       |
| rule         | 和element-plus的校验规则保持一致 | function             | -       |

## 使用

#### input-text

> 文本输入框

```vue
<template>
  <VueNextForm v-model="bindValue" :formField="options.formField"></VueNextForm>
</template>

<script setup lang="ts">
import { VueNextForm, type FormProps } from 'vue-next-form'

const options: FormProps = {
  formField: [
    {
      type: 'input-text',
      model: 'aa',
      defaultValue: '',
      placeholder: '请输入内容',
    },
  ],
}

const bindValue = ref({ aa: '' })
</script>
```

```vue
<template>
  <VueNextForm v-model="bindValue" :formField="options.formField"></VueNextForm>
</template>
<script setup lang="ts">
import { VueNextForm, type FormProps } from 'vue-next-form'

const options: FormProps = {
  formField: [
    {
      type: 'input-text',
      model: 'aa',
      defaultValue: '',
      placeholder: '请输入内容',
    },
    {
      type: 'input-number',
      model: 'bb',
      defaultValue: 0,
      rule(rule, value, callback) {
        if (value < 10) {
          callback(new Error('必须大于10'))
        } else {
          callback()
        }
      },
    },
    {
      type: 'select-single',
      model: 'cc',
      defaultValue: '',
      options: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
      getDate() {
        return [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ]
      },
    },
    {
      type: 'date-picker',
      model: 'dd',
      defaultValue: '',
      placeholder: '请选择日期112',
    },
    {
      type: 'date-picker-range',
      model: 'ee',
      defaultValue: [],
      startPlaceholder: '开始',
      endPlaceholder: '结束',
    },
    {
      type: 'text',
      model: 'ff',
      defaultValue: '这是一段文本',
      formatter: () => {
        return '<span style="color:red">format</span>'
      },
    },
    {
      type: 'radio-group',
      model: 'gg',
      defaultValue: '',
      options: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    },
    {
      type: 'checkbox',
      model: 'hh',
      defaultValue: '',
      label: '激活',
      trueValue: '1',
      falseValue: '0',
    },
    {
      type: 'checkbox-group',
      model: 'ii',
      defaultValue: [],
      options: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    },
  ],
}

const bindValue = ref({})
</script>
```

## 未来计划

因为本人有工作，所以时间相对有限，后续会继续完善这个组件

胡汉三回来了，后续继续维护组件

## 联系我

微信：putongren312

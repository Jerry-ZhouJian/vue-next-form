[中文](readme.md) | English

# vue-next-form

Based on vue, the next generation dynamic form is encapsulated by the element-plus component library and driven by configuration files

## install
```bash
npm install --save vue-next-form
```

## Usage
```vue
<template>
  <VueNextForm v-model="bindValue" :formField="options.formField" ></VueNextForm>
</template>
<script setup lang="ts">
import { VueNextForm, type FormProps } from 'vue-next-form';

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
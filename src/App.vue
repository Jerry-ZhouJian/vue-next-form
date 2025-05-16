<template>
  <VueNextForm ref="vueNextFormRef" v-model="bindValue" :formField="options.formField"></VueNextForm>

  <el-button type="primary" @click="validateForm">验证表单</el-button>
  <el-button type="primary" @click="validateFieldForm">验证部分表单</el-button>
  <el-button type="primary" @click="resetForm">重置表单</el-button>
  <el-button type="primary" @click="resetFieldsForm">重置部分表单</el-button>
  <el-button type="primary" @click="printValue">打印值</el-button>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { ElButton } from 'element-plus'
import { VueNextForm, type FormProps } from './components/vue-next-form'

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

const vueNextFormRef = useTemplateRef('vueNextFormRef')

// 验证表单
const validateForm = () => {
  if (!vueNextFormRef.value) return
  vueNextFormRef.value.validate()
}

// 验证表单
const validateFieldForm = () => {
  if (!vueNextFormRef.value) return
  vueNextFormRef.value.validateField()
}

// 重置表单
const resetForm = () => {
  if (!vueNextFormRef.value) return
  vueNextFormRef.value.reset()
}

// 重置表单
const resetFieldsForm = () => {
  if (!vueNextFormRef.value) return
  vueNextFormRef.value.resetFields()
}

const printValue = () => {
  console.log(bindValue.value)
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

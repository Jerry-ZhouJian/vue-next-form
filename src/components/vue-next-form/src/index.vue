<template>
  <el-form ref="elFormRef" class="v-form-box" :model="_formValue" :rules="_formRules" :label-position="labelPosition" :inline="inline" :disabled="disabled">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in _newFormField" :key="item.model + index" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
        <el-form-item :label="item.itemLabel" style="width: 100%" :prop="item.model">
          <InputText v-if="item.type === 'input-text'" v-model="_formValue[item.model]" v-bind.prop="item"></InputText>
          <InputNumber v-if="item.type === 'input-number'" v-model="_formValue[item.model]" v-bind.prop="item"></InputNumber>
          <SelectSingle v-if="item.type === 'select-single'" v-model="_formValue[item.model]" v-bind.prop="item"></SelectSingle>
          <SelectSingleGroup v-if="item.type === 'select-single-group'" v-model="_formValue[item.model]" v-bind.prop="item"></SelectSingleGroup>
          <DatePicker v-if="item.type === 'date-picker'" v-model="_formValue[item.model]" v-bind.prop="item"></DatePicker>
          <DatePickerRange v-if="item.type === 'date-picker-range'" v-model="_formValue[item.model]" v-bind.prop="item"></DatePickerRange>
          <Text v-if="item.type === 'text'" v-model="_formValue[item.model]" v-bind.prop="item"></Text>
          <RadioGroup v-if="item.type === 'radio-group'" v-model="_formValue[item.model]" v-bind.prop="item"></RadioGroup>
          <Checkbox v-if="item.type === 'checkbox'" v-model="_formValue[item.model]" v-bind.prop="item"></Checkbox>
          <CheckboxGroup v-if="item.type === 'checkbox-group'" v-model="_formValue[item.model]" v-bind.prop="item"></CheckboxGroup>
        </el-form-item>
      </el-col>
      <!-- <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="4">
        <el-form-item label="test" style="width: 100%">
           buildProps
        </el-form-item>
      </el-col> -->
    </el-row>
  </el-form>
</template>
<script setup lang="ts">
import { ElRow, ElCol, ElForm, ElFormItem, type FormRules } from 'element-plus'

import { InputText, InputNumber, SelectSingle, SelectSingleGroup, DatePicker, DatePickerRange, Text, RadioGroup, Checkbox, CheckboxGroup } from '../components'

import type { InputNumberPropsInterface, InputTextProps, SelectSinglePropsInterface, SelectSingleGroupPropsInterface, DatePickerPropsInterface, DatePickerRangePropsInterface, TextProps, RadioGroupProps, CheckboxProps, CheckboxGroupProps } from '../components'
import { ref, toRef, useTemplateRef, watchEffect } from 'vue'

defineOptions({
  name: 'VueNextForm',
})

export type FormItemProps = InputTextProps | InputNumberPropsInterface | SelectSinglePropsInterface | SelectSingleGroupPropsInterface | DatePickerPropsInterface | DatePickerRangePropsInterface | TextProps | RadioGroupProps | CheckboxProps | CheckboxGroupProps

export interface FormProps {
  labelPosition?: 'left' | 'right' | 'top'
  inline?: boolean
  disabled?: boolean
  formField: FormItemProps[]
}

const { labelPosition = 'left', inline = false, disabled = false, formField = [] } = defineProps<FormProps>()

// 表单绑定的值
const _formValue = defineModel<any>({})
// 表单验证规则
const _formRules = ref<FormRules>({})
// 表单需要验证的字段
const _formNeedValidateList = ref<string[]>([])

// 表单需要重置的字段
const _formNeedResetList = ref<string[]>([])

const _newFormField = ref<FormItemProps[]>([])

// 处理配置字段
const handleUrlParams = () => {
  let temp_newFormField: FormItemProps[] = []
  formField.forEach((field) => {
    // 判断字段的类型是否是select-single
    if (field.type === 'select-single' || field.type === 'select-single-group') {
      // 判断是否有urlParams
      if (field.urlParams !== undefined) {
        // 循环urlparams
        Object.keys(field.urlParams).forEach((key) => {
          // 判断value是否是字符串,并且包含from:
          if (typeof field.urlParams![key] === 'string' && field.urlParams![key].startsWith('form:')) {
            const valueKey = field.urlParams![key].split(':')[1]
            field.urlParams![key] = toRef(_formValue.value, valueKey)
          }
        })
      }
    }

    if (field.type === 'input-number') {
      // 判断是否有maxRel
      if (field.maxRel !== undefined && field.maxRel !== '') {
        // 判断max是否是字符串,并且包含from.
        if (field.maxRel.startsWith('form:')) {
          const key = field.maxRel.split(':')[1]
          watchEffect(() => {
            if (field.min !== undefined && _formValue.value[key] < field.min) {
              field.max = field.min
            } else {
              field.max = _formValue.value[key]
            }
          })
        }
      }
    }

    temp_newFormField.push(field)
  })

  _newFormField.value = temp_newFormField
  console.log('handleUrlParams _newFormField', _newFormField.value)
}

// 生成表单绑定值
const generateFormValue = () => {
  formField.forEach((field) => {
    _formValue.value[field.model] = field.defaultValue

    if (field.rule) {
      if (field.ruleTrigger) {
        _formRules.value[field.model] = [{ required: true, validator: field.rule, trigger: field.ruleTrigger }]
      } else {
        _formRules.value[field.model] = [{ required: true, validator: field.rule, trigger: 'blur' }]
      }
    }

    // 统计需要重置字段的字段列表
    if (field.reset === undefined || field.reset === true) {
      _formNeedResetList.value.push(field.model)
    }

    // 统计需要验证字段的字段列表
    if (field.validate === undefined || field.validate !== false) {
      _formNeedValidateList.value.push(field.model)
    }

    console.log('generateFormValue', field)
  })

  console.log('_formValue', _formValue.value)
  console.log('_formRules', _formRules.value)
  handleUrlParams()
}

generateFormValue()

const elFormRef = useTemplateRef('elFormRef')

const validate = () => {
  if (!elFormRef.value) return
  elFormRef.value.validate()
}

const validateField = () => {
  if (!elFormRef.value) return
  elFormRef.value.clearValidate()
  elFormRef.value.validateField(_formNeedValidateList.value)
}

const reset = () => {
  if (!elFormRef.value) return
  elFormRef.value.resetFields()
}

const resetFields = () => {
  if (!elFormRef.value) return
  elFormRef.value.resetFields(_formNeedResetList.value)
}

defineExpose({
  validate,
  validateField,
  reset,
  resetFields,
})
</script>
<style>
.v-form-box {
  width: 100%;
  text-align: left;
}
</style>

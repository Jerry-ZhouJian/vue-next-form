<template>
  <el-date-picker :style="{ width: '100%' }" v-model="_modelValue" :start-placeholder="startPlaceholder" :end-placeholder="endPlaceholder" :format="format" :value-format="valueFormat" :disabled="disabled" type="daterange"></el-date-picker>
</template>

<script setup lang="ts">
import { ElDatePicker } from 'element-plus'
import type { DatePickerRangePropsInterface } from './DatePickerRangeProps'

defineOptions({
  name: 'DatePickerRange',
})

const _modelValue = defineModel<[string, string]>()

const { format = 'YYYY-MM-DD', valueFormat = 'YYYY-MM-DD', startPlaceholder = '请选择开始日期', endPlaceholder = '请选择结束日期' } = defineProps<DatePickerRangePropsInterface>()

const emit = defineEmits(['update:modelValue'])
</script>

<style></style>

<template>
  <el-date-picker :style="{ width: '100%' }" v-model="_modelValue" :placeholder="placeholder" :format="format" :value-format="valueFormat" :disabled="disabled"></el-date-picker>
</template>

<script setup lang="ts">
import { ElDatePicker } from 'element-plus'
import type { DatePickerPropsInterface } from './DatePickerProps'

defineOptions({
  name: 'AhDatePicker',
})

const _modelValue = defineModel<string>()

const { placeholder, format = 'YYYY-MM-DD', valueFormat = 'YYYY-MM-DD' } = defineProps<DatePickerPropsInterface>()

const emit = defineEmits(['update:modelValue'])
</script>

<style></style>

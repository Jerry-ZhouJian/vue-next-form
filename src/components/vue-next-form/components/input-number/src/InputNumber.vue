<template>
  <el-input-number class="j-input-number-box" v-model="modelValue" :min="props.min" :max="props.max" :step="props.step" :precision="props.precision"></el-input-number>
</template>

<script setup lang="ts">
import { ElInputNumber } from 'element-plus'
import type { InputNumberPropsInterface } from './InputNumberProps'

defineOptions({
  name: 'InputNumber',
})

const modelValue = defineModel('modelValue', { type: Number, default: 0 })

const props = withDefaults(defineProps<InputNumberPropsInterface>(), {
  max: Infinity,
  min: -Infinity,
  step: 1,
  precision: 0,
})
</script>

<style>
.j-input-number-box {
  width: 100%;
  text-align: right;
}

/* .j-input-number-box .el-input__inner {
  text-align: left;
} */
</style>

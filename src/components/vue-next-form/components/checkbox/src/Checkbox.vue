<template>
  <el-checkbox v-model="_modelValue" :label="props.label" :true-value="props.trueValue" :false-value="props.falseValue" :size="props.size" />
</template>

<script setup lang="ts">
import { ElCheckbox } from 'element-plus'
import type { CheckboxProps } from './CheckboxProps'

const _modelValue = defineModel<string | number | boolean>()

const props = withDefaults(defineProps<CheckboxProps>(), {})

defineOptions({
  name: 'Checkbox',
})
</script>

<style></style>

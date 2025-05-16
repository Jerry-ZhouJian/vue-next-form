<template>
  <el-input class="j-input-text" v-model="modelValue" type="text" :placeholder="props.placeholder" :clearable="props.clearable" :disabled="props.disabled" :size="props.size"></el-input>
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus'
import type { InputTextProps } from './InputTextProps'

const modelValue = defineModel('modelValue', { type: String, default: '' })

const props = withDefaults(defineProps<InputTextProps>(), {
  placeholder: '请输入',
})
</script>

<style>
.j-input-text {
  width: 100%;
}
</style>

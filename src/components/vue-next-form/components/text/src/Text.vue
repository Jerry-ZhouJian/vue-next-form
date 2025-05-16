<template>
  <el-text v-if="props.formatter" v-html="props.formatter(_modelValue)" :style="{ fontSize: `${props.fontSize}px`, color: props.color }"></el-text>
  <el-text v-else-if="$slots.default" :style="{ fontSize: `${props.fontSize}px`, color: props.color }"><slot></slot></el-text>
  <el-text v-else :style="{ fontSize: `${props.fontSize}px`, color: props.color }">{{ _modelValue }}</el-text>
</template>

<script setup lang="ts">
import { ElText } from 'element-plus'
import type { TextProps } from './TextProps'

defineOptions({
  name: 'Text',
})

const _modelValue = defineModel<string | number>('modelValue', { type: String, default: '' })

const props = withDefaults(defineProps<TextProps>(), {
  color: '#606266',
})
</script>

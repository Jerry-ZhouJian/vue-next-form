<template>
  <el-checkbox-group v-model="modelValue">
    <el-checkbox v-for="item in _options" :key="item['value']" :value="item['value']">
      {{ item['label'] }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script setup lang="ts">
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import type { CheckboxGroupProps, optionsProp, optionsValue } from './checkboxGroupProps'
import { ref } from 'vue'

defineOptions({
  name: 'CheckboxGroup',
})

const props = withDefaults(defineProps<CheckboxGroupProps>(), {})

const modelValue = defineModel<optionsValue[]>()

const _options = ref<optionsProp[]>([])

if (props.getData !== undefined) {
  _options.value = props.getData()
} else if (props.options && props.options.length) {
  _options.value = props.options
} else {
  _options.value = []
}
</script>

<style></style>

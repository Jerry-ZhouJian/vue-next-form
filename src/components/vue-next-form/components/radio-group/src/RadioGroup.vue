<template>
  <div style="width: 100%">
    <el-text v-show="props.showTextValue">{{ textValue }}</el-text>
    <el-radio-group v-show="!props.showTextValue" v-model="modelValue" :disabled="props.disabled">
      <el-radio v-for="(item, itemIndex) in _options" :key="itemIndex" :label="item.label" :value="item.value"></el-radio>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ElRadio, ElRadioGroup, ElText } from 'element-plus'
import { computed, ref } from 'vue'
import type { optionsProps, RadioGroupProps } from './RadioGroupProps'

defineOptions({
  name: 'RadioGroup',
})

const modelValue = defineModel<string | boolean | number>({ required: true })

const props = withDefaults(defineProps<RadioGroupProps>(), {
  showTextValue: false,
})

const _options = ref<optionsProps[]>([])

if (props.getData !== undefined) {
  _options.value = props.getData()
} else if (props.options && props.options.length) {
  _options.value = props.options
} else {
  _options.value = []
}

const textValue = computed(() => {
  if (props.showTextValue) {
    const option = _options.value?.find((o) => o.value === modelValue.value)
    return option ? option.label : ''
  }
})
</script>

<style></style>

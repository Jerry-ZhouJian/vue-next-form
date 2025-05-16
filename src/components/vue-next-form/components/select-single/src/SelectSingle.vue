<template>
  <div class="select-single-container">
    <el-text v-show="props.showTextValue">{{ textValue }}</el-text>
    <el-select v-show="!props.showTextValue" class="w-full" v-model="_modelValue" v-bind="$attrs" v-bind.prop="props" @change="handleChange" @visible-change="handleVisibleChange">
      <el-option v-for="item in selectOption" :key="item['value']" :label="item['label']" :value="item['value']" :disabled="props.disabledOptions.includes(item['value'] as never)" />

      <template v-if="props.footerFunctionName !== ''" #footer>
        <el-button class="w-full" size="small" @click="clickFooter"> 新增 </el-button>
      </template>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElSelect, ElOption, ElText, ElButton } from 'element-plus'
import type { optionsInterface, SelectSinglePropsInterface } from './SelectSingleProps'

defineOptions({
  name: 'SelectSingle',
})

const _modelValue = defineModel<string | number>('modelValue', {
  type: [String, Number],
  default: '',
})

const props = withDefaults(defineProps<SelectSinglePropsInterface>(), {
  placeholder: '请选择',
  url: '',
  disabledOptions: () => [],
  extraPoistion: 'bottom',
  footerFunctionName: '',
})

const selectOption = ref<optionsInterface[]>([])

if (props.getDate !== undefined) {
  selectOption.value = props.getDate()
} else if (props.options) {
  selectOption.value = props.options
} else {
  selectOption.value = []
}

// 添加额外数据
const addExtraOptions = () => {
  if (props.extraOptions && props.extraOptions.length) {
    // 判断合并的位置
    if (props.extraPoistion === 'bottom') {
      selectOption.value.push(...props.extraOptions)
    }
    if (props.extraPoistion === 'top') {
      selectOption.value.unshift(...props.extraOptions)
    }
  }
}
addExtraOptions()

const handleVisibleChange = (visible: boolean) => {
  if (visible) {
    if (props.getDate !== undefined) {
      selectOption.value = props.getDate()
      addExtraOptions()
    }
  }
}

const textValue = computed(() => {
  if (props.showTextValue) {
    return getLabel(_modelValue.value)
  }
})

const emit = defineEmits(['change', 'clickFooter'])

// 点击底部的时间
const clickFooter = () => {
  emit('clickFooter', props.footerFunctionName)
}

const getLabel = (value) => {
  const option = selectOption.value.find((o) => o.value === value)
  return option ? option.label : ''
}

const handleChange = (value) => {
  const label = getLabel(value)
  emit('change', value, label)
}

// 增加新的选项
const addNewOption = (newOption) => {
  selectOption.value.push(newOption)
}

defineExpose({ addNewOption })
</script>

<style>
.select-single-container {
  width: 100%;
}
</style>

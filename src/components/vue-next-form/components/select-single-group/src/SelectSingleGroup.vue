<template>
  <div class="w-full text-left">
    <el-text v-show="props.showTextValue">{{ textValue }}</el-text>
    <el-select v-show="!props.showTextValue" class="w-full" v-model="_modelValue" v-bind="$attrs" v-bind.prop="props" @change="handleChange" @visible-change="visibleChange">
      <el-option-group v-for="group in selectOption" :key="group.label" :label="group.label">
        <el-option v-for="item in group.options" :key="item['value']" :label="item['label']" :value="item['value']" :disabled="props.disabledOptions!.includes(item['value'] as never)" />
      </el-option-group>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SelectSingleGroupPropsInterface } from './selectSingleGroupProps'

defineOptions({
  name: 'AhSelectSingleGroup',
})

const emit = defineEmits(['change'])

const _modelValue = defineModel<string | number>()

const props = withDefaults(defineProps<SelectSingleGroupPropsInterface>(), {
  placeholder: '请选择',
  url: '',
  disabledOptions: () => [],
  extraPoistion: 'bottom',
})

const selectOption = ref<any>([])

if (props.getData !== undefined) {
  selectOption.value = props.getData()
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

// 刷新配置文件
const visibleChange = (visible: boolean) => {
  if (visible) {
    if (props.getData !== undefined) {
      selectOption.value = props.getData()
      addExtraOptions()
    }
  }
}

const textValue = computed(() => {
  if (props.showTextValue) {
    const option = selectOption.value.find((o) => o.value === _modelValue.value)
    return option ? option.label : ''
  }
})

const get0ptionsLabel = (value) => {
  for (let i = 0; i < selectOption.value.length; i++) {
    const options = selectOption.value[i].options
    for (let j = 0; j < options.length; j++) {
      if (options[j].value === value) {
        return options[j].label
      }
    }
  }
}

const handleChange = (value) => {
  const lable = get0ptionsLabel(value)
  emit('change', value, lable)
}
</script>

<style scoped>
.el-select-dropdown__header {
  padding-top: 5px;
}
</style>

<template>
  <el-input
    v-model="modelValue"
    type="text"
    :placeholder="props.placeholder"
    :clearable="props.clearable"
    :disabled="props.disabled"
    :size="props.size"
  ></el-input>
</template>

<script setup lang="ts">
import { ElInput } from "element-plus";
import { InputTextPropsInterface } from "./InputTextProps";

const modelValue = defineModel("modelValue", { type: String, default: "" });

const props = withDefaults(defineProps<InputTextPropsInterface>(), {
  placeholder: "请输入",
  clearable: false,
  disabled: false,
  size: "default",
});
</script>

<style></style>

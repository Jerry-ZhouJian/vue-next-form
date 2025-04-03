<template>
  <el-form class="v-form-box" label-position="left" :inline="false">
    <el-form-item label="test">
      <InputText :clearable="true"></InputText>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test"> <InputText></InputText> </el-form-item
    ><el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
    <el-form-item label="test">
      <ElDatePicker type="daterange"></ElDatePicker>
    </el-form-item>
    <el-form-item label="test">
      <InputText></InputText>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { ElForm, ElFormItem, ElDatePicker } from "element-plus";

import { InputText } from "../components";

defineOptions({
  name: "VueNextForm",
});
</script>
<style>
.v-form-box {
  width: 100%;
  text-align: left;
}
</style>

<template>
  <el-select style="width: 100%"  v-bind="$attrs"  :modelValue="modelValue" @change="change">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.name"
        :value="item.value"
    />
  </el-select>
</template>

<script setup lang="ts">
import { OptionsType } from "./type"

defineProps<{
  modelValue: string[],
  options:OptionsType
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: string[]): void,
}>()


const change = (v:string[]) => {
  emit('update:modelValue',v)
}

</script>


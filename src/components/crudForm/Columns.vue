<template>
  <template v-for="f in fields">
    <el-table-column
        v-bind="f.colAttrs"
        v-if="f.show"
        :prop="f.field"
        :label="f.hasOwnProperty('title') ? f.title : f.field"
        show-overflow-tooltip>
      <template #default="s">
        {{ f.hasOwnProperty('func') ? f.func(s.row) : s.row[f.field] }}
      </template>
    </el-table-column>
  </template>
</template>

<script setup lang="ts">

import {withDefaults} from "vue";
import {TableColumns} from "@/components/crudForm/type";

const props = withDefaults(defineProps<{
  fields: TableColumns[],
}>(), {fields: () => []})

</script>

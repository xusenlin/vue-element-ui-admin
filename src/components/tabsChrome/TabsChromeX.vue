<script setup lang="ts">
import VTab from "./Tab.vue"
import {Tab} from "@/components/tabsChrome/tab";

const props = defineProps<{
  tabs: Tab[],
  activePath: string
}>()

const emit = defineEmits<{
  (e: 'clickTab', t: Tab): void,
  (e: 'removeTab', t: Tab): void,
}>()

const clickTab = (t: Tab) => {
  if (t.path == props.activePath) {
    return
  }
  emit("clickTab", t)
}
const removeTab = (t: Tab) => {
  if (props.tabs.length == 1) {//最少保留一个
    return
  }
  emit("removeTab", t)
}

</script>

<template>
  <div class="tabs">
    <VTab v-for="t in tabs"
          :tab="t"
          :active="activePath === t.path"
          @click="clickTab(t)"
          @closeTab="removeTab"
    />
  </div>
</template>

<style scoped lang="scss">
.tabs {
  padding: 8px 10px 0 10px;
  display: flex;
  width: 100%;

  .item {

  }
}
</style>

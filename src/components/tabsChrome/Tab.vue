<script setup lang="ts">
import {Tab} from "./tab.d"

const props = defineProps<{
  active?: boolean,
  tab: Tab,
}>()

const emit = defineEmits<{
  (e: 'closeTab', t: Tab): void,
}>()

const closeTab = () => {
  emit("closeTab", props.tab)
}

</script>

<template>
  <div class="tab" :class="{active}">
    <div class="title">
      {{ tab.title }}
    </div>
    <div @click.stop="closeTab" class="close-icon" v-if="active && tab.closable">
      <svg width="16" height="16" stroke="#595959">
        <path d="M 4 4 L 12 12 M 12 4 L 4 12"></path>
      </svg>
    </div>
    <svg class="tabs-before-l" width="7" height="7">
      <path d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z"></path>
    </svg>
    <svg class="tabs-before-r" width="7" height="7">
      <path d="M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z"></path>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.tab {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  max-width: 140px;
  min-width: 100px;
  flex: 1;
  font-size: 14px;
  transition: background-color 0.3s;

  .title {
    width: 100%;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @at-root .dark {
    .tab {
      &.active {
        background-color: #121212;

        .tabs-before-l, .tabs-before-r {
          fill: #121212;
        }
      }
    }
  }
  &.active {
    background-color: #fff;

    .tabs-before-l, .tabs-before-r {
      fill: #fff;
    }
  }

  .close-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;

    &:hover {
      background-color: #eee;
    }
  }

  .tabs-before-l, .tabs-before-r {
    bottom: 0px;
    position: absolute;
    fill: transparent;
  }

  .tabs-before-l {
    left: -7px;
  }

  .tabs-before-r {
    right: -7px;
  }
}
</style>

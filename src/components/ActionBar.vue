<script setup lang="ts">
import {Search,RefreshRight} from '@element-plus/icons-vue'

const emit = defineEmits<{
  (e: 'refresh'): void,
  (e: 'reset'): void,
}>()
</script>

<template>
  <el-card class="action-card" shadow="never">
    <template #header>
      <div class="action-card-header">
        <div class="l">
          <slot name="left"></slot>
        </div>
        <div class="r">
          <slot name="right"></slot>
          <el-button style="margin-left: 10px" type="success" @click="emit('refresh')">
            查询
            <el-icon class="el-icon--right">
              <Search  />
            </el-icon>
          </el-button>
          <el-button type="warning" @click="emit('reset')">
            重置
            <el-icon class="el-icon--right">
              <RefreshRight />
            </el-icon>
          </el-button>
        </div>
      </div>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
.action-card{

  .action-card-header {
    display: flex;
    justify-content: space-between;
    .r,.l{
      display: flex;
    }
  }
  :deep(.el-card__header){
    padding: 10px;
  }

}
.el-card{
  border: none!important;
}
</style>

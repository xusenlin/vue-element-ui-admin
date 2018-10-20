<template>
  <span>
    <span style="margin-right: 8px"><slot></slot></span>
    <el-tooltip :content="content" :placement="placement">
      <i class="el-icon-question" style="cursor: pointer;"></i>
    </el-tooltip>
  </span>
</template>
<script>
  export default {
    name: 'HelpHint',
    props: {
      placement: {
        default: 'top'
      },
      content: String,
    },
    data() {
      return {}
    },
  }
</script>


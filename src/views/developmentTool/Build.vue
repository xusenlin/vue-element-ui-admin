<template>

    <el-card style="border-radius: 0">
      <div slot="header">
        <span>BuildVueCode Beta v0.1</span>
        <div style="float: right">
          <HelpHint
              content="注意事项！"
          ></HelpHint>
        </div>
      </div>
      <div class="tools">
        <el-alert
            title="最近辞职了，比较忙。"
            type="info"
            description="请不要担心，这个菜单以及这个页面只会在开发阶段出现！该功能还在开发，最近比较忙，可能需要等上一段时间。"
            show-icon>
        </el-alert>
      </div>
    </el-card>
</template>

<script>
  import HelpHint from '@/components/HelpHint.vue';

  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    mounted: function () {

    },
    components: {
      HelpHint
    }
  }
</script>
<style lang="scss">
  .tools{

  }
</style>

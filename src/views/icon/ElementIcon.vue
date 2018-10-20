<template>
  <div>
    <el-card class="box-card" v-for="(icons,title) in ElementIcon" :key="title">
      <div slot="header">
        <span>{{ title }}</span>
        <a href="http://fontawesome.io/" target="_blank" style="float: right; padding: 3px 0;font-size: 12px;"
           type="text">More <i class="el-icon-d-arrow-right"></i></a>
      </div>
      <el-row :gutter="20" class="font-awesome">
        <el-col :span="4" v-for="(v,i) in icons" :key="i">
          <i style="font-size: 24px" :class="v"></i><br/>{{ v }}
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import ElementIcon from './ElementIcon';

  export default {
    data() {
      return {
        ElementIcon: ElementIcon,
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>
<style lang="less">
  .box-card {
    border-radius: 0;
  }

  .font-awesome .el-col {
    margin: 20px 0;
    text-align: center;
  }
</style>
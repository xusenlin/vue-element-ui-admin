<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>{{ $route.meta.title}}</span>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="基本信息" name="index">

          <div class="panel-heading">
            <img src="http://placeimg.com/200/200/scenery">
            <span class="title"><p class="role">Admin</p><span class="name">超级管理员</span> </span>
            <i class="el-icon-edit-outline" style="font-size: 28px; position: absolute; right: 31px; cursor: pointer;"></i>
          </div>
          <div class="panel-body">
            <ul>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-id-card"></i></el-col>
                  <el-col :span="12">ID</el-col>
                  <el-col :span="6">1</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-envelope"></i></el-col>
                  <el-col :span="12">EMAIL</el-col>
                  <el-col :span="6">Admin@.admin.com</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-female"></i></el-col>
                  <el-col :span="12">性别</el-col>
                  <el-col :span="6">女</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-birthday-cake"></i></el-col>
                  <el-col :span="12">生日</el-col>
                  <el-col :span="6">07.05</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-phone"></i></el-col>
                  <el-col :span="12">手机</el-col>
                  <el-col :span="6">15117XXXX24</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-calendar"></i></el-col>
                  <el-col :span="12">注册时间</el-col>
                  <el-col :span="6">2017-08-23</el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="头像修改" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="密码修改" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        activeName: 'index'
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
    .panel-heading{
      display: flex;
      text-align: left;
      width: 100%;
      border-bottom: 1px solid #eeeff1;
      padding: 15px;
      font-weight: bold;
      img{
        margin-right: 15px;
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name{
          color: #367fa9;
          font-size: 18px;
        }
        .role{
          color: #99a9c0;
        }
      }
    }
    .panel-body{
      color: #3c8dbc;
      ul{
        li{
          border-bottom: 1px solid #eeeff1;
          padding: 0 15px;
          height: 45px;
          line-height: 45px;
        }
      }
    }
  }
</style>
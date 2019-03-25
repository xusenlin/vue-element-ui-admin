<template>
  <div class="user-list">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="editUser(false)">添加</el-button>
      <div style="float: right">
        <el-input
            placeholder="请输入用户昵称！"
            size="small"
            style="width: 140px"
            v-model="params.name"
            @clear="searchUser"
            clearable>
        </el-input>
        <el-button @click="searchUser" type="success" icon="el-icon-search" size="small"></el-button>
      </div>
    </ToolBar>
    <el-table
        :data="usersData"
        border
        ref="table"
        style="width: 100%">
      <el-table-column
          prop="loginname"
          label="登录账号">
      </el-table-column>
      <el-table-column
          prop="nickname"
          label="昵称">
      </el-table-column>
      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>
      <el-table-column
          prop="cellphone"
          label="手机">
      </el-table-column>
      <el-table-column
          prop="result"
          label="用户体质">
        <div slot-scope="scope" style="width: 100%;text-align: center">{{ scope.row.result ?
          $Config.tizhiCategories[scope.row.result]:'未判定' }}
        </div>
      </el-table-column>
      <el-table-column
          prop="sex"
          width="66"
          label="性别">
        <div slot-scope="scope" style="width: 100%;text-align: center">{{ $Config.sex[scope.row.sex] }}</div>
      </el-table-column>
      <el-table-column
          prop="active"
          width="100"
          label="是否激活">
        <div slot-scope="scope" style="width: 100%;text-align: center">
          <el-tag v-if="scope.row.active">正常</el-tag>
          <el-tag v-else type="danger">被删除</el-tag>
        </div>
      </el-table-column>
      <el-table-column
          label="操作"
          :render-header="tableAction"
          width="180">
        <template slot-scope="scope">
            <el-button @click="resetting(scope.row.id)" type="warning" style="transition: .4s;"  :ref="scope.row.id"  icon="el-icon-refresh" size="small" circle></el-button>
            <el-button @click="editUser(scope.row)" type="primary" icon="el-icon-edit" size="small" circle></el-button>
            <el-button @click="deleteUser(scope.row.id)" v-if="scope.row.active != '0'" type="danger" icon="el-icon-delete" circle size="small"></el-button>
            <el-button @click="deleteUser(scope.row.id)" v-else icon="el-icon-check" circle size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar.vue';
  import HelpHint from '@/components/HelpHint.vue';

  export default {
    data() {
      return {
        params: {
          name: '',
        },
        usersData: [
          {id:1,loginname:'Admin',nickname:'管理员',email:'Admin@.admin.com',cellphone:'151178xxxx',sex:'male',active:1},
          {id:2,loginname:'SenLin',nickname:'森林',email:'SenLin@.admin.com',cellphone:'151178xxxx',sex:'unknown',active:0},
          {id:4,loginname:'Admin1',nickname:'赵晓',email:'Admin@.admin.com',cellphone:'151178xxxx',sex:'male',active:1},
          {id:5,loginname:'Wujun',nickname:'吴军',email:'Admin@.admin.com',cellphone:'151178xxxx',sex:'male',active:1},
          {id:5,loginname:'Huang',nickname:'黄家',email:'Admin@.admin.com',cellphone:'151178xxxx',sex:'male',active:1},
        ]
      }
    },
    methods: {
      searchUser(){
        let tableRow = this.$refs.table.$el.querySelectorAll('tbody tr');
        let tableRowHeight = tableRow[1].offsetHeight;
        let isjump = false;
        for (let i = 0;i < this.usersData.length; i ++){
          if(this.params.name && this.usersData[i].nickname.indexOf(this.params.name) != -1){
            tableRow[i].style.backgroundColor = '#85ce61';
            if(! isjump){
              scrollTo(0,i*tableRowHeight + 66 );isjump = true;
            }
          }else {
            tableRow[i].style.backgroundColor = '#fff';
          }
        }
      },
      tableAction(){
        return this.$createElement('HelpHint',{
            props:{
              content:'重置密码为123456 / 编辑用户 / 删除或恢复用户'
            }
          },'操作');
      },
      editUser(data) {

      },
      UploadUser(data) {

      },
      deleteUser(id) {

          this.$message({
            message: '这里请求api删除或者恢复用户之后刷新分页组件，列表自动更新',
            type: 'success'
          });

      },
      resetting(id) {

      let dom = this.$refs[id].$el;
      dom.style.transform = 'rotate(180deg)';
      setTimeout(()=>{dom.style.transform = 'rotate(0deg)'},600)
      this.$message({
        message: '已经成功重置密码',
        type: 'success'
      });

      },


    },
    components: {
      ToolBar,HelpHint
    }
  }
</script>
<style lang="scss">

</style>

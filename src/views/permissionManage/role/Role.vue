<template>
  <div class="role-list">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="editRole(false)">添加</el-button>
      <div style="float: right">
        <el-input
            placeholder="请输入角色名称！"
            size="small"
            style="width: 140px"
            v-model="params.name"
            @clear="searchRole"
            clearable>
        </el-input>
        <el-button @click="searchRole" type="success" icon="el-icon-search" size="small"></el-button>
      </div>
    </ToolBar>
    <el-table
        :data="roleData"
        border
        ref="table"
        style="width: 100%">
      <el-table-column
          prop="key"
          label="角色key">
      </el-table-column>
      <el-table-column
          prop="name"
          label="角色名称">
      </el-table-column>
      <el-table-column
          prop="description"
          label="描述">
      </el-table-column>
      <el-table-column
          label="操作"
          :render-header="tableAction"
          width="120">
        <template slot-scope="scope">
          <el-button @click="editRole(scope.row)" type="primary" icon="el-icon-edit" size="small" circle></el-button>
          <el-button @click="currentEditPermissions = scope.row" type="success" icon="el-icon-setting" size="small"
                     circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <RoleEdit
        :title="roleEditTitle"
        :dialogFormVisible="dialogFormVisible"
        :data="currentEditRole"
        @val-change="roleEditChange"
        @cancel="dialogFormVisible = false"
    >
    </RoleEdit>
    <PermissionsEdit
        :role="currentEditPermissions"
        @success="currentEditPermissions = false;"
        @cancel="currentEditPermissions = false;"
    ></PermissionsEdit>
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar.vue';
  import HelpHint from '@/components/HelpHint.vue';
  import RoleEdit from './RoleEdit.vue'
  import PermissionsEdit from './PermissionsEdit.vue'

  export default {
    data() {
      return {
        roleEditTitle: '角色编辑',
        currentEditRole: false,
        dialogFormVisible: false,
        currentEditPermissions: false,
        params: {
          name: '',
        },
        roleData: [
          {id: 1, key: 'SuperAdmin', name: '超级管理员', description: '具有最高权限,全站唯一'},
          {id: 2, key: 'NormalAdmin', name: '普通管理员', description: '拥有所有权限,除权限管理权限'},
          {id: 4, key: 'Admin', name: '一般管理员', description: '只有查看权限'},
        ]
      }
    },
    methods: {
      searchRole() {
        let tableRow = this.$refs.table.$el.querySelectorAll('tbody tr');
        let tableRowHeight = tableRow[1].offsetHeight;
        let isjump = false;
        for (let i = 0; i < this.roleData.length; i++) {
          if (this.params.name && this.roleData[i].name.indexOf(this.params.name) != -1) {
            tableRow[i].style.backgroundColor = '#85ce61';
            if (!isjump) {
              scrollTo(0, i * tableRowHeight + 66);
              isjump = true;
            }
          } else {
            tableRow[i].style.backgroundColor = '#fff';
          }
        }
      },
      tableAction() {
        return this.$createElement('HelpHint', {
          props: {
            content: '编辑角色 / 编辑角色权限'
          }
        }, '操作');
      },
      roleEditChange(data) {
        console.log(data);
        let self = this;

        self.$notify({
          title: self.roleEditTitle + '成功！',
          message: '自己对接Api,并调用你的初始化列表函数！',
          type: 'success'
        });
        self.dialogFormVisible = false;
        // self.$Api.editRole(data,r=>{
        //   self.$message.success(self.roleEditTitle+'成功！');
        //   self.init();
        //   self.dialogFormVisible = false;
        // });
      },
      editRole(data) {
        if (data) {
          this.currentEditRole = data;
        } else {
          this.currentEditRole = false;
        }

        this.dialogFormVisible = true;

      },
      UploadRole(data) {

      },
      deleteRole(id) {

        this.$message({
          message: '这里请求api删除或者恢复用户之后刷新分页组件，列表自动更新',
          type: 'success'
        });

      },
      resetting(id) {

        let dom = this.$refs[id].$el;
        dom.style.transform = 'rotate(180deg)';
        setTimeout(() => {
          dom.style.transform = 'rotate(0deg)'
        }, 600)
        this.$message({
          message: '已经成功重置密码',
          type: 'success'
        });

      },


    },
    components: {
      ToolBar, HelpHint, RoleEdit, PermissionsEdit
    }
  }
</script>
<style lang="less">

</style>

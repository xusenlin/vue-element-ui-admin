<template>
  <div class="role-dialog">
    <el-dialog :title="'编辑“'+role.name+'”的权限'" :visible="dialogFormVisible" :show-close="false">
      <el-table
          :data="allPermissions"
          border
          height="500"
          ref="permissionsTable"
          @selection-change="changeFun"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="35">
        </el-table-column>
        <el-table-column
            prop="name"
            label="权限KEY">
        </el-table-column>
        <el-table-column
            prop="display_name"
            label="权限名称">
        </el-table-column>
        <el-table-column
            prop="description"
            label="权限描述">
          <div slot-scope="scope">
            {{ scope.row.description ? scope.row.description : '暂无描述' }}
          </div>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <div style="float: left">
          <el-input
              placeholder="搜索权限名称"
              v-model="searchPermissionsDisplayName"
              clearable>
          </el-input>
        </div>
        <el-button @click="dialogFormVisible = false,$emit('cancel');">取 消</el-button>
        <el-button type="primary" :loading="btnLoading" @click="btnOk">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import AllRouter from '@/router/'

  export default {
    name: 'PermissionsEdit',
    props: {
      role: [Object, Boolean],

    },
    data() {
      return {
        dialogFormVisible: false,
        btnLoading: false,
        allPermissions: [],
        searchPermissionsDisplayName: '',
        multipleSelection:[]
      }
    },
    watch: {
      'role': {
        handler: function () {
          let self = this;
          if (!self.role) return;
          self.dialogFormVisible = true;


          //获取当前角色的权限并勾选在权限表里
          // self.$Api.getPermissions({id:self.role.id}, r => {
          //   this.$refs.table.clearSelection();
          //   r.forEach(selectRoleId =>{
          //     self.allPermissions.forEach(row=>{
          //       if(row.id == selectRoleId)self.$refs.table.toggleRowSelection(row,true);
          //     })
          //   })
          //
          // });

        },
        deep: true
      },
      'searchPermissionsDisplayName': {
        handler: function () {
          this.searchPermissions();
        }

      }
    },
    methods: {
      changeFun(val) {
        this.multipleSelection = val;
      },
      searchPermissions() {
        let tableRow = this.$refs.permissionsTable.$el.querySelectorAll('tbody tr');
        let wrapperScrolling = this.$refs.permissionsTable.$el.getElementsByClassName('el-table__body-wrapper')[0];

        let tableRowHeight = tableRow[1].offsetHeight;
        let isjump = false;
        for (let i = 0; i < this.allPermissions.length; i++) {
          if (this.searchPermissionsDisplayName && this.allPermissions[i].display_name.indexOf(this.searchPermissionsDisplayName) != -1) {
            tableRow[i].style.backgroundColor = '#85ce61';
            if (!isjump) {
              wrapperScrolling.scrollTo(0, i * tableRowHeight);
              isjump = true;
            }
          } else {
            tableRow[i].style.backgroundColor = '#fff';
          }
        }
      },
      btnOk() {
        let self = this;
        //这块逻辑建议放到父组件role.vue里去做 this.$emit('success',{role:self.role,multipleSelection:self.multipleSelection});
        self.$notify({
          title: '编辑“' + self.role.name + '”权限成功！',
          message: '自己对接Api,角色id：' + self.role.id+',选择了'+self.multipleSelection.length+'项权限',
          type: 'success'
        });

        this.$emit('success');
        this.btnLoading = true;
        setTimeout(() => {
          this.btnLoading = false;
          this.dialogFormVisible = false;
          this.$refs.permissionsTable.clearSelection()
        }, 600)
      },
    },
    mounted: function () {
      //所有的权限可以使用前端的路由来生成，这只是一种思路，具体怎么做，取决于你们的后台权限架构。
      let self = this;
      let AllPermissions = AllRouter.options.routes[0].children;


      for (let i = 0; i < AllPermissions.length; i++) {
        let permissions = AllPermissions[i];
        self.allPermissions.push({
          id: '',
          name: permissions.name + 'View',
          display_name: permissions.meta.title + '查看权限',
          description: '查看权限'
        });
        self.allPermissions.push({
          id: '',
          name: permissions.name + 'Edit',
          display_name: permissions.meta.title + '编辑权限',
          description: '编辑权限'
        });
      }


      // self.$Api.getPermissions({}, r => {
      //     self.allPermissions = r;
      // });
    },
    components: {}
  }
</script>
<style lang="less">
  .permissions-dialog {

  }
</style>

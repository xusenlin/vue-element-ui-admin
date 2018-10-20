<template>
  <div>
    <ToolBar>

      <div style="float: right">
        <el-input
                placeholder="搜索权限"
                size="small"
                style="width: 140px"
                v-model="searchName"
                clearable>
        </el-input>
      </div>
    </ToolBar>
    <el-table
            :data="tableData3"
            border
            ref="permissionsList"
            style="width: 100%">
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
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar.vue';
  import AllRouter from '@/router/'

  export default {
    data() {
      return {
        searchName:'',
        tableData3: []
      }
    },
    methods: {

    },
    watch: {
      'searchName': {
        handler: function () {
          let tableRow = this.$refs.permissionsList.$el.querySelectorAll('tbody tr');

          let tableRowHeight = tableRow[1].offsetHeight;
          let isjump = false;
          for (let i = 0; i < this.tableData3.length; i++) {
            if (this.searchName && this.tableData3[i].display_name.indexOf(this.searchName) != -1) {
              tableRow[i].style.backgroundColor = '#85ce61';
              if (!isjump) {
               scrollTo(0, i * tableRowHeight+50);
                isjump = true;
              }
            } else {
              tableRow[i].style.backgroundColor = '#fff';
            }
          }
        }

      }
    },
    mounted:function () {
      let self = this;
      let AllPermissions = AllRouter.options.routes[0].children;


      for (let i = 0; i < AllPermissions.length; i++) {
        let permissions = AllPermissions[i];
        self.tableData3.push({
          id: '',
          name: permissions.name + 'View',
          display_name: permissions.meta.title + '查看权限',
          description: '查看权限'
        });
        self.tableData3.push({
          id: '',
          name: permissions.name + 'Edit',
          display_name: permissions.meta.title + '编辑权限',
          description: '编辑权限'
        });
      }
    },
    components: {
        ToolBar
    }
  }
</script>
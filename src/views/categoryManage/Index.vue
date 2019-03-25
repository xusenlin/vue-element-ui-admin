<template>
  <div class="category">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="addCategory(false)">添加</el-button>
    </ToolBar>
    <el-tree
        :indent="38"
        :props="props"
        :data="data"
        @node-click="handleNodeClick"
        :render-content="renderContent"
    >
    </el-tree>
    <CategoryEdit
        :title="categoryEditTitle"
        :dialogFormVisible="dialogFormVisible"
        :data="currentEditCategory"
        :departTree="data"
        @val-change="categoryEditChange"
        @cancel="dialogFormVisible = false"
    >
    </CategoryEdit>
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar.vue';
  import TreeDetails from './TreeDetails.vue';
  import CategoryEdit from './CategoryEdit.vue'
  export default {
    data() {
      return {
        categoryEditTitle:'',
        dialogFormVisible:false,
        currentEditCategory:null,
        data: [
          {
            id:1,
            name:'新闻中心',
            children:[
              {
                id:2,
                name:'公司新闻',
                children:[]
              },
              {
                id:3,
                name:'行业新闻',
                children:[]
              }
            ]
          },{
            id:4,
            name:'一级分类目录',
            children:[
              {
                id:5,
                name:'二级分类目录',
                children:[
                  {
                    id:6,
                    name:'三级分类目录',
                    children:[
                      {
                        id:7,
                        name:'四级分类目录',
                        children:[
                          {
                            id:8,
                            name:'无限极分类',
                            children:[]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },{
            id:10,
            name:'其他分类',
            children:[]
          }
        ],
        props: {
          label: 'name',
          children: 'children'
        },
      }
    },
    methods: {
      deleteCategory(id){
        let self = this;
        self.$confirm('此操作将删除该分类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            //========================================
            self.$notify({
              title: '成功',
              message: '请参照下面代码完成Api对接！',
              type: 'success'
            });
            self.dialogFormVisible = false;
            //========================================删除这坨
          // self.$Api.departDelete({id:id},r=>{
          //   self.$notify({
          //     title: '成功',
          //     message: '部门删除成功！',
          //     type: 'success'
          //   });
          //   self.init();
          // });
        }).catch(() => {

        });

      },
      addCategory(data){

        let self = this;
        self.dialogFormVisible = true;
        self.currentEditCategory = null;
        if(!data) {

          self.categoryEditTitle = '添加顶级分类';
        } else {
          self.currentEditCategory = {};
          self.currentEditCategory.pid = data.id;//添加子部门，把当前部门id作为新增部门pid
          self.categoryEditTitle = '添加“'+data.name+'”的子分类';
        }

      },
      editCategory(data){
        let self = this;
        self.dialogFormVisible = true;
        self.currentEditCategory = data;
        self.categoryEditTitle = '修改“'+data.name+'”分类';
      },

      categoryEditChange(data){
        let self = this;
        //========================================
        self.$notify({
          title: '成功',
          message: '请参照下面代码完成Api对接！',
          type: 'success'
        });
        self.dialogFormVisible = false;
        //========================================删除这坨
        // self.$Api.departEdit({data:data},r=>{
        //   self.$message.success(self.departEditTitle+'成功！');
        //   self.init();
        //   self.dialogFormVisible = false;
        // });

      },
      handleNodeClick(data,k) {

      },
      renderContent(h, { node, data, store }) {
        return this.$createElement('TreeDetails',{props: {data:node},on:{
            'add-category': this.addCategory,
            'edit-category':this.editCategory,
            'delete-category':this.deleteCategory,
          }});
      },
      init(){
        let self = this;
        // self.$Api.departList({}, r => {
        //   self.data = self.$Func.departTree(r);
        // });
      }

    },
    components: {
      ToolBar,TreeDetails,CategoryEdit
    },
    mounted: function () {
      this.init();
    }
  }
</script>
<style lang="scss">
  .category{
    .el-tree-node__content {
      height: 40px;
      line-height: 40px;
    }
  }

</style>

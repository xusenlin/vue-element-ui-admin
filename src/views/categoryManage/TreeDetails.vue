<template>
  <div class="tree-details">
    <el-row type="flex">
      <el-col style="flex: 1">
        <span style="font-size: 13px">
          <span style="color: #3c8dbc">【</span>{{ data.data.name }}<span style="color: #3c8dbc">】</span>
          <!--<el-tag size="mini">{{data.childNodes.length}}</el-tag>-->
        </span>
      </el-col>
      <el-col style="width: 180px">
        <el-button @click="info(data,$event)" type="info" icon="el-icon-tickets" circle  size="mini"></el-button>
        <el-button @click="edit(data,$event)" type="primary" icon="el-icon-edit" circle  size="mini"></el-button>
        <el-button @click="add(data,$event)" type="success" icon="el-icon-plus" circle  size="mini"></el-button>
        <el-button @click="deleteDepart(data.data.id,$event)" type="danger" icon="el-icon-delete" circle  size="mini"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    name:'TreeCategory',
    props: {
      data:Object,
    },
    data() {
      return {

      }
    },
    methods: {
      deleteDepart(id,e){
        this.$emit('delete-category',id);
        e.cancelBubble = true;
      },
      add(node,e){
        this.$emit('add-category',node.data);
        e.cancelBubble = true;
      },
      edit(node,e){
        this.$emit('edit-category',node.data);
        e.cancelBubble = true;
      },
      info(node,e){
        let info = node.data;
        this.$alert('<strong style="margin-right: 18px">分类名称:</strong>'+info.name+' <br><br><strong>分类描述:</strong><br><div class="category-description">'+(info.comment?info.comment:"暂无描述")+'</div>', '分类详情', {
          type: 'info',
          dangerouslyUseHTMLString: true,
        }).then(r=>{});

        e.cancelBubble = true;
      }

    },
    mounted: function () {

        console.log(this.data)

    },
    components: {

    }
  }
</script>
<style lang="less">
  .tree-details{
    flex: 1;
    .el-button.is-circle {
      padding: 8px;
    }
  }
  .category-description{
    text-indent: 2em;
  }
</style>
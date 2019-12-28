<template>
  <div>
    <ToolBar>
      <div>
        <el-button type="primary" size="small" @click="showEditDialog = true"
          >编辑添加，字段各种规则验证示例</el-button
        >
        <el-button type="primary" size="small" @click="exportTable"
          >本地导出表格</el-button
        >
      </div>
      <div>
        <el-input
          placeholder="请输入文章标题"
          size="small"
          style="width: 140px"
          v-model="searchParams.title"
          clearable
        ></el-input>
        <el-select
          v-model="searchParams.type"
          clearable
          style="width: 140px"
          placeholder="请选择类型"
          size="small"
        >
          <el-option label="招聘信息" value="1"></el-option>
          <el-option label="技术交流" value="2"></el-option>
        </el-select>
        <el-button type="success" size="small" @click="refresh()"
          >查询</el-button
        >
        <el-button type="warning" size="small" @click="clearSearchParams()"
          >重置</el-button
        >
      </div>
    </ToolBar>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="文章标题"> </el-table-column>
      <el-table-column prop="" label="作者">
        <template slot-scope="s">
          {{ s.row.author.loginname }}
        </template>
      </el-table-column>
      <el-table-column prop="visit_count" label="浏览量"></el-table-column>
      <el-table-column prop="reply_count" label="回复"></el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <div slot-scope="s">
          <el-button type="primary" size="small" @click="routeDemo(s.row)"
            >多层级路由面包屑示例</el-button
          >
          <el-button type="danger" size="small" @click="removeItem(s.row)"
            >删除</el-button
          >
        </div>
      </el-table-column>
    </el-table>
    <!--    <Pagination-->
    <!--      :params="searchParams"-->
    <!--      :requestFunc="requestFunc"-->
    <!--      ref="pagination"-->
    <!--      @returnData="returnData"-->
    <!--    />-->
    <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" />
  </div>
</template>

<script>
import { topics } from "@/api/articleManage/list";
import { exportCvsTable } from "@/utils/cvs";
import { resetObject } from "@/utils/common";
import Edit from "./Edit.vue";
export default {
  data() {
    return {
      searchParams: {
        title: "",
        type: ""
      },
      showEditDialog: false,
      tableData: []
    };
  },
  created() {
    topics()
      .then(r => {
        this.tableData = r;
      })
      .catch(() => {});
  },
  methods: {
    routeDemo() {
      this.$message.info("待添加");
    },
    exportTable() {
      exportCvsTable(
        [
          { title: "文章标题", field: "title" },
          { title: "浏览量", field: "visit_count" }
        ],
        this.tableData,
        "文章列表"
      );
    },
    refresh() {
      //this.$refs.pagination.Refresh(); //分页刷新
    },
    returnData(pageList) {
      this.tableData = pageList.list;
    },
    clearSearchParams() {
      resetObject(this.searchParams);
      this.refresh();
    },
    removeItem(row) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          row.d = 0;
          // updateStatus({ id: row.id})
          //   .then(r => {
          //     this.$message({
          //       type: "success",
          //       message: "操作成功!"
          //     });
          //     this.refresh();
          //   })
          //   .catch(() => {});
        })
        .catch(() => {});
    }
  },
  components: { Edit }
};
</script>

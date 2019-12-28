<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageParams.pageNum"
      :page-sizes="pageSizes"
      :page-size="pageParams.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import Config from "@/config/app.js";
export default {
  name: "Pagination",
  props: {
    requestFunc: [Function, Boolean],
    filterParams: {
      type: Function,
      default: p => {
        return p;
      }
    },
    params: Object,
    paginationField: {
      type: String,
      default: ""
    }
  },
  data: () => {
    return {
      total: 0,
      pageSizes: Config.pageSizesArr,
      pageParams: {
        pageSize: Config.pageSizesArr[0],
        pageNum: 1
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageParams.pageSize = val;
      this.getPageData();
    },
    handleCurrentChange(val) {
      this.pageParams.pageNum = val;
      this.getPageData();
    },
    getPageData() {
      if (!this.requestFunc) {
        this.$emit("returnData", []);
        return;
      }
      let p = this.filterParams({ ...this.params, ...this.pageParams });
      this.requestFunc(p)
        .then(result => {
          let r = result;
          if (this.paginationField) {
            r = result[this.paginationField];
          }
          this.total = parseInt(r.total);
          this.$emit("returnData", result);
        })
        .catch(() => {});
    },
    Refresh() {
      this.pageParams.pageNum = 1;
      this.getPageData();
    },
    GetAllParam() {
      return { ...this.params, ...this.pageParams };
    }
  },
  mounted: function() {
    this.getPageData();
  }
};
</script>

<style scoped>
.pagination {
  padding: 10px;
  display: flex;
  background: #fff;
}
</style>

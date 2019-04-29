<template>
    <div class="pagination">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageParams.page"
                :page-sizes="pageSizes"
                :page-size="pageParams.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    //如果需要保存分页信息和搜索数据可以在组件销毁之前用页面关键key保存在本地
    //也可以使用 keep-alive保存页面
    import G from 'lodash/get'

    const pageSizesArr = [8, 16, 32];
    export default {
        name: "Pagination",
        props: {
            requestFunc: Function,
            params: Object,
        },
        data: () => {
            return {
                total: 0,
                pageSizes: pageSizesArr,
                pageParams: {
                    pageSize: pageSizesArr[0],
                    page: 1
                }
            }
        },
        methods: {
            handleSizeChange(val) {
                this.pageParams.pageSize = val;
                this.getPageData();
                //console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.pageParams.page = val;
                this.getPageData();
                //console.log(`当前页: ${val}`);
            },
            getPageData() {

                this.requestFunc({...this.params, ...this.pageParams}).then(r => {
                    this.total = G(r, 'total', 0);
                    this.$emit('returnData', r);//this.$emit('returnData', G(r,'list',[]));
                }).catch(_ => {
                })
            },
            Refresh() {
                this.getPageData();
            },
        },
        mounted: function () {
            this.getPageData();
        },
    }
</script>

<style scoped>
    .pagination {
        padding: 10px;
        display: flex;
        background: #fff;
    }
</style>
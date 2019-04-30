<style lang="scss">@import "./css/style.scss";</style>
<template>
    <div id="keyword">
        <ToolBar>
            <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
            <div>
                <el-input
                        placeholder="搜索标题"
                        size="small"
                        style="width: 140px"
                        v-model="searchParams.postTitle"
                        clearable>
                </el-input>
                <el-select v-model="searchParams.postType" size="small" clearable placeholder="请选择分类"
                           style="width: 140px">
                    <el-option
                            v-for="(v,k) in $Cfg.postType"
                            :key="k"
                            :label="v"
                            :value="k">
                    </el-option>
                </el-select>

                <el-select v-model="searchParams.postStatus" size="small" clearable placeholder="请选择状态"
                           style="width: 120px">
                    <el-option
                            v-for="(v,k) in $Cfg.postStatus"
                            :key="k"
                            :label="v"
                            :value="k">
                    </el-option>
                </el-select>
                <el-button type="success" icon="el-icon-search" size="small" @click="refresh = !refresh"></el-button>
            </div>
        </ToolBar>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="标题"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="摘要">
            </el-table-column>
            <el-table-column
                    label="操作"
                    :render-header="tableAction"
                    width="280">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="info" size="small"
                               >查看</el-button>
                    <el-button @click="handleClick(scope.row)" type="primary" size="small"
                               >编辑</el-button>
                    <el-button @click="handleClick(scope.row)" type="danger" size="small"
                               >删除</el-button>
                    <el-button @click="handleClick(scope.row)" type="success" size="small"
                    >其他</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Pagination
            :params="searchParams"
            :requestFunc="requestFunc"
            @returnData="returnData"
        />
    </div>
</template>

<script>
    import ToolBar from '@/components/ToolBar.vue';
    import HelpHint from '@/components/HelpHint.vue';
    import Pagination from '@/components/Pagination.vue';
    import paginationMixin from './mixin/page.js'

    export default {
        mixins:[paginationMixin],
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: 'Lorem ipsum dolor sit amet,',
                    address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
                }, {
                    date: '2016-05-02',
                    name: 'Lorem ipsum dolor sit amet,',
                    address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.'
                }]
            }
        },
        methods: {
            handleClick(row) {
                this.$alert(row, '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {}
                });
            },
            tableAction() {
                return this.$createElement('HelpHint', {
                    props: {
                        content: '查看文章 / 编辑文章'
                    }
                }, '操作');
            },

        },
        created() {

        },
        components: {
            ToolBar, HelpHint, Pagination
        }
    }
</script>

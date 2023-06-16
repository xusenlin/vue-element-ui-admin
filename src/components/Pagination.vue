<template>
  <div class="pagination">
    <el-pagination
        @size-change="sizeChange"
        @current-change="pageNumChange"
        :current-page="data.pageParams.pageNum"
        :page-sizes="pageSizesArr"
        :page-size="data.pageParams.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="data.total"
    >
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
import {pageSizesArr} from "@/config/app";
import {reactive, withDefaults, onMounted} from "vue";


export interface Props {
  reqFunc: (params: any) => Promise<any>,
  filterParamsFunc?: (params: object) => object,
  params?: object,
  pageField?: string,
  pageSizesArr?: number[],
}

const props = withDefaults(defineProps<Props>(), {
  filterParamsFunc: (params: object) => params,
  params: () => {
    return {}
  },
  pageSizesArr: () => (pageSizesArr),
})


const emit = defineEmits<{
  (e: 'pageData', pageData: object): void,
}>()

const data = reactive({
  total: 0,
  pageParams: {
    pageSize: props.pageSizesArr[0],
    pageNum: 1
  }
})

const sizeChange = (pageSize: number): void => {
  data.pageParams.pageSize = pageSize
  getPageData();
}
const pageNumChange = (pageNum: number): void => {
  data.pageParams.pageNum = pageNum
  getPageData();
}

const getPageData = (): void => {
  if (!props.reqFunc) {
    emit("pageData", {})
    return;
  }
  let params = props.filterParamsFunc({...data.pageParams, ...props.params});

  props.reqFunc(params).then((result: any) => {
    let r = props.pageField ? result[props.pageField] : result
    data.pageParams.pageNum = r.pages;
    data.total = parseInt(r.total) || 0;
    emit("pageData", result);
  }).catch((e) => {
    console.log(e)
  });

}

onMounted(() => {
  getPageData()
})

const Refresh = (pageNum = 1): void => {
  data.pageParams.pageNum = pageNum
  getPageData()
}

const QueryParams = (): object => {
  return {...props.params, ...data.pageParams}
}

defineExpose({Refresh, QueryParams})

</script>

<style scoped>
.pagination {
  padding: 10px;
  display: flex;
}
</style>

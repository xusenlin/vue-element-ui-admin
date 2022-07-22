import { ref,nextTick} from 'vue'
import {useRoute} from "vue-router";
import { resetArgs } from "@/utils/app"
import {List as getListFunc} from "@/api/demo"; //TODO 对接你的分页接口
import {Pagination, PaginationRef} from "@/components/crudForm/type"



export default function () {

    const route = useRoute()
    const tableData = ref([])
    const paginationRef = ref<null | PaginationRef>(null);
    //TODO 对接你们的搜索参数
    const searchParams = ref({
        id:route.query.id ? route.query.id : "",
    })

    const setTableData = (t:Pagination) :void => {
        tableData.value = t.records||[] //TODO 根据你们分页接口定义
    }

    const refreshTable = ():void => {
        paginationRef.value?.Refresh()
    }
    const resetParams = async () => {
        searchParams.value = resetArgs(searchParams.value)
        await nextTick()
        refreshTable()
    }

    return {
        searchParams,
        tableData,
        paginationRef,
        getListFunc,
        setTableData,
        refreshTable,
        resetParams
    }
}

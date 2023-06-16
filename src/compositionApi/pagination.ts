import { ref,nextTick} from 'vue'
import { resetArgs } from "@/utils/app"


export default function () {
    const tableData = ref([])
    const paginationRef = ref<{ Refresh:()=>void, QueryParams:()=>void } | null>(null);
    const searchParams = ref<any>({"id":"","name":"","tags":[]})

    const setTableData = (r:any) :void => {
        if(Array.isArray(r.records) && r.records.length!==0){
            tableData.value = r.records||[]
        }
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
        setTableData,
        refreshTable,
        resetParams
    }
}

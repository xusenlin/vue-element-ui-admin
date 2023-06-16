import {ElMessage, ElMessageBox} from 'element-plus'
import {useRouter} from "vue-router";
import { deleteMaterial } from "@/api/demo"


export default function (refreshTable: () => void) {
    const router = useRouter()

    const deleteRow = (row:any) => {
        ElMessageBox.confirm(
            '确认删除此记录吗？',
            '确认操作',
            {
                confirmButtonText: '确认',
                cancelButtonText: '关闭',
                type: 'warning',
            }
        )
            .then(() => {
                let { id } = row;
                deleteMaterial({id}).then(()=>{
                    ElMessage({
                        type: 'success',
                        message: '删除成功',
                    })
                    refreshTable()
                }).catch(()=>{})

            })
            .catch(() => {})
    }
    const details = (row:any) => {
        router.push({path:"/",query:{id:row.id}})
    }

    return {
        details,
        deleteRow,
    }

}

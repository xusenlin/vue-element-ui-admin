import request from '@/utils/request'
import {FormFields} from "@/components/crudForm/type";

export function creatCrudTable(data:any)  {
  return request({
    baseURL:"./",
    closeResponseInterceptors:true,
    url: 'creatCrudTableApi',
    method: 'post',
    data,
  })
}

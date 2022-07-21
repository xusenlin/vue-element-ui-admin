import request,{requestApi} from '@/utils/request'
import {FormFields} from "@/components/crudForm/type";

export function List(data:any)  {
  return request({
    url: '/medical-service/manager/v1/literature/list',
    method: 'post',
    data,
  })
}

export function save(data:FormFields)  {
  return request({
    url: '/medical-service/manager/v1/literature/save',
    method: 'post',
    data,
  })
}
export function deleteMaterial(data:any)  {
  return request({
    url: '/medical-service/manager/v1/literature/delete',
    method: 'post',
    data,
  })
}


export const upload = ()=>{
  return requestApi("/medical-service/manager/v1/literature/upload")
}

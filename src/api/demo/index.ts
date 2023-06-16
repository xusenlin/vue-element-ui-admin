import { request } from "@/utils/request.ts"

export function paginationList(data:string)  {
  return request<string[]>({
    url: '/medical-service/manager/v1/literature/list',
    method: 'post',
    data,
  })
}

export function save(data:string)  {
  return request<string>({
    url: '/medical-service/manager/v1/literature/save',
    method: 'post',
    data,
  })
}
export function deleteMaterial(data: { id:string })  {
  return request<string[]>({
    url: '/medical-service/manager/v1/literature/delete',
    method: 'post',
    data,
  })
}


import  r  from "@/utils/request.ts"

//paginationList("").then(r=>{
//   r.length
// })
export function paginationList(data:string)  {
  return r.request<string[]>({//r.request会做拦截，因此响应的数据就是string[] 类型
    url: '/medical-service/manager/v1/literature/list',
    method: 'post',
    data,
  })
}

//save("").then(r=>{
//   r.status
//   r.data.data.name
// })
export function save(data:string)  {
  return r.unhandledRequest<{name:string}>({//r.unhandledRequest不会拦截，因此响应的数据就是AxiosResponse<ResponseResult<{name:string}>>类型
    url: '/medical-service/manager/v1/literature/save',
    method: 'post',
    data,
  })
}

//发起FormData请求
export function deleteMaterial(data: { id:string })  {
  return r.request<string[]>({
    url: '/medical-service/manager/v1/literature/delete',
    method: 'post',
    isFormRequest:true,
    data,
  })
}


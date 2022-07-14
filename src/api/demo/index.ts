import request from '@/utils/request'

export function List(data:object)  {
  return request({
    url: '/medical-service/manager/v1/literature/list',
    method: 'post',
    data,
  })
}

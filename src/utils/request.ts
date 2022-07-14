import axios from 'axios'
import {useUserStore} from '@/stores/user'
import {ElMessage, ElLoading} from 'element-plus'
import {baseURL,timeout} from "@/config/req"

declare module "axios"{
  export interface AxiosRequestConfig{
    loading?:boolean,
    closeResponseInterceptors?:boolean
  }
}

const userStore = useUserStore()

let loadingInstance:any;

const service = axios.create({
  baseURL,
  timeout,
  headers:{},
})

// 请求前的统一处理
service.interceptors.request.use(
    (config) => {
      if (config.loading) {
        loadingInstance  = ElLoading.service()
      }
      // JWT鉴权处理
      if (userStore.token && config.headers) {
        config.headers.Authorization = userStore.token
      }
      return config
    },
    (error) => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
      if (loadingInstance) {
        loadingInstance.close()
      }
      if(response.config.closeResponseInterceptors){
        return response;
      }
      const res = response.data
      if (res.code === "00000") {
        return res.data
      } else {
        showError(res)
        return Promise.reject(res)
      }
    },
    (error) => {
      if (loadingInstance) {
        loadingInstance.close()
      }
      let {code, msg: message} = error.response.data;
      showError({code, message})
      return Promise.reject(error.response)
    }
)

function showError(error:{code:number,message:string}) {
  if (error.code === 403) {
    // to re-login
    // store.dispatch('user/loginOut')
  } else {
    ElMessage({
      message: error.message || '服务异常',
      type: 'error',
      duration: 3 * 1000
    })
  }

}

export default service

export const transformRequest = [function (data:any) {
  let formData = new FormData()
  for (let key in data) {
    formData.append(key, data[key])
  }
  return formData
}];


export const requestApi = (url:string) => {
  return {
    url: baseURL + url,
    headers: {
      timeout,
      Authorization: userStore.token,
      "Content-Type":"application/x-www-form-urlencoded"
    }
  }
}

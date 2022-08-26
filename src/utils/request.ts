import axios from 'axios'
import {getToken} from '@/stores/user'
import {ElMessage, ElLoading} from 'element-plus'
import {baseURL,timeout} from "@/config/req"

declare module "axios"{
  export interface AxiosRequestConfig{
    loading?:boolean,
    token?:string,
    closeResponseInterceptors?:boolean
  }
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any> (config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}

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
      if (getToken() && config.headers) {
        config.headers.Authorization = getToken()
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

//上传formData时配置
export const transformRequest = [function (data:any) {
  let formData = new FormData()
  for (let key in data) {
    formData.append(key, data[key])
  }
  return formData
}];

type ReqInfo = {
  url:string
  headers:{
    timeout:number
    Authorization:string
    "Content-Type":string
  }
}

//文件上传时可以使用这个生成关键上传信息
export const requestApi = (url:string) :ReqInfo => {
  return {
    url: baseURL + url,
    headers: {
      timeout,
      Authorization: getToken(),
      "Content-Type":"application/x-www-form-urlencoded"
    }
  }
}

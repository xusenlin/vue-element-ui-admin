import { getToken } from "@/utils/user.ts"
import { toFormData } from "@/utils/app.ts"
import axios from "axios";
import { baseURL,timeout,statusDesc } from "@/config/request.ts"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse,InternalAxiosRequestConfig } from "axios";

export type ResponseResult<T> = {
  code: number;
  msg: string;
  data: T;
};

declare module 'axios' {
  export interface AxiosRequestConfig{
    closeLoading?:boolean,//默认所有请求Loading，可关闭
    token?:string,//默认获取本地token，可针对某个请求写死或置空
    isFormRequest?:boolean,//将请求自动转换为表单请求
    closeInstance?:boolean
  }
}

export type RequestConfig = Omit<AxiosRequestConfig, 'closeInstance' | 'transformRequest'>

export class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
        (config:InternalAxiosRequestConfig) => {
          if ("token" in config){
            config.headers.Authorization = config.token
          }else {
            config.headers.Authorization = getToken()
          }
          if (config.isFormRequest){config.transformRequest = toFormData}
          if(!config.closeLoading){
            //Loading
          }
          return config;
        },
        (err: any) => {
          // 请求错误，这里可以用全局提示框进行提示
          return Promise.reject(err);
        }
    );

    this.instance.interceptors.response.use(
        (res: AxiosResponse) => {
          // 直接返回res，当然你也可以只返回res.data
          // 系统如果有自定义code也可以在这里处理
          return res;
        },
        (err: any) => {
          let message = "";
          if (statusDesc[err.response.status]){
            message = statusDesc[err.response.status]
          }else {
            message = `连接出错(${err.response.status})!`
          }
          // 这里错误消息可以使用全局弹框展示出来
          // 比如element plus 可以使用 ElMessage
          // ElMessage({
          //   showClose: true,
          //   message: `${message}，请检查网络或联系管理员！`,
          //   type: "error",
          // });
          // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
          console.log(message)
          return Promise.reject(err.response);
        }
    );
  }

  //未拦截请求，响应原封不动返回
  unhandledRequest<T>(config: RequestConfig): Promise<AxiosResponse<ResponseResult<T>>> {
    return this.instance.request({...config,closeInstance:true});
  }
  //做了拦截处理，自动报错，只返回关心的数据
  request<T>(config: RequestConfig): Promise<T> {
    return this.instance.request(config);
  }
}

export  default new Request({baseURL,timeout})




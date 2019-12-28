import Axios from "axios";
import Config from "@/config/app";
import { Notification, Loading } from "element-ui";
import { getToken } from "../utils/common";
const service = Axios.create({
  baseURL: Config.apiUrl + "/" + Config.apiPrefix,
  headers: {
    Accept: "*/*"
  },
  timeout: Config.timeout
});
service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

service.interceptors.request.use(
  config => {
    if (!config.closeLoading) {
      window.loadingInstance = Loading.service();
    }
    config.headers["Authorization"] = getToken();
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    if (!res.config.closeLoading) {
      window.loadingInstance.close();
    }
    if (res.status !== 200) {
      Notification({
        title: "数据返回出错",
        message: "请稍后重试",
        type: "warning"
      });
      return Promise.reject("error");
    } else {
      if (res.config.closeInterceptors) {
        return res.data;
      }
      if (!res.data.success) {
        //removeToken(); //登陆失效执行
        Notification({
          title: "数据返回出错",
          message: "请稍后重试",
          type: "warning"
        });
        return Promise.reject("error");
      }
      return res.data.data;
    }
  },
  error => {
    window.loadingInstance.close();
    Notification({
      title: "请求未响应",
      message: "服务器可能出了点问题",
      type: "warning"
    });
    return Promise.reject(error); //不能去掉，否则请求超时会进入到then方法，导致逻辑错误。
  }
);

export default service;

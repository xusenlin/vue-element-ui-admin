import request from "@/utils/request.js";

/**
 * 获取文章
 * @param params
 * @returns {AxiosPromise}
 */
export function topics(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "https://cnodejs.org/api/v1/topics", //如果是绝对路径就不会在使用配置里的url
    method: "get",
    params: params //注意：如果是post请求请使用 data: params
  });
}

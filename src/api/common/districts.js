import request from "@/utils/request.js";
/**
 * 城市级联数据
 * @param params
 * @returns {AxiosPromise}
 */
export function listDistricts(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/common/listDistricts",
    method: "get",
    params: params //注意：如果是get请求请使用 params: params
  });
}

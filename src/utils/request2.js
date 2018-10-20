import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import Config from '../config/'
import store from '../store'


const service = axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix, // api的base_url
    headers: {
        'Accept': '*/*'
    },
    timeout: Config.timeout // 请求超时时间
})
// axios.defaults.headers = {
//   'Content-type': 'application/json'
// }
// request拦截器
service.interceptors.request.use(
        config => {
            let noParameters = config.url.indexOf('?') == -1;
            if (store.getters.token) {
                //config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
                config.url = noParameters ? config.url + '?access_token=' + getToken() : config.url + '&token=' + getToken()
            }
            return config
        },
        error => {
            // Do something with request error
            // console.log(error) // for debug
            Promise.reject(error)
        }
)

// respone拦截器
service.interceptors.response.use(
        response => {
            /**
             * code为非20000是抛错 可结合自己业务进行修改
             */
            const res = response
            if (res.status !== 200) {
                Message({
                    message: res.message,
                    type: 'error',
                    duration: 5 * 1000
                })
                // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
                if (res.status === 50008 || res.status === 50012 || res.status === 50014) {
                    MessageBox.confirm(
                            '你已被登出，可以取消继续留在该页面，或者重新登录',
                            '确定登出',
                            {
                                confirmButtonText: '重新登录',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }
                    ).then(() => {
                        store.dispatch('FedLogOut').then(() => {
                            location.reload() // 为了重新实例化vue-router对象 避免bug
                        })
                    })
                }
                return Promise.reject('error')
            } else {
                if (response.data.resultCode != 200) {
                    let displayType = Config.resultCode.hasOwnProperty(response.data.resultCode) ? Config.resultCode[response.data.resultCode] : 'error'
                    Message({
                        message: response.data.message,
                        type: displayType,
                        duration: 5 * 1000
                    })
                    if (response.data.code == 402) {
                        setTimeout(() => {
                            store.dispatch('FedLogOut').then(() => {
                                location.reload() // 为了重新实例化vue-router对象 避免bug
                            })
                        }, 2000)
                    }
                    return Promise.reject('error');
                }
                return response.data.data
            }
        },
        error => {
            // console.log('err' + error) // for debug
            Message({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(error)
        }
)

export default service

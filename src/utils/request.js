import Axios from 'axios'
import Config from '../config/app.js'
import { Notification,Loading  } from 'element-ui';
import {getToken,removeToken} from '../utils/dataStorage.js'

const service = Axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix,
    headers: {
        'Accept': '*/*'
    },
    timeout: Config.timeout
})
service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

service.interceptors.request.use(
    config => {

        if(!config.closeLoading){
            window.loadingInstance = Loading.service();
        }

        let noParameters = config.url.indexOf('?')  == -1;
        //config.headers['X-Token'] = getToken() //
        config.url = noParameters ? config.url+'?access_token=' + getToken(): config.url+'&access_token='+ getToken();

        return config
    },
    error => {
        Promise.reject(error)
    }
)



service.interceptors.response.use(
    response => {//Grade

        if(!response.config.closeLoading){
            setTimeout(_=>{
                window.loadingInstance.close();
            },400);
        }

        const res = response
        if (res.status !== 200) {
            Notification({
                title:'数据返回出错',
                message:"请稍后重试",
                type:'warning'
            });
            //return Promise.reject('error')
        } else {
            if((response.config).hasOwnProperty('closeInterceptors') && response.config.closeInterceptors){
                return res.data
            }

            if(res.data.resultCode != 200){
                Notification({
                    title:res.data.message,
                    type:'warning'
                });
                if(res.data.resultCode == 402){//登录状态失效
                    removeToken();
                    setTimeout(_=>{
                        window.location.href = './login.html';
                    },2000)
                }
                return Promise.reject('error');
            }
            return res.data.data
        }
    },
    error => {
        console.log(error)
        setTimeout(_=>{
            window.loadingInstance.close();
        },300)
        Notification({
            title:"请求未响应",
            message:"服务器可能出了点问题",
            type:'warning'
        });
        return Promise.reject(error)//千万不能去掉，，，否则请求超时会进入到then方法，导致逻辑错误。
    }
)

export default service

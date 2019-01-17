//导入axios
import axios from 'axios'
//导入element-ul Message
import {Message} from 'element-ui'
//设置axios基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
//请求拦截器
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    // console.log(config);
    if (config.url.includes('/login')) {

    } else {
        config.headers.Authorization = window.sessionStorage.getItem('token')
    }
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
    });
//响应拦截器
axios.interceptors.response.use( (response)=> {
    // Do something with response data
    if (response.data.meta.status === 200) {
        Message.success(response.data.meta.msg)
    } else if (response.data.meta.status === 400) {
        Message.error(response.data.meta.msg)        
    }
    return response;
  },  (error)=> {
    // Do something with response error
    return Promise.reject(error);
  });
// 暴露
export default {
    //作为Vue插件 需要有install
    install(Vue) {
        Vue.prototype.$axios = axios
    }
}
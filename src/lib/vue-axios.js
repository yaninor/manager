//导入axios
import axios from 'axios'
//设置axios基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 暴露
export default {
    //作为Vue插件 需要有install
    install(Vue) {
        Vue.prototype.$axios = axios
    }
}
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'
Vue.use(VueRouter)
// 路由规则
let routes = [
    {
        path: '/login',
        component:login
    },{
        path: '/',
        redirect:'/index'
    },{
        path: '/index',
        component:index
    }
]
let router = new VueRouter({
    routes
})
// 暴露
export default router;
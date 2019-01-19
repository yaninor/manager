import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'
import users from '../components/users.vue'
import roles from '../components/roles.vue'
import rights from '../components/rights.vue'
import goods from '../components/goods.vue'
Vue.use(VueRouter)
// 路由规则
let routes = [{
    path: '/login',
    component: login
}, {
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: index,
    // 嵌套路由
    children: [{
        path: 'users',
        component: users
    }, {
        path: 'roles',
        component: roles
    }, {
        path: 'rights',
        component: rights
    }, {
        path: 'goods',
        component: goods
    }]
}]
let router = new VueRouter({
    routes
})
//导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = window.sessionStorage.getItem('token')
        if (token) {
            next();
        } else {
            Vue.prototype.$message.error('你还没有登录呢!!');
            next('/login');
        }
    }
})
// 暴露
export default router;
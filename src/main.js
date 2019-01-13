import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './assets/base.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import login from './components/login.vue'
new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [{
      path: '/',
      redirect:'/login'
    },{
      path: '/login',
      component:login
    }]
  })
}).$mount('#app')

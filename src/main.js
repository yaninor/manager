import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './assets/base.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueAxios from './lib/vue-axios.js'
Vue.use(VueAxios)
import router from './lib/router.js'
import myBreadcrumb from './components/myBreadcrumb.vue'
Vue.component('myBreadcrumb', myBreadcrumb)
Vue.config.productionTip = false
new Vue({
  el:'#app',
  render: h => h(App),
  router
})
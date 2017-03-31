// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//引入路由
import VueRouter from 'vue-router'

import App from './App'

//使用路由
Vue.use(VueRouter)

Vue.config.productionTip = false

//引入相应的文件
import Home from './page/home/home'
import Cart from './page/cart/cart'
import Fenlei from './page/fenlei/fenlei'
import Mine from './page/mine/mine'
//编写规则
const routes = [
	{ path:'/', component:Home},
	{ path:'/home', component:Home},
	{ path:'/cart', component:Cart},
	{ path:'/fenlei', component:Fenlei},
	{ path:'/mine', component:Mine}
]
//创建路由对象
const router = new VueRouter({
	routes
})
//将路由对象交给vue实例


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

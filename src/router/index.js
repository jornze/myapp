import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/find/find'
import Home from '@/components/home/home'
import My from '@/components/my/my'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
  	
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/my',
      component: My
    }
  ]
})

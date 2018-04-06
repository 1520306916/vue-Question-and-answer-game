import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: r => require.ensure([], () => r(require('@/App'))),
    children: [{
      path: '/',
      component: r => require.ensure([], () => r(require('@/components/HelloWorld'))),
      children: [{
        path: '/',
        component: r => require.ensure([], () => r(require('@/components/page/home')))
      }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('@/components/page/item')))
      }]
    },{
      path:'/score',
      component: r => require.ensure([], () => r(require('@/components/page/score')))
    }]
  }]
})

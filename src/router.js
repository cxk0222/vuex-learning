import Vue from 'vue'
import Router from 'vue-router'
import All from './views/All.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: All
    },
    {
      path: '/undo',
      name: 'undo',
      component: () => import(/* webpackChunkName: "undo" */ './views/Undo.vue')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import(/* webpackChunkName: "done" */ './views/Done.vue')
    }
  ]
})

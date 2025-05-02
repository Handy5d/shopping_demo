import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import store from '@/store'

const login = () => import('@/views/login')
const order = () => import('@/views/order')
const prodetail = () => import('@/views/prodetail')
const pay = () => import('@/views/pay')
const search = () => import('@/views/search')
const searchList = () => import('@/views/search/list')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/order', component: order },
    { path: '/prodetail/:id', component: prodetail },
    { path: '/search', component: search },
    { path: '/search/list', component: searchList },
    { path: '/pay', component: pay }
  ]
})
const arrUrl = ['/pay', '/order']
router.beforeEach((to, from, next) => {
  const token = store.state.user.userInfo.token
  if (!arrUrl.includes(to.path)) {
    next()
    return
  }
  if (token) {
    next()
  } else {
    next('/home')
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Search from '../views/Search'
import Cart from '../views/Cart'
import Friends from '../views/Friends'
import NewsList from '../views/Home/news/NewsList'
import NewsInfo from '../views/Home/news/NewsInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/friends',
    component: Friends
  },
  {
    path: '/home/newslist',
    component: NewsList
  },
  {
    path: '/home/newsinfo/:id',
    component: NewsInfo
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Search from '../views/Search'
import Cart from '../views/Cart'
import Friends from '../views/Friends'
import NewsList from '../views/Home/news/NewsList'
import NewsInfo from '../views/Home/news/NewsInfo'
import PhotoList from '../views/Home/photos/PhotoList'
import PhotoInfo from '../views/Home/photos/PhotoInfo'
import GoodsList from '../views/Home/goods/GoodsList'
import GoodsInfo from '../views/Home/goods/GoodsInfo'

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
  },
  {
    path: '/home/photolist',
    component: PhotoList
  },
  {
    path: '/home/photoinfo/:id',
    component: PhotoInfo
  },
  {
    path: '/home/goodslist',
    component: GoodsList
  },
  {
    path: '/home/goodsinfo/:id',
    component: GoodsInfo
  }
]

const router = new VueRouter({
  routes
})

export default router

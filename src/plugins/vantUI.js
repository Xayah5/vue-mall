import Vue from 'vue'
import { Toast, NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, Grid, GridItem } from 'vant'

Vue
  .use(NavBar)
  .use(Tabbar).use(TabbarItem)
  .use(Swipe).use(SwipeItem)
  .use(Grid).use(GridItem)

Vue.prototype.$Toast = Toast

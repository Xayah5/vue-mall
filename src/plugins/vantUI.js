import Vue from 'vue'
import { Toast, NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, Grid, GridItem, Card, Button } from 'vant'

Vue
  .use(NavBar)
  .use(Tabbar).use(TabbarItem)
  .use(Swipe).use(SwipeItem)
  .use(Grid).use(GridItem)
  .use(Card)
  .use(Button)

Vue.prototype.$Toast = Toast

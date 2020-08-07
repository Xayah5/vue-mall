import Vue from 'vue'
import { Toast, NavBar, SubmitBar, SwitchCell, Swipe, SwipeItem, Tabbar, TabbarItem, Grid, GridItem, Card, Button, Tab, Tabs, Lazyload, ImagePreview, Panel, Stepper } from 'vant'

Vue
  .use(NavBar)
  .use(Tabbar).use(TabbarItem)
  .use(Swipe).use(SwipeItem)
  .use(Grid).use(GridItem)
  .use(Card)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Panel)
  .use(Stepper)
  .use(SubmitBar)
  .use(SwitchCell)
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  loading: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0Hh9GvOw4qZIhB4hrShE8YDvFEcJ_c_LHFQ&usqp=CAU',
  lazyComponent: true
})
Vue.prototype.$Toast = Toast
Vue.prototype.$ImagePreview = ImagePreview

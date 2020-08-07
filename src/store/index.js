import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Store({
  state: {
    count: 1,
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
  },
  mutations: {
    addCart(state, payload) {
      let flag = false
      state.cart.some(item => {
        // 判断是否存在商品，如果存在只是做数量上的修改
        if (item.id === payload.id) {
          item.count += 1
          flag = true
        }
      })
      // 如果商品部存在，加入购物
      if (!flag) {
        state.cart.push(payload)
      }
      // 把购物数据存入本地存储
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
    addCart({ commit }, payload) {
      commit('addCart', payload)
    }
  },
  getters: {
    // 计算总数
    getAllCount(state) {
      let c = 0
      state.cart.forEach(item => {
        c += item.count
      })
      return c
    },
    getAllPrice(state) {
      let p = 0
      state.cart.some(item => {
        if (item.selected !== false) {
          p += item.count * item.sell_price
        }
      })
      return p
    }
  }
})

import axios from 'axios'
import Vue from 'vue'
// 配置根路劲
axios.defaults.baseURL = 'http://localhost:8888'

// 获取轮播数据
Vue.prototype.Api = {
  getLunbo(params) {
    return axios.get('/api/getlunbo', params)
  },
  // 获取九宫格
  getGrids(params) {
    return axios.get('/api/grids', params)
  }
}

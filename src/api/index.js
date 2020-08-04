import axios from 'axios'
import Vue from 'vue'
// 配置根路劲
axios.defaults.baseURL = 'http://203.195.181.208:8888'

// 获取轮播数据
Vue.prototype.Api = {
  getLunbo(params) {
    return axios.get('/api/getlunbo', params)
  },
  // 获取九宫格
  getGrids(params) {
    return axios.get('/api/grids', params)
  },
  // 获取图文资讯
  getNewsList(params) {
    return axios.get('/api/getnewslist', params)
  },
  // 获取图文资讯详情
  getNewsInfo(params) {
    return axios.get('/api/getnew/' + params)
  },
  // 获取图文资讯评论信息
  getComments({ id, page = 1, pageSize = 2 }) {
    return axios.get(`/api/getcomments/${id}?pageindex=${page}&limit=${pageSize}`)
  },
  // 添加评论数据
  postComment({ id, content }) {
    return axios.post(`/api/postcomment/${id}`, { content })
  }
}

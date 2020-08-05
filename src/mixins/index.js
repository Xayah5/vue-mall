export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        goDetail(url, id) {
          this.$router.push(url + '/' + id)
        }
      }
    })
  }
}

<template>
  <div class="Cart">
    this is cart page
  </div>
</template>
<script>
export default {
  data: () => ({
    ids: 101
  }),
  created() {},
  methods: {
    async getshopcarlist() {
      try {
        const { data: { message } } = await this.Api.getshopcarlist(this.ids)
        // this.lunbolist = message
        console.log(message)
      } catch (error) {
        this.$Toast('请求购物车列表数据失败...' + error.message)
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>

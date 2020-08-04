<template>
  <div class="newslist">
    <van-card
      v-for="item in newslist"
      :key='item.id'
      :title="item.title"
      :thumb="item.img_url"
      @click="goDetail(item.id)"
    >
      <div slot="price">
        {{item.add_time}}
      </div>
      <div slot="num">
        {{item.click}}
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getNewsList()
  },
  methods: {
    async getNewsList() {
      try {
        const { data: { message } } = await this.Api.getNewsList()
        this.newslist = message
      } catch (error) {
        this.$Toast('请求新闻列表失败...' + error.message)
      }
    },
    goDetail(id) {
      this.$router.push('/home/newsinfo/' + id)
    }
  }
}
</script>
<style lang="less" scoped>
</style>

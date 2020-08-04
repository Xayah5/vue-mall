<template>
  <div class="newsinfo">
    <header>
      <h1 class="title">
        {{newsinfo.title}}
      </h1>
      <div class="des">
        <span class="ctime">{{newsinfo.add_time}}</span>
        <span class="click">点击了{{newsinfo.click}}次</span>
      </div>
    </header>
    <div class="content">
      {{newsinfo.content}}
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    id: '',
    newsinfo: {}
  }),
  created() {
    this.id = this.$route.params.id
    this.getNewsInfo()
  },
  methods: {
    async getNewsInfo() {
      try {
        const { data: { message } } = await this.Api.getNewsInfo(this.id)
        console.log(message)
        this.newsinfo = message
      } catch (error) {
        this.$Toast('请求图文资讯详情数据失败...' + error.message)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.newsinfo {
  padding: 6px;
  header {
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    .title {
      font-size: 16px;
      text-align: center;
    }
    .des {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .ctime {
        color: #1989fa;
      }
    }
  }
}
</style>

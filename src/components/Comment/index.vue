<template>
  <div class="comments">
    <header>
      <h1 class="title">
        发表评论
      </h1>
    </header>
    <div class="content-box">
      <textarea
        class="content"
        name=""
        id="content"
        cols="30"
        rows="10"
        placeholder="请输入发送内容"
        v-model="content"
      ></textarea>
      <van-button
        type="danger"
        block
        @click="postComment"
      >提交</van-button>
    </div>
    <ul class="comments-list">
      <li
        v-for="(comment,index) in comments"
        :key="index"
      >
        <div class="comments-title">
          <span>第{{index+1}}楼</span>
          <span>用户：{{comment.user_name}}</span>
          <span>{{comment.add_time}}</span>
        </div>
        <p>{{comment.content}}</p>
      </li>
    </ul>
    <van-button
      type="danger"
      block
      @click="getMore"
    >{{isHasMore?'被掏空了':'加载更多'}}</van-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    content: '',
    comments: [],
    page: 1,
    pageSize: 3,
    isHasMore: false
  }),
  props: ['id'],
  created() {
    this.getComments()
  },
  methods: {
    async getComments() {
      if (this.isHasMore !== false) return
      try {
        this.page++
        const { data: { message, count } } = await this.Api.getComments({ id: this.id, page: this.page, pageSize: this.pageSize })
        this.comments = this.comments.concat(message)
        this.isHasMore = this.page * this.pageSize > count
      } catch (error) {
        this.$Toast('请求图文资讯评论数据失败...' + error.message)
      }
    },
    async postComment() {
      try {
        const { data: { message } } = await this.Api.postComment({ id: this.id, content: this.content })
        this.comments.unshift({
          add_time: new Date().getTime(),
          content: this.content,
          id: new Date().getTime(),
          user_name: '匿名用户'
        })
        // 清空输入框
        this.content = ''
        document.getElementById('content').focus()
        console.log(message)
      } catch (error) {
        this.$Toast('请求图文资讯评论数据失败...' + error.message)
      }
    },
    getMore() {
      this.getComments()
    }
  }
}
</script>
<style lang="less" scoped>
.comments{
  header{
    border-bottom: 1px solid #eaeaea;
    margin-bottom:10px;
    .title{
      font-size: 20px;
    }
  }
  .content-box{
    .content{
      width: 98%;
    }
  }
  .comments-list{
    .comments-title{
      display: flex;
      justify-content: space-between;
      margin-top:10px;
      span{
        font-size:14px;
      }
    }
  }
}
</style>

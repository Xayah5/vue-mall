<template>
  <div class="photoinfo">
    <header>
      <h1 class="title">
        {{imageInfo.title}}
      </h1>
      <div class="des">
        <span class="ctime">{{imageInfo.add_time}}</span>
        <span class="click">点击了{{imageInfo.click}}次</span>
      </div>
    </header>
    <div class="content">
      <div class="thums-box">
        <img
          v-for="(thum,index) in thums"
          :key="thum.id"
          :src="thum.src"
          alt=""
          @click="showThum(index)"
        >
      </div>
      <div class="content-info">
        {{imageInfo.content}}
      </div>
    </div>
    <comments :id="id"></comments>
  </div>
</template>
<script>
import comments from '../../../../components/Comment'
export default {
  data: () => ({
    id: '',
    imageInfo: {},
    thums: []
  }),
  created() {
    this.id = this.$route.params.id
    this.getImageInfo()
    this.getThumImages()
  },
  methods: {
    async getImageInfo() {
      try {
        const { data: { message } } = await this.Api.getImageInfo(this.id)
        console.log(message)
        this.imageInfo = message
      } catch (error) {
        this.$Toast('请求图文资讯详情数据失败...' + error.message)
      }
    },
    async getThumImages() {
      try {
        const { data: { message } } = await this.Api.getThumImages(this.id)
        console.log(message)
        this.thums = message
      } catch (error) {
        this.$Toast('请求图文资讯详情数据失败...' + error.message)
      }
    },
    showThum(startPosition) {
      const images = []
      this.thums.forEach(item => {
        if (item.src) images.push(item.src)
      })
      this.$ImagePreview({
        images,
        startPosition
      })
    }
  },
  components: {
    comments
  }
}
</script>
<style lang="less" scoped>
.photoinfo {
  padding: 6px;
  header {
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    .title {
      font-size: 16px;
      color:red;
    }
    .des {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      font-size:12px;
      .ctime {
        color: #9cb7d1;
      }
    }
  }
  .content{
      .thums-box{
        display: flex;
        justify-content: space-around;
        margin:6px;
        img{
          width: 100px;
          height: 100px;
        }
      }
      .content-info{
        font-size: 14px;
        margin:12px 0;
      }
    }
}
</style>

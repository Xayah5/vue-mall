<template>
  <div class="photolist">
    <!-- 头部导航 -->
    <van-tabs
      v-model="active"
      @click="getImages"
    >
      <van-tab
        v-for="cate in cates"
        :key="cate.id"
        :title="cate.title"
      />
    </van-tabs>

    <!-- 图片区域 -->
    <div
      class="image-box"
      v-if="images.length!=0"
    >
      <img
        v-for="image in images"
        :key="image.id"
        v-lazy="image.img_url"
        alt=""
        @click="goDetail('/home/photoinfo',image.id)"
      >
    </div>
    <div
      class="image-box"
      v-else
    >
      暂无数据
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 0,
    cates: [],
    images: []
  }),
  created() {
    this.getImgCategory()
    this.getImages(0)
  },
  methods: {
    async getImgCategory() {
      try {
        const { data: { message } } = await this.Api.getImgCategory()
        message.unshift({
          id: 0,
          title: '全部'
        })
        this.cates = message
      } catch (error) {
        this.$Toast('请求图片列表失败...' + error.message)
      }
    },
    async getImages(id) {
      try {
        const { data: { message } } = await this.Api.getImages(id)
        this.images = message
      } catch (error) {
        this.$Toast('请求图片数据失败...' + error.message)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.photolist{
  padding: 4px;
  .imgage-box{
    width: 100%;
    height: 100%;
  }
}
</style>

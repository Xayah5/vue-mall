<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格区域 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="grid in grids"
        :key="grid.id"
        :icon="grid.src"
        :text="grid.title"
      />
    </van-grid>
  </div>
</template>
<script>
export default {
  data: () => ({
    lunbolist: [],
    grids: []
  }),
  created() {
    this.getLunbo()
    this.getGrids()
  },
  methods: {
    async getLunbo() {
      try {
        const { data: { message } } = await this.Api.getLunbo()
        this.lunbolist = message
      } catch (error) {
        this.$Toast('轮播图请求失败...')
      }
    },
    async getGrids() {
      try {
        const { data: { message } } = await this.Api.getGrids()
        this.grids = message
      } catch (error) {
        this.$Toast('九宫格请求失败...')
      }
    }
  }
}
</script>
<style lang="less">
.home{
  .my-swipe{
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .van-grid-item_icon{
    font-size:60px;
  }
}
</style>

<template>
  <div class="goodsinfo">
    <!-- 轮播图 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div
        class="ball"
        v-show="isBall"
      >
      </div>
    </transition>

    <div class="my-panel">
      <Swiper :lunbolist='lunbolist'></Swiper>
    </div>
    <!-- 商品详情 -->
    <van-panel
      class="my-panel"
      :title="goodsInfo.title"
    >
      <div>
        <p>
          <span class="new">￥{{goodsInfo.sell_price}}</span>
          <span class="old">￥{{goodsInfo.market_price}}</span>
        </p>
        <p class="number">
          <span class="count">购买数量</span>
          <van-stepper v-model="value" />
        </p>
        <p class="btn-group">
          <van-button
            type="primary"
            size="small"
            class="btn"
          >立即购买</van-button>
          <van-button
            type="danger"
            size="small"
            class="btn"
            @click="addCart"
            :disabled="isDisabled"
          >加入购物车</van-button>
        </p>
      </div>
    </van-panel>
    <!-- 商品详情 -->
    <van-panel
      title="商品信息"
      class="my-panel"
    >
      <div>
        <p>商品货号:{{goodsInfo.goods_no}}</p>
        <p>库存清空：{{goodsInfo.shock_quantity}}件</p>
        <p>
          上架时间：{{goodsInfo.add_time|datefmt('YYYY-MM-DD HH-mm-ss')}}
        </p>
      </div>
    </van-panel>
  </div>
</template>
<script>
import Swiper from '../../../../components/Swiper'

export default {
  data: () => ({
    id: '',
    value: 1,
    lunbolist: [],
    goodsInfo: {},
    isBall: false,
    isDisabled: false
  }),
  created() {
    this.id = this.$route.params.id
    this.getGoodsInfo()
    this.getThumImages()
  },
  methods: {
    beforeEnter(el) {
      // 设置起点
      el.style.tarnsform = 'translate(0,0)'
    },
    enter(el, done) {
      const { x, y } = this._getBound()
      // eslint-disable-next-line no-unused-expressions
      el.offsetTop
      el.style.transform = `translate(${x}px,${y}px)`
      el.style.transition = 'all .5s ease'
    },
    afterEnter() {
      this.isBall = !this.isBall
    },
    _getBound() {
      const info = document.querySelector('.van-info').getBoundingClientRect()
      const ball = document.querySelector('.ball').getBoundingClientRect()
      return {
        x: info.x - ball.x,
        y: info.y - ball.y
      }
    },
    async getGoodsInfo() {
      try {
        const { data: { message } } = await this.Api.getGoodsInfo(this.id)
        console.log(message)
        this.goodsInfo = message
      } catch (error) {
        this.$Toast('请求商品详情数据失败...' + error.message)
      }
    },
    async getThumImages() {
      try {
        const { data: { message } } = await this.Api.getThumImages(this.id)
        this.lunbolist = message
      } catch (error) {
        this.$Toast('请求商品详情缩略图数据失败...' + error.message)
      }
    },
    addCart() {
      this.isBall = !this.isBall
      this.isDisabled = true
      setInterval(() => {
        this.isDisabled = false
      }, 600)
    }

  },
  components: {
    Swiper
  }
}
</script>
<style lang="less" scoped>
  .goodsinfo{
    padding:10px;
    .my-panel{
      border: 1px solid #eee;
      width: 98%;
      margin: 0 auto;
      border-radius: 6px;
      box-shadow:  0 0 3px #ccc;
      padding: 10px;
      margin-bottom: 10px;
      .van-cell_title{
        font-size: 16px;
        font-weight: 700;
      }
      p{
        margin-left: 11px;
        font-size: 12px;
        color: #8f8f94;
        .new{
          margin-right: 20px;
          color: red;
        }
        .old{
          text-decoration: line-through;
        }
      }
      .number{
        display: flex;
        align-items: center;
        .count{
          margin-right: 6px;
        }
      }
      .btn-group{
        .btn:first-child{
          margin-right: 20px;
        }
      }
    }
    .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: red;
      position:absolute;
      top:343px;
      left:129px;
      z-index: 999;
    }
  }
</style>

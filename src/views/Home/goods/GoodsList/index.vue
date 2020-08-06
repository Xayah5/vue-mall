<template>
  <div class="goodslist">
    <!-- 列表项 -->
    <div
      class="goodslist-item"
      v-for="good in goods"
      :key="good.id"
      @click="goDetail('/home/goodsinfo',good.id)"
    >
      <header>
        <img
          :src="good.img_url"
          alt=""
        >
        <h1 class="title">{{good.title}}</h1>
      </header>
      <div class="des">
        <p class="price">
          <span class="new">￥{{good.sell_price}}</span>
          <span class="old">￥{{good.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{good.stock_quantity}}件</span>
        </p>
      </div>
    </div>
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
    page: 0,
    pageSize: 3,
    goods: [],
    isHasMore: false
  }),
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods () {
      if (this.isHasMore !== false) return
      try {
        ++this.page
        const { data: { message, count } } = await this.Api.getGoods({ page: this.page, pageSize: this.pageSize })
        this.goods = this.goods.concat(message)
        this.isHasMore = this.page * this.pageSize > count
      } catch (error) {
        this.$Toast('请求商品列表数据失败...' + error.message)
      }
    },
    getMore() {
      this.getGoods()
    }
  }
  // computed: {
  //   moreText() {
  //     return this.isHasMore ? '被掏空了' : '加载更多'
  //   }
  // }
}
</script>
<style lang="less" scoped>
.goodslist{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding: 10px;
  .goodslist-item{
    width: 48%;
    border: .026667rem solid #eee;
    padding: .106667rem;
    box-sizing: border-box;
    margin-top: .266667rem;
    border-radius: .08rem;
    box-shadow: 0 0 0.026667rem #eee;
    margin-bottom: 10px;
    header{
      img{
        width: 100%;
        height:100%;
      }
      .title{
        font-size: 16px;
      }
    }
    .des{
      font-size: 12px;
      .price{
        .new{
          color:red;
          margin-right: 20px;
        }
        .old{
          text-decoration: line-through;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>

<template>
  <div class="cart">
    <div class="cart-list">
      <div
        class="cart-item"
        v-for="item in $store.state.cart"
        :key="item.id"
      >
        <div class="cart-l">
          <van-switch-cell v-model="item.selected" />
        </div>
        <div class="cart-r">
          <van-card
            :num="item.count"
            :price="item.sell_price+'.00'"
            :title="item.title"
            :thumb="item.src"
          >
            <div slot="desc">
              <van-stepper v-model="item.count" />
            </div>
          </van-card>
        </div>
      </div>
    </div>
    <div class="submit-bar">
      <van-submit-bar
        :price="$store.getters.getAllPrice*100"
        button-text="提交订单"
      />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    checked: true,
    value: 1
  }),
  created() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.cart{
  padding:10px;
  .cart-list{
    .cart-item{
      border: 1px solid #eaeaea;
      display: flex;
      background-color: #fafafa;
      margin-bottom: 10px;
      .cart-l{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cart-r{
        flex: 3;
      }
    }
  }
  .van-stepper{
    margin-top:12px;
  }
  .van-submit-bar{
    position: absolute;
    left:0;
    bottom: 50px;
    width: 100%;
  }
}
</style>

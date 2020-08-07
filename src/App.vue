<template>
  <div class="app">
    <!-- 头部区域 -->
    <van-nav-bar
      title="cs2002"
      left-text="返回"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <!-- 路由区域 -->
    <router-view />

    <!-- 底部导航区域 -->
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/home"
      >home</van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        to="/friends"
      >friends</van-tabbar-item>
      <van-tabbar-item
        icon="cart-o"
        to="/cart"
        :badge="$store.getters.getAllCount"
      >cart</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/search"
      >search</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0
  }),
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
// talk is cheap show me the code
</script>
<style>
.app{
  padding-top:46px;
  padding-bottom:50px;
}
</style>

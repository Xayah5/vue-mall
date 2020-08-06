<template>
  <div class="swiper">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="item
          in
          lunbolist"
        :key="item.id"
      >
        <img
          :src="item.src || item.img"
          alt=""
        >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  props: ['lunbolist'],
  created() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.my-swipe{
      height: 150px;
      text-align: center;
      img{
        width: 50%;
        height: 100%;
      }
    }
</style>

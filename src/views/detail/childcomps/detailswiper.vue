<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {swiper,swiperItem} from 'components/common/swiper'
export default {
  name: "detailswiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    swiperItem,
    swiper
  }
}
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>

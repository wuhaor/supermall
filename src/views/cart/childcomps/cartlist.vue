<template>
  <div class="carlist">
    <scroll class="content" ref="scroll">
      <cartlistitem v-for="(item,index) in cartlist" :key="index" :iteminfo="item"></cartlistitem>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/scroll";
import cartlistitem from "./cartlistitem";
import { mapGetters } from "vuex"
export default {
  name: "cartlist",
  components: {
    scroll,
    cartlistitem
  },
  computed: {
    ...mapGetters(["cartlist"])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.carlist {
  position: relative;
  height: calc(100vh - 44px - 49px - 40px);
}
.content {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>

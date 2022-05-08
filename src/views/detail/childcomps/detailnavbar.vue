<template>
  <navbar>
    <div slot="left" class="back" @click="back">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in title" class="title-item" :class="{active: currentindex === index}" @click="titleclick(index)">
        {{item}}
      </div>
    </div>
  </navbar>
</template>

<script>
import navbar from "components/common/navbar/navbar";
export default {
  name: "detailnavbar",
  components: {
    navbar
  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentindex: 0
    }
  },
  methods: {
    titleclick(index) {
      this.currentindex = index;
      this.$emit("tclick", index)
    },
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
    font-size: 13px;
  }
  .active {
    color: var(--color-high-text);
  }
  .back img{
    margin-top: 10px;
    margin-left: 15px;
  }
</style>

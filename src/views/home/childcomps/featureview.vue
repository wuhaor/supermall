<template>
<div class="feature">
  <a href="https://act.mogujie.com/zzlx67">
    <img src="~assets/img/home/recommend_bg.jpg" @load="imgload">
  </a>
</div>
</template>

<script>
export default {
  name: "featureview",
  methods: {
    imgload() {
      this.$emit('isimgload');
    }
  }
}
</script>

<style scoped>
.feature img {
  width: 100%;
}

</style>

<template>
<div class="recommond">
  <div class="recommond-item" v-for="item in recommend">
    <a :link="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
name: "recommendview",
props: {
  recommend: {
    type: Array,
    default() {
      return []
    }
  }
}
}
</script>

<style scoped>
.recommond {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding-bottom: 25px;
  border-bottom: 8px solid #eee;
}
.recommond-item {
  flex: 1;
  padding: 10px 10px 0 10px;
}
.recommond-item img {
  width: 100%;
  margin-bottom: 8px;
}
</style>

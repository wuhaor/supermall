<template>
  <div class="goodlist">
    <goodlistitem v-for="item in goodlist" :goodlistitem="item"></goodlistitem>
  </div>
</template>

<script>

  import goodlistitem from "./goodlistitem";
  export default {
  name: "goodlist",
  props: {
    goodlist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    goodlistitem
  }
  }
</script>

<style scoped>
  .goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>

<template>
  <div class="tabbar-item" @click="itemchange">
    <slot name="fitem-icon" v-if="isActive"></slot>
    <slot name="item-icon" v-else></slot>
    <div :style="setstyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar-item",
    props: {
      path: {
        type: String,
        default: '',
        required: true
      },
      fcolor: {
        type: String,
        default: 'black',
        required: true
      }
    },
    methods: {
      itemchange() {
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive() {
        return this.path.indexOf(this.$route.path) !== -1
      },
      setstyle() {
        return this.isActive ? {color: this.fcolor} : {}
      }
    }
  }
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 15px;
  }
  .tabbar-item img {
    width: 25px;
    height: auto;
    vertical-align: middle;
    margin-top: 2px;
  }
</style>

<template>
  <div class="toast" v-show="isshow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   }
  // }
  data() {
    return {
      message: '',
      isshow: false
    }
  },
  methods: {
    ToastShow(message, duration) {
      this.message = message;
      this.isshow = true;

      setTimeout(() => {
        this.message = '';
        this.isshow = false;
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(0, 0, 0, .65);
    padding: 7px;
    color: white;
    z-index: 999;
  }
</style>

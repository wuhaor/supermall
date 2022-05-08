<template>
  <div class="check" :class="{active: ischecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
name: "checkbutton",
props: {
  ischecked: {
    type: Boolean,
    default: false
  }
},
}
</script>

<style scoped>
.check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.active {
  background: var(--color-tint);
  border-color: var(--color-tint);
}
</style>

<template>
  <div class="cart">
    <navbar class="nav">
      <div slot="center">
        购物车({{cartlength}})
      </div>
    </navbar>
    <cartlist></cartlist>
    <cartbuttonbar></cartbuttonbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";
import cartlist from "./childcomps/cartlist";
import cartbuttonbar from "./childcomps/cartbuttonbar";
import { mapGetters } from "vuex"
export default {
  name: "Cart",
  components: {
    scroll,
    navbar,
    cartlist,
    cartbuttonbar
  },
  data() {
    return {
      scroll: null
    }
  },
  computed: {
    ...mapGetters(['cartlength'])
  }
}
</script>

<style scoped>
  .nav {
    background: var(--color-tint);
    color: #ffffff;
  }
</style>

<template>
  <div>
    <tabbar>
      <tabbarItem path="/home" fcolor="">
        <img slot="item-icon" src="~assets/img/home/home.svg" alt="home">
        <img slot="fitem-icon" src="~assets/img/home/home-fill.svg" alt="home-fill">
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/sort" fcolor="">
        <img slot="item-icon" src="~assets/img/sort/sort.svg" alt="sort">
        <img slot="fitem-icon" src="~assets/img/sort/sort-fill.svg" alt="sort-fill">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/cart" fcolor="">
        <img slot="item-icon" src="~assets/img/cart/cart.svg" alt="cart">
        <img slot="fitem-icon" src="~assets/img/cart/cart-fill.svg" alt="cart-fill">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="/my" fcolor="">
        <img slot="item-icon" src="~assets/img/my/my.svg" alt="my">
        <img slot="fitem-icon" src="~assets/img/my/my-fill.svg" alt="my-fill">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from "components/common/tabbar/tabbar";
  import tabbarItem from "components/common/tabbar-item/tabbar-item";

  export default {
  name: "Maintabbar",
  components: {
    tabbar,
    tabbarItem
  }
  }
</script>

<style scoped>

</style>

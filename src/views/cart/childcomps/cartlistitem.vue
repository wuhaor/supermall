<template>
  <div class="listitem">
    <div class="checkbutton">
      <checkbutton :ischecked="iteminfo.checked" @click.native="checkclick"></checkbutton>
    </div>
    <div class="itemimg">
      <img :src="iteminfo.image" alt="">
    </div>
    <div class="iteminfo">
      <div class="title">{{iteminfo.title}}</div>
      <div class="desc">{{iteminfo.desc}}</div>
      <div class="price">
        <div>
          ￥{{iteminfo.realprice}}
        </div>
        <div>
          x{{iteminfo.count}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkbutton from "components/content/CheckButton/checkbutton";
export default {
  name: "cartlistitem",
  props: {
    iteminfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    checkbutton
  },
  methods: {
    checkclick() {
      this.iteminfo.checked = !this.iteminfo.checked
    }
  }
}
</script>

<style scoped>
.listitem {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.itemimg {
  padding: 5px;
}
.itemimg img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.iteminfo {
  padding: 2px 10px 2px 0px;
  overflow: hidden;
}
.title,.desc {
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  font-weight: 500;
}
.desc {
  font-size: 13px;
  padding: 15px 0 27px 0;
}
.price {
  display: flex;
  justify-content: space-between;
}
.price div:first-child {
  color: red;
}
.checkbutton {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

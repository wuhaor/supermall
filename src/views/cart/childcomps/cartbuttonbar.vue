<template>
  <div class="cartbuttonbar">
    <div class="checkitem">
      <div class="checkcontent">
        <checkbutton :ischecked="allchecked" @click.native="checkall"></checkbutton>
      </div>
      <span class="qx">全选</span>
    </div>
    <div class="sum">
      <span>合计：{{totalprice}}</span>
    </div>
    <div class="counter">
      去计算({{countnum}})
    </div>
  </div>
</template>

<script>
import checkbutton from "components/content/CheckButton/checkbutton";
import { mapGetters } from "vuex"
export default {
  name: "cartbuttonbar",
  components: {
    checkbutton
  },
  computed: {
    ...mapGetters(['cartlist']),
    totalprice() {
      return '￥' + this.cartlist.filter(item => { return item.checked }).reduce((preValue, item) => {
        return preValue + item.realprice * item.count
      }, 0).toFixed(2);
    },
    countnum() {
      return this.cartlist.filter(item => {
        return item.checked
      }).length
    },
    allchecked() {
      if(this.cartlist.length === 0) return false;
      else return !this.cartlist.find(item => !item.checked)
    }
  },
  methods: {
    checkall() {
      if(this.allchecked) {
        this.cartlist.forEach(item => item.checked = false);
      }else {
        this.cartlist.forEach(item => item.checked = true);
      }
    }
  }
}
</script>

<style scoped>
.cartbuttonbar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background: #eee;
  font-size: 14px;
}
.checkitem {
  width: 80px;
  display: flex;
}
.checkcontent {
  display: flex;
  align-items: center;
  line-height: 20px;
  padding-left: 10px;
}
.qx {
  margin-left: 5px;
}
.sum {
  padding-left: 40px;
  flex: 1;
}
.counter {
  width: 100px;
  background-color: red;
  color: white;
  text-align: center;
}
</style>

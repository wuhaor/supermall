<template>
  <div class="detailshopinfo">
    <div class="top">
      <img :src="shopInfo.shoplogo" alt="" @load="imgload">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="center">
      <div class="left">
        <div>
          <p>{{shopInfo.sells | sellscount}}</p>
          <span>总销量</span>
        </div>
        <div>
          <p>{{shopInfo.goods}}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <div v-for="item in shopInfo.score" class="ritem">
          <span>{{item.name}}</span>
          <span :class="{fontred: item.isBetter, fontgreen: !item.isBetter}">{{item.score}}</span>
          <span :class="{heigh: item.isBetter, low: !item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailshopinfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return{}
      }
    }
  },
  methods: {
    imgload() {
      this.$emit('isimgload');
    }
  },
  filters: {
    sellscount: function (value) {
      if(value < 10000) return value;
      else return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
  .detailshopinfo {
    padding: 20px 8px;
    border-bottom: 5px solid #f2f5f8;
    margin-bottom: 50px;
  }
  .top {
    display: flex;
    height: 45px;
    font-size: 16px;
    line-height: 45px;
    font-weight: 550;
  }
  .top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-right: 10px;
  }
  .center {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
  }
  .left {
    display: flex;
    justify-content: space-around;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    padding-right: 5px;
  }
  .left div {
    padding-right: 20px;
    text-align: center;
  }
  .left p {
    font-size: 20px;
    font-weight: 600;
  }
  .left span {
    font-size: 14px;
    font-weight: 600;
  }
  .left div:nth-child(2) {
    padding-top: 4px;
  }
  .ritem{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding-top: 4px;
  }
  .ritem span {
    margin-left: 15px;
    font-weight: 600;
  }
  .ritem span:nth-child(2) {
    padding-top: 4px;
    text-align: left;
  }
  .fontgreen {
    color: #5ea732;
  }
  .fontred {
    color: #f13e3a;
  }
  .low {
    color: white;
    background: #5ea732;
  }
  .heigh {
    color: white;
    background: #f13e3a;
  }
  .bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>

<template>
  <div id="detail">
    <detailnavbar class="navbar" ref="nav" @tclick="scrolltoposition"></detailnavbar>
    <scroll class="content" :pullUpLoad="true" ref="scroll" :probe-type="3" @scroll="contentscroll">
      <detailswiper :top-images="topimages"></detailswiper>
      <detailbaseinfo :goods="goods"></detailbaseinfo>
      <detailshopinfo :shopInfo="shopinfo"></detailshopinfo>
      <detailgoodsinfo :detail-info="detailInfo" @imgload="gettopoffset"></detailgoodsinfo>
      <detailparam :item-params = "itemParams" ref="params"></detailparam>
      <detailcommentinfo :commentinfo="detailcommentinfo" ref="comment"></detailcommentinfo>
      <goodlist :goodlist="recommend" ref="recommend"></goodlist>
    </scroll>
    <detailbottombar @addCart="addtocart"></detailbottombar>
    <backtop @click.native="topclick" v-show="isbacktop"></backtop>
  </div>
</template>

<script>
import detailnavbar from "./childcomps/detailnavbar";
import {getdetail,Goods,shopInfo,ItemParam,getrecommend} from "network/detail";
import detailswiper from "./childcomps/detailswiper";
import detailbaseinfo from "./childcomps/detailbaseinfo";
import detailshopinfo from "./childcomps/detailshopinfo";
import scroll from "components/common/scroll/scroll";
import detailgoodsinfo from "./childcomps/detailgoodsinfo";
import detailparam from "./childcomps/detailparam";
import detailcommentinfo from "./childcomps/detailcommentinfo";
import goodlist from "components/content/Goods/goodlist";
import detailbottombar from "./childcomps/detailbottombar";

import {mbacktop} from "common/mixin";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topimages: [],
      goods: {},
      shopinfo: {},
      detailInfo: {},
      itemParams: {},
      paramstopoffset: [],
      detailcommentinfo: {},
      recommend: [],
      currentindex: null,
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getdetaildata();
  },
  mixins: [mbacktop],
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    scroll,
    detailgoodsinfo,
    detailparam,
    detailcommentinfo,
    goodlist,
    detailbottombar,
  },
  methods: {
    getdetaildata() {
      getdetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        this.topimages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        this.shopinfo = new shopInfo(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.itemParams = new ItemParam(data.itemParams);
        this.detailcommentinfo = data.rate.list[0];
      });
      getrecommend().then(res => {
        this.recommend = res.data.list;
      })
    },
    gettopoffset() {
      this.paramstopoffset.push(0);
      this.paramstopoffset.push(this.$refs.params.$el.offsetTop);
      this.paramstopoffset.push(this.$refs.comment.$el.offsetTop);
      this.paramstopoffset.push(this.$refs.recommend.$el.offsetTop);
    },
    contentscroll(position) {
      for(let i = 0; i < this.paramstopoffset.length; i++) {
        if(this.currentindex!=i&&((i<this.paramstopoffset.length && -position.y >= this.paramstopoffset[i] && -position.y < this.paramstopoffset[i+1])
          ||(i===this.paramstopoffset.length-1 && -position.y >= this.paramstopoffset[i] ))) {
          this.currentindex = i;
          this.$refs.nav.currentindex = this.currentindex;
        }
      };
      this.listenerbackshow(position)
    },
    scrolltoposition(index) {
      this.$refs.scroll.scrollTo(0, -this.paramstopoffset[index], 200)
    },
    addtocart() {
      const product = {};
      product.image = this.topimages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newprice;
      product.iid = this.iid;
      product.count = 1;
      product.realprice = this.goods.realprice;
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.ToastShow(res, 1500)
      });
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }
  .navbar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px - 58px);
    position: relative;
    overflow: hidden;
  }
</style>

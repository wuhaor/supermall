<template>
  <div id="home">
    <navbar class="navbarbg">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol :titles="['流行','新款','精选']" @itemclick="tabclick" ref="ttabcontrol" :class="{tabControl: isfixed}" v-show="isfixed"></tabcontrol>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentscroll" :pullUpLoad="true" @pullUpLoad="LoadMore">
      <homeSwiper :banners="banners"></homeSwiper>
      <recommendview :recommend="recommends"></recommendview>
      <featureview @isimgload="swiperimgload"></featureview>
      <tabcontrol :titles="['流行','新款','精选']" @itemclick="tabclick" ref="tabcontrol"></tabcontrol>
      <goodlist :goodlist="showtype"></goodlist>
    </scroll>
<!--    组件监听原生事件需要添加.native-->
    <backtop @click.native="topclick" v-show="isbacktop"></backtop>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";
import tabcontrol from "components/common/tabcontrol/tabcontrol";
import scroll from "components/common/scroll/scroll";


import goodlist from "components/content/Goods/goodlist";

import {gethomemuldata,gethomegoods} from "network/home"

import homeSwiper from "./childcomps/homeswiper";
import recommendview from "./childcomps/recommendview";
import featureview from "./childcomps/featureview";

import {mbacktop} from "common/mixin";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {'page': 0, list: []},
        'new': {'page': 0, list: []},
        'sell': {'page': 0, list: []}
      },
      goodtype: 'pop',
      taboffsetTop: 0,
      isfixed: false,
      saveY: 0
    }
  },
  components: {
    navbar,
    homeSwiper,
    recommendview,
    featureview,
    tabcontrol,
    goodlist,
    scroll,
  },
  created() {
    this.gethomemuldata();
    this.gethomegoods('pop');
    this.gethomegoods('new');
    this.gethomegoods('sell');
  },
  mounted() {
    this.changeheight();
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getscrollY();
  },
  mixins: [mbacktop],
  methods: {
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args)
        },delay)
      }
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.goodtype = 'pop';
          break;
        case 1:
          this.goodtype = 'new';
          break;
        case 2:
          this.goodtype = 'sell'
      };
      this.$refs.ttabcontrol.currentindex = index;
      this.$refs.tabcontrol.currentindex = index;
    },
    gethomemuldata() {
      gethomemuldata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1;
      gethomegoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
         this.goods[type].page += 1
      })
    },
    changeheight() {
      const refresh = this.debounce(this.$refs.scroll.refresh, 50);
      this.$bus.$on('itemimgload',() => {
        refresh()
      })
    },
    contentscroll(position) {
      this.listenerbackshow(position);
      this.isfixed = -(position.y) > this.taboffsetTop;
    },
    LoadMore() {
      this.gethomegoods(this.goodtype);
      this.$refs.scroll.finishPullUp()
    },
    swiperimgload() {
      this.taboffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    }
  },
  computed: {
    showtype() {
      return this.goods[this.goodtype].list
    }
  }
}
</script>

<style scoped>
#home {
  margin-top: 0px;
  height: 100vh;
  position: relative;
}
.navbarbg{
  background: var(--color-tint);
  box-shadow: 0 1px 1px 0 rgba(100,100,100,.1);
  color: #fff;
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  z-index: 9;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>

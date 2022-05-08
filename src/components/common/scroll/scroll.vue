<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveDom from '@better-scroll/observe-dom'
export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    getscrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  },
  mounted() {
    BScroll.use(ObserveDom);
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true
    });
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    });
    this.scroll.on('pullingUp', () => {
      this.$emit('pullUpLoad')
    })
  }
}
</script>

<style scoped>
</style>

<template>
<div class="tabcontrol">
  <div class="tabcontrol-item" v-for="(item,index) in titles" :class="{active: currentindex == index}" @click="tabclick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "tabcontrol",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentindex: 0
    }
  },
  methods: {
    tabclick(index) {
      this.currentindex = index;
      this.$emit('itemclick',index)
    }
  }
}
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  position: sticky;
  top: 40px;
  z-index: 7;
  background: white;
}
.tabcontrol-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tabcontrol-item span {
  padding: 7px;
}
.active span{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>

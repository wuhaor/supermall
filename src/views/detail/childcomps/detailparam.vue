<template>
  <div class="itemparams" v-if="Object.keys(itemParams).length !== 0">
    <table class="top">
      <tr v-for="item in itemParams.tables">
        <td v-for="it in item">{{it}}</td>
      </tr>
    </table>
    <table class="bottom">
      <tr v-for="item in itemParams.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "detailparam",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.itemparams {
  width: 100%;
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.top {
  width: 100%;
  border-collapse: collapse;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.top tr {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  height: 42px;
  /*line-height: 42px;*/
}
.bottom {
  width: 100%;
  border-collapse: collapse;
}
.bottom tr {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  height: 42px;
}
.bottom tr td:nth-child(1) {
  width: 98px;
}
.bottom tr td:nth-child(2) {
  color: #eb4868;
}
</style>

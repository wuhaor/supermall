<template>
  <div v-if="Object.keys(commentinfo).length != 0" class="commentinfo">
      <div class="top">
        <div class="usercomment">用户评论</div>
        <div class="more">更多</div>
      </div>
    <div class="center">
      <div class="userinfo">
        <img :src="commentinfo.user.avatar" alt="">
        <span>{{commentinfo.user.uname}}</span>
      </div>
      <div class="commenttext">
        {{commentinfo.content}}
      </div>
      <div class="commentother">
        <span>{{commentinfo.created | showDate}}</span>
        <span>{{commentinfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentinfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: "detailcommentinfo",
  props: {
    commentinfo: {
      type: Object,
      default() {
        return{}
      }
    }
  },
  filters: {
    showDate: function (value) {
      //1.将时间戳转成Date对象
      let date = new Date(value * 1000);
      //2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm");
      //正则表达式方法--格式化时间戳
      // return new Date(parseInt(value) * 1000)
      //   .toLocaleString()
      //   .replace(/:\d{1,2}$/, " ");
    },
  },
}
</script>

<style scoped>
.commentinfo {
  padding: 10px 10px 25px 10px;
  border-bottom: 5px solid #f2f5f8;
}
.top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-bottom: 10px;
}
.usercomment {
  font-size: 14px;
  color: #000;
  height: 35px;
  line-height: 35px;
}
.more {
  font-size: 14px;
  color: #000;
  height: 35px;
  line-height: 35px;
  font-style: italic;
}
.userinfo {
  margin-top: 10px;
}
.userinfo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.userinfo span {
  position: relative;
  top: -15px;
  margin-left: 10px;
  font-size: 14px;
  color: #000;
}
.commenttext {
  font-size: 14px;
}
.commentother {
  margin-top: 15px;
  font-size: 12px;
}
.commentother span{
  margin-right: 10px;
}
.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>

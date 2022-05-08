//时间格式转化
export function formatDate(date, fmt) {
  //获取年份
  //y+ ->1个或者多个y
  //y* ->0个或者多个y
  //y? ->0个或者1个y
  //yy-19
  //yyyy-2019
  //yyy-019
  //y-9
  //(date.getFullYear() + '') 将数字直接转为字符串的一种方法
  if (/(y+)/.test(fmt)) {
    //yyyy 2019,2019.substr(4 - 4)=2019 截取掉0位
    //yyy 2019,2019.substr(4 - 3)=019 接去掉1位
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    //M+->正则表达式规则
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
//04:04:04
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

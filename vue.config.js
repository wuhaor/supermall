module.exports = {
  configureWebpack: {
    resolve: {
      /*extend:[],可添加导入时省略的文件后缀*/
      alias: { /*添加别名，cli3默认已有 @： src*/
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common'

      }
    }
  },
}

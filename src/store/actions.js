import {ADDITEM, ADDCOUNT} from "./mutationstype";
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let ispush = context.state.CartProduct.find(item => item.iid === payload.iid);
      if(ispush) {
        context.commit(ADDCOUNT, ispush)
        resolve('商品数量+1')
      }else {
        context.commit(ADDITEM, payload);
        resolve('已添加新商品')
      }
    })
  }
}

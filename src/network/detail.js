import {request} from "./request";

export function getdetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getrecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newprice = itemInfo.price;
    this.oldprice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realprice = itemInfo.lowNowPrice;
    this.discountBgcolor = itemInfo.discountBgColor;
  }
}

export class shopInfo {
  constructor(shopinfo) {
    this.name = shopinfo.name;
    this.sells = shopinfo.cSells;
    this.goods = shopinfo.cGoods;
    this.shoplogo = shopinfo.shopLogo;
    this.score = shopinfo.score;
  }
}

export class ItemParam {
  constructor(itemParams) {
    this.tables = itemParams.rule.tables[0];
    this.set = itemParams.info.set
  }
}

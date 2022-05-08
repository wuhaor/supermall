import vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

vue.use(Vuex);

const state = {
  CartProduct: []
}
//new Vuex.Store的Store一定首字母大写
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;

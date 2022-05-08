import {ADDITEM, ADDCOUNT} from "./mutationstype";

export default {
  [ADDITEM](state, payload) {
    payload.checked = true;
    state.CartProduct.push(payload);
  },
  [ADDCOUNT](state, payload) {
    payload.count++;
  }
}

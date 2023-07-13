// store/index.js
import Vue from "vue";
import Vuex from "vuex";

import cart from "./modules/cart";
import user
 from "./modules/user";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    cart: cart,
    user: user
  },
});


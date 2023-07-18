// store/modules/cart.js
const state = {
  cartItems: [],
};

const getters = {
  cartItemCount: (state) => {
    return state.cartItems.length;
  },
  getCartItemById: (state) => (productId) => {
    return state.cartItems.find((item) => item.id === productId);
  },
};

const mutations = {
  addToCart(state, product) {
    const existingItem = state.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.cantidad += product.cantidad;
    } else {
      state.cartItems.push(product);
    }
  },
  updateCartItemQuantity(state, { productId, quantity }) {
    const existingItem = state.cartItems.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.cantidad = quantity;
    }
  },
  removeProductFromCart(state, productId) {
    state.cartItems = state.cartItems.filter((item) => item.id !== productId);
  },
  setCartItems(state, items) {
    state.cartItems = items;
  },
  clearCartItems(state) {
    state.cartItems = [];
  }
};

const actions = {
  addProductToCart({ commit }, product) {
    commit("addToCart", product);
  },
  updateQuantity({ commit }, { productId, quantity }) {
    commit("updateCartItemQuantity", { productId, quantity });
  },
  removeProductFromCart({ commit }, productId) {
    commit("removeProductFromCart", productId);
  },
  vaciarCarrito({ commit }) {
    commit("setCartItems", []);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

// store/modules/cart.js
const state = {
  cartItems: [],
};

const getters = {
  cartItemCount: (state) => {
    return state.cartItems.reduce((total, item) => total + item.cantidad, 0);
  },
  getCartItemById: (state) => (productId) => {
    return state.cartItems.find((item) => item.id === productId);
  },
};

const mutations = {
  addToCart(state, product) {
    const existingItem = state.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.cantidad += 1;
    } else {
      state.cartItems.push({ ...product, cantidad: 1 });
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
  addProductToCart({ commit, getters }, product) {
    const cartItem = getters.getCartItemById(product.id);

    if (cartItem) {
      commit("updateCartItemQuantity", {
        productId: product.id,
        quantity: cartItem.cantidad + 1
      });
    } else {
      commit("addToCart", product);
    }
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

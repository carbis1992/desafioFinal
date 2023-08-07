export const cart = {
  state: {
    cartItems: [],
  },
  getters: {
    cartItemCount: (state) => {
      return state.cartItems.reduce((total, item) => total + item.cantidad, 0);
    },
    getCartItemById: (state) => (productId) => {
      return state.cartItems.find((item) => item.id === productId);
    },
    cartItems: state => state.cartItems,
    calculateTotalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
    },
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product)
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
    clearCartItems(state) {
      state.cartItems = [];
    },
  },
  actions: {
    addProductToCart({ commit, getters }, product) {
      const cartItem = getters.getCartItemById(product.id);

      if (cartItem) {
        commit("updateCartItemQuantity", { productId: product.id, quantity: cartItem.cantidad + 1 });
      } else {
        commit("addToCart", { ...product, cantidad: 1 });
      }
    },
    incrementQuantity({ commit }, product) {
      commit("updateCartItemQuantity", { productId: product.id, quantity: product.cantidad + 1 });
    },
    decrementQuantity({ commit }, product) {
      if (product.cantidad > 0) {
        commit("updateCartItemQuantity", { productId: product.id, quantity: product.cantidad - 1 });
      }
    },
    removeProductFromCart({ commit }, productId) {
      commit("removeProductFromCart", productId);
    },
    vaciarCarrito({ commit }) {
      commit("clearCartItems");
    },
  }
}

// store/modules/cart.js
const state = {
    cartItems: [],
  };
  
  const getters = {
    cartItemCount: (state) => {
      return state.cartItems.length;
    },
  };
  
  const mutations = {
    addToCart(state, product) {
      state.cartItems.push(product);
    },
    updateQuantity(state, { productId, quantity }) {
      const product = state.cartItems.find(item => item.id === productId);
      if (product) {
        product.cantidad = quantity;
      }
    },
    removeProductFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
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
      commit("updateQuantity", { productId, quantity });
    },
    removeProductFromCart({ commit }, productId) {
      commit("removeProductFromCart", productId);
    },
    vaciarCarrito({ commit }) {
      commit("setCartItems", []); // Vaciar el arreglo de items del carrito
    },
  };
  
  export default {
    state,
    getters,
    mutations,
    actions,
  };
  
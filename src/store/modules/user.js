export const user = {
  state: {
    user: null
  },
  getters: {
    user: state => state.user,
    loggedIn: state => !!state.user,
    isAdmin: state => state.user?.isAdmin || false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    }
  },
  actions: {
    loginUser({ commit }, user) {
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    logoutUser({ commit }) {
      localStorage.removeItem("user");
      commit("clearUser");
    },
    initializeUser({ commit }) {
      const user = JSON.parse(localStorage.getItem("user"));
      commit("setUser", user);
    }
  }
}

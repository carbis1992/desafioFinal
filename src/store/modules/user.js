const state = {
  user: null
};

const getters = {
  user: state => state.user,
  loggedIn: state => !!state.user,
  isAdmin: state => state.user?.isAdmin || false
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  }
};

const actions = {
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
};

export default {
  state,
  getters,
  mutations,
  actions
};

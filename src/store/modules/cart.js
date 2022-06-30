export default {
  namespaced: true,

  state: {
    cart: [],
  },

  getters: {
    cartLength(state) {
      return state.cart.length;
    },
    totalCartPrice(state) {
      return state.cart.reduce((previous, current) => Number(previous) + Number(current.price), 0);
    }
  },

  mutations: {
    SET_CART(state, newProduct) {
      state.cart.push(newProduct);
    }
  },

  actions: {
    async addProductToCart({ commit }, product) {
      commit('SET_CART', product);
    }
  }
}
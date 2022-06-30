export default {
  namespaced: true,

  state: {
    cart: [],
  },

  getters: {
    cartLength(state) {
      console.log('CART : ', state.cart);
      return state.cart.length;
    }
  },

  mutations: {
    SET_CART(state, newProduct) {
      state.cart.push(newProduct);
      console.log(state.cart);
    }
  },

  actions: {
    async addProductToCart({ commit }, product) {
      console.log('ok ?');
      commit('SET_CART', product);
    }
  }
}
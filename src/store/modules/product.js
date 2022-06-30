import { getProducts } from '@/api/products.js';

export default {
  namespaced: true,

  state: {
    products: [],
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },

  actions: {
    async getProducts({ commit }) {
      const data = await getProducts();
      console.log(data);
      commit('SET_PRODUCTS', data);
    }
  }
}
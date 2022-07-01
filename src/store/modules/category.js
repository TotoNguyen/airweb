import { getCategories } from '@/api/categories.js';

export default {
  namespaced: true,

  state: {
    categories: [],
  },

  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    }
  },

  actions: {
    async getCategories({ commit }) {
      const data = await getCategories();
      commit('SET_CATEGORIES', data);
    }
  }
}
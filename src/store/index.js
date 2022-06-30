import { createStore } from 'vuex';
import cart from './modules/cart.js';
import category from './modules/category.js';
import product from './modules/product.js';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 1000
    }
  },
  modules: {
    cart,
    category,
    product
  }
})

export default store;

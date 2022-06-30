<template>
  <section class="products-list">
    <router-link :to="{ name: 'Cart', params: {}}">
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16C14.89 16 14 16.89 14 18C14 18.5304 14.2107 19.0391 14.5858 19.4142C14.9609 19.7893 15.4696 20 16 20C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18C18 16.89 17.1 16 16 16ZM0 0V2H2L5.6 9.59L4.24 12.04C4.09 12.32 4 12.65 4 13C4 13.5304 4.21071 14.0391 4.58579 14.4142C4.96086 14.7893 5.46957 15 6 15H18V13H6.42C6.3537 13 6.29011 12.9737 6.24322 12.9268C6.19634 12.8799 6.17 12.8163 6.17 12.75C6.17 12.7 6.18 12.66 6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.58 16.3 9.97L19.88 3.5C19.95 3.34 20 3.17 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H4.21L3.27 0H0ZM6 16C4.89 16 4 16.89 4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18C8 16.89 7.1 16 6 16Z" />
      </svg>
      {{ cartLength }}
    </router-link>
    <div v-for="category of productsPerCategory" :key="category.id" class=" w-1/2 m-auto mb-14">
      <h1 class="text-[16px] text-left">{{ category.label }}</h1>
      <product-elt
        v-for="p of category.products"
        :key="p.id"
        :data="p"
        @add-to-cart="addToCart">
      </product-elt>
    </div>
  </section>
</template>

<script>
import ProductElt from '@/components/Product.vue';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'ProductsList',
  components: {
    ProductElt,
  },
    computed: {
    ...mapState({
      categories: state => state.category.categories,
      products: state => state.product.products
    }),
    ...mapGetters({ cartLength: 'cart/cartLength' }),
    productsPerCategory() {
      // TODO : JSON handling in api.js
      console.log(this.categories);
      console.log(this.products);
      if (!this.categories.length) return [];
      return this.categories.map(category => ({
        ...category,
        products: this.products.filter(product => product.category_id === category.id)
      }));
    }
  },
  mounted() {
    // Call list of products & categories
    this.$store.dispatch('product/getProducts');
    this.$store.dispatch('category/getCategories');
  },
  methods: {
    addToCart(productId) {
      console.log(productId);
      // Check if product id is in the list before adding to cart
      const product = this.products.find(product => product.id === productId);
      if (product && product.id) {
        this.$store.dispatch('cart/addProductToCart', product);
      } else {
        console.log('ERREUR : le produit n\'existe pas');
      }
    }
  }
}
</script>

<style scoped>
</style>
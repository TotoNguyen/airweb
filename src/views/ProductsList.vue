<template>
  <section class="products-list">
    <div v-for="category of productsPerCategory" :key="category.id" class="nomobile:w-1/2 m-auto mb-14 xs:px-4">
      <h1 class="text-[16px] text-left font-semibold">{{ category.label }}</h1>
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
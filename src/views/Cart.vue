<template>
  <section class="cart w-1/2 m-auto">
    <h1>Votre panier</h1>
    <div v-for="product of cart" :key="product.id" class="flex justify-between">
      <div>{{ product.label }}</div>
      <div>{{ product.price }} €</div>
    </div>
    <!-- Total section -->
    <div class="flex justify-between">
      <p>TOTAL</p>
      <p>{{ totalPrice }} €</p>
    </div>
  </section>
</template>

<script>
// import ProductElt from '@/components/Product.vue';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'OrderCart',
  // components: {
    // ProductElt,
  // },
    computed: {
    ...mapState({
      cart: state => state.cart.cart,
    }),
    ...mapGetters({
      totalPrice : 'cart/totalCartPrice'
    })
    // ...mapGetters({ cartLength: 'cart/cartLength' }),
    // productsPerCategory() {
    //   // TODO : JSON handling in api.js
    //   console.log(this.categories);
    //   console.log(this.products);
    //   if (!this.categories.length) return [];
    //   return this.categories.map(category => ({
    //     ...category,
    //     products: this.products.filter(product => product.category_id === category.id)
    //   }));
    // }
  },
  mounted() {
    // Call list of products & categories
    // this.$store.dispatch('product/getProducts');
    // this.$store.dispatch('category/getCategories');
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
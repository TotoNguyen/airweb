<template>
  <section class="cart">
    <main>
      <h1 class="text-black-text text-xl flex mb-8">
        <img src="@/assets/img/cart.svg" />
        <span class="ml-4 font-semibold">{{ $t('cartTitle')}}</span>
      </h1>
      <div v-for="product of cart" :key="product.id" class="flex justify-between mb-6">
        <div>{{ product.label }}</div>
        <div class="text-black font-semibold">{{ product.price }} €</div>
      </div>
      <!-- Total section -->
      <div class="flex justify-between bg-gray-total-bg font-semibold text-black rounded-md p-3 mb-14">
        <p>TOTAL</p>
        <p>{{ totalPrice }} €</p>
      </div>
    </main>
    <footer class="flex justify-end">
      <button-elt v-if="cart.length > 0" class="primary uppercase">{{ $t('proceedToPayment') }}</button-elt>
    </footer>
  </section>
</template>

<script>
import ButtonElt from '@/components/ButtonElt.vue';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'OrderCart',
  components: {
    ButtonElt,
  },
    computed: {
    ...mapState({
      cart: state => state.cart.cart,
    }),
    ...mapGetters({
      totalPrice : 'cart/totalCartPrice'
    })
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
.cart {
  @apply nomobile:w-1/2 m-auto xs:p-4 text-gray-title;
}
</style>
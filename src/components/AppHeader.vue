<template>
  <header class="flex justify-between px-8 py-6">
    <div>test</div>
    <router-link :to="{ name: 'Cart', params: {}}">
      <div class="relative">
        <img src="@/assets/img/cart.svg" />
        <div class="cart-number">{{ cartLength }}</div>
      </div>
    </router-link>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters({ cartLength: 'cart/cartLength' }),
  }
};
</script>

<style scoped>
.cart-number {
  min-width: 1.5rem;
  right: -10px;
  bottom: -10px;
  @apply absolute rounded-full bg-gray-total-bg;
}
</style>

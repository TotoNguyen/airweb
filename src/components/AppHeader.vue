<template>
  <header class="flex justify-between px-8 py-6">
    <ul class="flex">
      <li @click="changeLanguage('fr')">Français</li>
      <li @click="changeLanguage('en')">English</li>
    </ul>
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
  },
  methods: {
    changeLanguage(language) {
      this.$root.$i18n.locale = language;
    }
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
li {
  @apply px-2
}
</style>

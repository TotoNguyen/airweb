<template>
  <header class="flex justify-between px-8 py-6">
    <!-- Languages section -->
    <ul class="flex">
      <li v-for="l in languages" :key="l.value" :value="l.value" @click="changeLanguage(l.value)">{{ l.name }}</li>
    </ul>
    <!-- Cart link -->
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
  data() {
    return {
      languages: [
        { value: 'fr', name: 'Français' },
        { value: 'en', name: 'English' },
      ]
    }
  },
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
li:hover {
  cursor: pointer;
}
li + li:before {
    content: "/ ";
}
</style>

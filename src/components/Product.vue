<template>
  <!-- Card -->
  <section class="product-card">
    <p v-if="mobileWidth">
      {{ width }}
      <button-elt @click="addToCart">Bouton</button-elt>
    </p>
    <div v-else class="flex flex-col p-3">
      <div class="flex">
        <img :src="data.thumbnail_url" class="rounded-full w-[60px] h-[60px]" />
        <div class="ml-8">
          <h1 class="text-gray-title">{{ data.label }}</h1>
          <p class="mt-8">{{ data.description }}</p>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <div class="price">{{ data.price }} €</div>
        <button-elt @click="addToCart(data.id)" class="flex align-middle uppercase">
          <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 6.75H9.75V4.5H12V3H9.75V0.75H8.25V3H6V4.5H8.25V6.75ZM5.25 13.5C4.85218 13.5 4.47064 13.658 4.18934 13.9393C3.90804 14.2206 3.75 14.6022 3.75 15C3.75 15.3978 3.90804 15.7794 4.18934 16.0607C4.47064 16.342 4.85218 16.5 5.25 16.5C5.64782 16.5 6.02936 16.342 6.31066 16.0607C6.59196 15.7794 6.75 15.3978 6.75 15C6.75 14.6022 6.59196 14.2206 6.31066 13.9393C6.02936 13.658 5.64782 13.5 5.25 13.5ZM12.75 13.5C12.3522 13.5 11.9706 13.658 11.6893 13.9393C11.408 14.2206 11.25 14.6022 11.25 15C11.25 15.3978 11.408 15.7794 11.6893 16.0607C11.9706 16.342 12.3522 16.5 12.75 16.5C13.1478 16.5 13.5294 16.342 13.8107 16.0607C14.092 15.7794 14.25 15.3978 14.25 15C14.25 14.6022 14.092 14.2206 13.8107 13.9393C13.5294 13.658 13.1478 13.5 12.75 13.5ZM5.3775 11.0625L5.4 10.9725L6.075 9.75H11.6625C12.225 9.75 12.72 9.4425 12.975 8.9775L15.87 3.72L14.565 3H14.5575L13.7325 4.5L11.6625 8.25H6.3975L6.3 8.0475L4.62 4.5L3.9075 3L3.2025 1.5H0.75V3H2.25L4.95 8.6925L3.9375 10.53C3.8175 10.74 3.75 10.9875 3.75 11.25C3.75 11.6478 3.90804 12.0294 4.18934 12.3107C4.47064 12.592 4.85218 12.75 5.25 12.75H14.25V11.25H5.565C5.4675 11.25 5.3775 11.1675 5.3775 11.0625Z" />
          </svg>
          Ajouter au panier
        </button-elt>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonElt from './ButtonElt.vue';

export default {
  name: 'ProductElt',
  components: {
    ButtonElt
  },
  data() {
    return {
      width: window.innerWidth,
      mobileMaxWidth: 480,
    };
  },
  props: {
    data: Object,
  },
  computed: {
    mobileWidth() {
      return this.width < this.mobileMaxWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
    },
    addToCart(productId) {
      this.$emit('addToCart', productId);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
  @apply bg-white text-gray-text text-left rounded-xl mt-8 drop-shadow-md;
}
.price {
  font-size: 1.4rem;
  @apply p-2 bg-gray-price-bg text-black-text font-semibold rounded-md;
}
</style>

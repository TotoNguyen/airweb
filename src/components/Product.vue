<template>
  <!-- Card -->
  <section class="product-card">
    <!-- Mobile display-->
    <div v-if="mobileWidth" class="flex">
      <img :src="data.thumbnail_url" class="rounded-full w-[60px] h-[60px] mx-3 my-auto" />
      <div class="m-3">
        <h1 class="text-gray-title">{{ data.label }}</h1>
        <p class="mt-8">{{ data.description }}</p>
      </div>
      <div class="flex flex-col justify-between">
        <div class="price">{{ data.price }} €</div>
        <button-elt class="icon-btn mx-auto m-4" @click="addToCart(data.id)">
          <img class="p-1" src="@/assets/img/add-product.svg" />
        </button-elt>
      </div>
    </div>
    <!-- Desktop display -->
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
        <button-elt class="icon-btn flex align-middle uppercase" @click="addToCart(data.id)">
          <img src="@/assets/img/add-product.svg" />
          <span class="pl-4">Ajouter au panier</span>
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
  /* font-size: 1.4rem; */
  @apply nomobile:text-lg whitespace-nowrap text-black-text font-semibold bg-gray-price-bg p-2 rounded-md;
}
</style>

<template>
  <!-- Card -->
  <section class="product bg-white rounded-xl mt-8 drop-shadow-md">
    <p v-if="mobileWidth">
      {{ width }}
      <button-elt @click="addToCart">Bouton</button-elt>
    </p>
    <div v-else class="flex flex-col p-3">
      <div class="flex">
        <img :src="data.thumbnail_url" class="rounded-full w-[60px] h-[60px]" />
        <div class="ml-8">
          <h1 class="text-gray-600 text-left">{{ data.label }}</h1>
          <p class="text-gray-400 text-left mt-8">{{ data.description }}</p>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <div class="p-2 bg-gray-300 text-black font-semibold rounded-md">{{ data.price }} €</div>
        <button-elt @click="addToCart(data.id)">Ajouter au panier</button-elt>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <section class="products-list text-left">
    <!-- Product search input -->
    <input
      v-model="searchText"
      type="text"
      class="mb-8 p-2 rounded-lg mx-4"
      :placeholder="$t('searchPlaceholder')"
      @input="filterProducts" />
    <!-- Display list of products per category -->
    <div v-for="category of resultsArray" :key="category.id" class="nomobile:w-1/2 m-auto mb-14 xs:px-4">
      <h1 class="text-[16px] text-left font-semibold">{{ category.label }}</h1>
      <product-elt
        v-for="p of category.products"
        :key="p.id"
        :data="p"
        @add-to-cart="addToCart">
      </product-elt>
    </div>
  </section>

  <Teleport to="body">
    <teleport-modal
      :open="modalOpened"
      :is-notif="true"
      class="notification"
      @close="modalOpened = false">
      <template #default><div>{{ $t('productAddedToCart') }}</div></template>
      <template #footer>
        <button @click="modalOpened = false">{{ $t('close') }}</button>
      </template>
    </teleport-modal>
  </Teleport>
</template>

<script>
import ProductElt from '@/components/Product.vue';
import TeleportModal from '@/components/TeleportModal.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ProductsList',
  components: {
    ProductElt,
    TeleportModal,
  },
  data() {
    return {
      searchText: '',
      resultsArray: [],
      modalOpened: false,
    }
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories,
      products: state => state.product.products
    }),
    ...mapGetters({ cartLength: 'cart/cartLength' }),
    productsPerCategory() {
      // Return list of categories with associated products
      if (!this.categories.length) return [];
      return this.categories.map(category => ({
        ...category,
        products: this.products.filter(product => product.category_id === category.id)
      }));
    }
  },
  watch: {
    // Need to copy productsPerCategory array because will be manipulated for search input
    productsPerCategory() {
      this.resultsArray = this.productsPerCategory.map(c => ({ ...c }));
    }
  },
  mounted() {
    // Call list of products & categories
    this.$store.dispatch('product/getProducts');
    this.$store.dispatch('category/getCategories');
  },
  methods: {
    addToCart(productId) {
      // Check if product id is in the list before adding to cart
      const product = this.products.find(product => product.id === productId);
      if (product && product.id) {
        this.$store.dispatch('cart/addProductToCart', product);
        this.modalOpened = true;
      } else {
        console.log('ERREUR : le produit n\'existe pas');
      }
    },
    filterProducts() {
      this.resultsArray = this.productsPerCategory.map((category) => {
        return {
          ...category,
          products: category.products.filter(p => (p.label.toLowerCase()).includes(this.searchText))
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
<template>
  <v-row class="index-application">
    <v-col v-for="(prod, i) in products" :key="i" cols="12" sm="4" md="3">
      <product-card :product="prod" />
    </v-col>
  </v-row>
</template>

<script>
// import { mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard';

export default {
  name: 'PageProduct',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      errorMessage: '',
      searchTerm: '',
    };
  },
  // computed: {
  //   ...mapGetters({
  //     products: 'cart/itemsState',
  //   }),
  // },
  async created() {
    try {
      this.products = (await this.$axios.get('/api/products')).data.products;
    } catch (error) {
      this.errorMessage = 'Problemas ao carregar a lista!';
    }
  },
};
</script>

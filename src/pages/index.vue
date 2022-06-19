<template>
  <v-row align="center">
    <v-col v-for="(prod, i) in products" :key="i" cols="12" sm="4" md="3">
      <product-card :product="prod" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard';

export default {
  name: 'PageProduct',
  components: {
    ProductCard,
  },
  data() {
    return {
      errorMessage: '',
      searchTerm: '',
    };
  },
  computed: {
    ...mapGetters({
      products: 'cart/itemsState',
    }),
  },
};
</script>

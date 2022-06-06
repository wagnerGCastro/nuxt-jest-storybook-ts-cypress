<template>
  <v-row align="center">
    <v-col v-for="(prod, i) in products" :key="i" cols="12" sm="4" md="3">
      <card-product :product="prod" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import CardProduct from '@/components/CardProduct';

export default {
  name: 'PageProduct',
  components: {
    CardProduct,
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
  created() {
    // console.log('items', this.products);
  },
  methods: {},
};
</script>

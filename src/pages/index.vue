<template>
  <v-row align="center">
    <v-col v-for="(p, i) in 7" :key="i" cols="3" sm="8" md="3">
      <card-product />
    </v-col>
  </v-row>
</template>

<script>
import CardProduct from '@/components/CardProduct';

export default {
  name: 'PageProduct',
  components: {
    CardProduct,
  },

  data() {
    return {
      products: [],
      errorMessage: '',
      searchTerm: '',
    };
  },
  computed: {},
  async created() {},
  methods: {},
};
</script>

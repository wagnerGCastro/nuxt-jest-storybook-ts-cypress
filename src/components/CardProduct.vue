<template>
  <v-card class="card-product">
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>

    <v-card-actions class="vcard-actions">
      <v-btn class="cart-btn" color="primary" nuxt to="">
        <v-icon dense class="icon">mdi-cart-outline</v-icon>
      </v-btn>
    </v-card-actions>

    <v-card-title class="headline">DISTINCTIO EXCEPTURI DOLORUM</v-card-title>
    <v-card-text>$791.00</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CardProduct',
  components: {
    //
  },

  data() {
    return {
      products: [],
    };
  },
  computed: {},
  async created() {},
  methods: {},
};
</script>

<style scoped>
.card-product .v-card__title.headline {
  font-size: 15px !important;
  line-height: 1.3rem;
  text-transform: uppercase;
  padding-top: 1px !important;
  padding-bottom: 5px !important;
}

.card-product .vcard-actions {
  margin: -30px -41px 0 78%;
  display: flex;
  justify-content: center;
  max-width: 40px;
}

.card-product .v-btn.cart-btn {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.card-product .v-btn.cart-btn svg {
  height: 20px;
}

.card-product .v-btn:not(.v-btn--round).v-size--default {
  min-width: auto;
}
</style>

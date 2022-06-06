<template>
  <v-card class="card-product">
    <v-img lazy-src="https://picsum.photos/id/11/10/6" :src="product.image"></v-img>

    <v-card-actions class="vcard-actions">
      <v-btn class="cart-btn" color="primary" nuxt @click.prevent="addToCart">
        <v-icon dense class="icon">mdi-cart-outline</v-icon>
      </v-btn>
    </v-card-actions>

    <v-card-title class="headline">{{ product.title }}</v-card-title>
    <v-card-text>R$ {{ product.price }}</v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductCard',

  props: {
    product: {
      type: Object,
      default: () => ({
        id: {
          type: [String, Number],
          default: '',
        },
        title: {
          type: String,
          default: 'Teste Product',
        },
        price: {
          type: [String, Number],
          default: '0.00',
        },
        image: {
          type: String,
          default: 'https://picsum.photos/id/11/500/300',
        },
      }),
    },
  },
  data: () => ({}),
  computed: {},
  async created() {},
  methods: {
    ...mapActions({ addProduct: 'cart/add' }),

    addToCart() {
      this.addProduct(this.product);
    },
  },
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

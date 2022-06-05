<template>
  <div class="component-cart">
    <hr class="space-hr mb-6" />

    <v-row v-for="(p, idx) in products" :key="idx" no-gutters class="mb-3">
      <v-col cols="4" class="mb-4">
        <div class="box-image">
          <v-card outlined>
            <v-img lazy-src="https://picsum.photos/id/11/10/6" :src="p.image"></v-img>
          </v-card>
          <button data-testid="remove-button" class="remove-product">X</button>
        </div>
      </v-col>

      <v-col cols="8">
        <div class="d-flex items-center">
          <div style="width: 100%" class="ml-3">
            <h3 class="title-product">{{ p.title }}</h3>
            <div class="d-flex items-center justify-space-between mt-1">
              <div class="d-flex items-center">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="decrase"
                >
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <span data-testid="quantity" class="quantity pl-2 pr-2">10</span>

                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="plus"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>

              <span class="price">R$ {{ p.price }}</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <hr class="space-hr" />

    <div data-testid="checkout-form" @submit.prevent="checkout">
      <div class="d-flex justify-space-between">
        <p cols="4">Subtotal</p>
        <p cols="8" class="subtotal-price"><span class="text-xs">R$</span>899,00</p>
      </div>

      <div class="d-flex justify-center">
        <v-btn data-testid="checkout-button" type="submit" class="v-btn__button">
          <span>Checkout</span>
          <v-icon light> mdi-arrow-right-thin </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({
      products: 'cart/productsState',
    }),
  },
  watch: {
    //
  },
  methods: {},
};
</script>

<style scoped>
.component-cart {
  padding: 0 16px;
}

.component-cart .decrase,
.component-cart .plus {
  width: 20px;
  color: #939393;
}

.component-cart .box-image {
  position: relative;
}

.component-cart .remove-product {
  position: absolute;
  top: -7px;
  border: 2px solid #fff;
  border-radius: 37px;
  height: 22px;
  width: 22px;
  font-size: 10px;
  line-height: 5px;
  left: -8px;
  color: #fff;
  background: #e74e4e;
  z-index: 1;
}

.component-cart .remove-product:hover {
  background: #cf3131;
}

.component-cart .v-btn__button {
  width: 100%;
}

.component-cart .title-product {
  font-size: 14px;
  font-weight: 400;
}

.component-cart .price {
  font-size: 14px;
  min-width: 60px;
  text-align: right;
  font-weight: 500;
}

.component-cart .quantity {
  font-size: 14px;
}

.component-cart .space-hr {
  margin: auto 0 20px;
  opacity: 0.3;
}

.component-cart .subtotal-price {
  color: blue;
}

.component-cart .text-xs {
  font-size: 12px;
  margin-right: 3px;
}
</style>

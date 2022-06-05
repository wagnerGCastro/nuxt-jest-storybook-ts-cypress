<template>
  <v-app dark class="layout-default">
    <!-- NavBar Left -->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- NavBar Top -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <Search />

      <v-spacer />

      <v-btn class="default-layout__btn-cart" icon @click.stop="rightDrawer = !rightDrawer">
        <v-badge
          :content="qtdCart"
          bordered
          bottom
          color="blue darken-1"
          offset-x="10"
          offset-y="10"
        >
          <v-icon dense class="icon">mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <!-- Main -->
    <v-main class="mt-4">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Draer Cart Right  -->
    <v-navigation-drawer v-model="rightDrawer" :right="right" width="300" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-btn icon title="close">
              <v-icon light>mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-title class="text-left"
            >Clear all products ({{ qtdCart }})</v-list-item-title
          >
          <v-list-item-action>
            <v-btn icon title="clear">
              <v-icon light>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <cart></cart>
    </v-navigation-drawer>

    <!-- Footer -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Search from '~/components/Search.vue';
import Cart from '~/components/Cart.vue';

export default {
  name: 'DefaultLayout',
  components: { Search, Cart },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Checkout',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Produtos',
      qtdCart: '0',
    };
  },
  computed: {
    ...mapGetters({
      qtdProducts: 'cart/qtdProducts',
    }),
  },
  watch: {
    qtdProducts(newTotal) {
      return (this.qtdCart = Number(newTotal) ?? '0');
    },
  },
};
</script>

<style scoped>
.layout-default .v-list-item__action,
.layout-default .v-list-item__title {
  margin-top: 1px !important;
  margin-bottom: 1px !important;
}

.layout-default .default-layout__btn-cart {
  border: 1px solid #aaa;
  margin-right: -5px !important;
  height: 38px !important;
  width: 38px !important;
}

.layout-default .default-layout__btn-cart .v-badge__badge {
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 10px !important;
  height: 10px;
  line-height: 1;
  min-width: 10px !important;
  padding: 4px 6px;
  pointer-events: auto;
  position: absolute;
  top: auto;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
}
</style>

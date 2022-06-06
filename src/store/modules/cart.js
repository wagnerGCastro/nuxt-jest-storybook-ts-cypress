const items = [
  {
    id: 1,
    title: 'EARUM CUMQUE EST',
    price: 45.89,
    image:
      'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    id: 2,
    title: 'AT AUTEM EXCEPTURI',
    price: 15.89,
    image:
      'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    id: 3,
    title: 'SINT MOLESTIAE MAXIME',
    price: 56.89,
    image:
      'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    id: 4,
    title: 'PERFERENDIS ET QUI',
    price: 2689.78,
    image:
      'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
];

export const cart = {
  namespaced: true,

  state: {
    open: false,
    products: [],
    qtdProducts: 0,
    totalProducts: 0,
    items,
  },

  mutations: {
    setProduct(state, product) {
      state.products = [...state.products, product];
    },
    updateProducts(state, products) {
      state.products = products;
    },
    updateDecOrIncProduct(state, { product, type }) {
      state.products = state.products.map((item) => {
        if (item.id === product.id) {
          let qtd = item.qtd;

          if (type === 'decrease') {
            if (Number(item.qtd) > 1) {
              qtd = Number(item.qtd) - 1;
            }
          } else {
            qtd = Number(item.qtd) + 1;
          }

          item.qtd = qtd;
          item.total = qtd * Number(item.price);
        }

        return item;
      });
    },
    removeProductsAll(state) {
      state.products = [];
      state.qtdProducts = 0;
      state.totalProducts = 0;
    },
    setSumCartProducts(state, { qtd, total }) {
      state.qtdProducts = qtd;
      state.totalProducts = total;
    },
  },

  getters: {
    productsState: (state) => state.products,
    qtdProducts: (state) => Object.keys(state.products).length,
    qtdProductsState: (state) => state.qtdProducts,
    totalProductsState: (state) => state.totalProducts,
    itemsState: (state) => state.items,
  },

  actions: {
    async add({ commit, dispatch }, product) {
      // if not exist product
      if (!(await dispatch('productExistCart', product))) {
        const prod = { ...product, qtd: 1, total: product.price };
        commit('setProduct', prod);
        dispatch('sumCartProducts');
      }
    },

    removeProduct({ state, commit, dispatch }, productId) {
      const products = state.products.filter((product) => product.id !== productId);
      commit('updateProducts', products);
      dispatch('sumCartProducts');
    },

    clearAllProducts({ commit }) {
      commit('removeProductsAll');
    },

    productExistCart({ state }, product) {
      return state.products.find(({ id }) => id === product.id);
    },

    decraseOrIncreaseProduct({ commit, dispatch }, { product, type }) {
      commit('updateDecOrIncProduct', { product, type });
      dispatch('sumCartProducts');
    },

    sumCartProducts({ state, commit }) {
      let qtd = 0;
      let total = 0;
      if (state.products.length > 0) {
        state.products.forEach((product) => {
          qtd += Number(product.qtd);
          total += Number(product.total);
        });

        commit('setSumCartProducts', { qtd, total });
      }
    },
  },
};

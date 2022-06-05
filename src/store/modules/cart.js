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
    items,
  },

  mutations: {
    setProduct(state, product) {
      state.products = [...state.products, product];
    },
    removeProduct(state, products) {
      state.products = products;
    },
    removeProductAll(state) {
      state.products = [];
    },
  },

  getters: {
    productsState: (state) => state.products,
    qtdProducts: (state) => Object.keys(state.products).length,
    itemsState: (state) => state.items,
  },

  actions: {
    async add({ dispatch, commit }, product) {
      // if not exist product
      if (!(await dispatch('productExistCart', product))) {
        commit('setProduct', product);
      }
    },

    remove({ state, commit }, productId) {
      const products = [state.products.filter((product) => product.id !== productId)];
      commit('removeProduct', products);
    },

    clear({ commit }) {
      commit('removeProductAll');
    },

    productExistCart({ state }, product) {
      return state.products.find(({ id }) => id === product.id);
    },
  },
};

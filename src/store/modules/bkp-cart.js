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

export const state = () => ({
  open: false,
  products: [],
  items,
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

export const getters = {
  productsState: (state) => state.products,
  itemsState: (state) => state.items,
};

export const actions = {
  add({ state, dispatch, commit }, product) {
    if (dispatch('productIsInTheCart', product)) {
      const products = state.items.push(product);
      commit('setProducts', products);
    }
  },

  remove({ state, commit }, productId) {
    const products = [state.items.filter((product) => product.id !== productId)];
    commit('setProducts', products);
  },

  clear({ commit }) {
    commit('setProducts', []);
  },

  productIsInTheCart(product) {
    return !!state.items.find(({ id }) => id === product.id);
  },
};

import { cart } from './modules/cart';

const debug = process.env.NODE_ENV !== 'production';

export const state = () => ({});

export default {
  modules: {
    cart,
  },
  state,
  mutations: {},
  actions: {},
  getters: {},
  strict: debug,
  plugins: [],
};

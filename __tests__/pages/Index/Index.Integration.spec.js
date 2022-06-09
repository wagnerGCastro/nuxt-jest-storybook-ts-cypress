import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import axios from 'axios';
import { makeServer } from '@/miragejs/server';
import Index from '@/pages';
import Search from '@/components/Search';
import ProductCard from '@/components/ProductCard';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Index - integration', () => {
  let vuetify;
  let server;

  beforeEach(() => {
    vuetify = new Vuetify();
    server = makeServer({ envirement: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should mount the component Index', () => {
    const wrapper = mount(Index, { vuetify });
    expect(wrapper.vm).toBeDefined();
  });

  it('should mount the component Search component as a child', () => {
    const wrapper = mount(Index, {
      vuetify,
    });

    expect(wrapper.findComponent(Search));
  });

  it('should call axios.get on component mount', () => {
    mount(Index, {
      vuetify,
      mocks: {
        $axios: axios,
      },
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/products');
  });

  it('should mount the component ProductCard component 10 products', async () => {
    const products = await server.createList('product', 10);
    axios.get.mockReturnValue(Promise.resolve({ data: { products } }));

    const wrapper = mount(Index, {
      vuetify,
      mocks: {
        $axios: axios,
      },
    });

    await Vue.nextTick();
    // console.log(axios.get());

    const cards = wrapper.findAllComponents(ProductCard);
    expect(cards).toHaveLength(10);
  });

  it('should display the error message when Pormise rejects', async () => {
    axios.get.mockReturnValue(Promise.reject(new Error('Error Get List Products')));

    const wrapper = mount(Index, {
      vuetify,
      mocks: {
        $axios: axios,
      },
    });

    await Vue.nextTick();

    expect(wrapper.text()).toContain('Problemas ao carregar a lista!');
  });
});

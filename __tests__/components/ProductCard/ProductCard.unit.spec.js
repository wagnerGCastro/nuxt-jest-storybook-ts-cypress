import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard';

// const vuetify = new Vuetify();

describe('ProductCard - unit', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  fit('should mount the component', () => {
    const wrapper = mount(ProductCard, {
      vuetify,
      propsData: { product: {} },
    });

    console.log(wrapper.html());

    expect(wrapper.vm).toBeDefined();
  });
});

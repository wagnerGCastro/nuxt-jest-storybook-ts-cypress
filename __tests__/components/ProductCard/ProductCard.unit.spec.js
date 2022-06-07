import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard';
import { makeServer } from '@/miragejs/server';

describe('ProductCard - unit', () => {
  let vuetify;
  let server;

  beforeEach(() => {
    vuetify = new Vuetify();
    server = makeServer({ envirement: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should match snapshot', () => {
    const wrapper = mount(ProductCard, {
      vuetify,
      propsData: {
        product: server.create('product', {
          title: 'Relógio Bonito',
          price: '23.00',
        }),
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should mount the component', () => {
    const wrapper = mount(ProductCard, {
      vuetify,
      propsData: {
        product: server.create('product', {
          title: 'Relógio Bonito',
          price: '22.00',
        }),
      },
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.text()).toContain('Relógio Bonito');
    expect(wrapper.text()).toContain('R$ 22.00');
  });
});

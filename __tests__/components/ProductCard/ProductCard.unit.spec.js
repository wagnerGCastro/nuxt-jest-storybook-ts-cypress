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

  const mountProductCard = () => {
    const product = server.create('product', {
      title: 'Relógio Bonito',
      price: '23.00',
    });

    return {
      wrapper: mount(ProductCard, {
        vuetify,
        propsData: {
          product,
        },
      }),
      product,
    };
  };

  it('should match snapshot', () => {
    const { wrapper } = mountProductCard();
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should mount the component', () => {
    const { wrapper } = mountProductCard();
    expect(wrapper.vm).toBeDefined();
    expect(wrapper.text()).toContain('Relógio Bonito');
    expect(wrapper.text()).toContain('R$ 23.00');
  });

  it('should emit the event addToCart with product object when buton gets clicked', async () => {
    const { wrapper, product } = mountProductCard();

    //console.log(wrapper.find('button').element);

    await wrapper.find('button').trigger('click');

    // console.log(wrapper.emitted());

    /** assert event has been emitted */
    expect(wrapper.emitted().addToCartEmitted).toBeTruthy();

    /**  assert event count */
    expect(wrapper.emitted().addToCartEmitted.length).toBe(1);

    /** assert event payload */
    expect(wrapper.emitted().addToCartEmitted[0]).toEqual([{ product }]);

    // expect(wrapper.element).toMatchSnapshot();
  });
});

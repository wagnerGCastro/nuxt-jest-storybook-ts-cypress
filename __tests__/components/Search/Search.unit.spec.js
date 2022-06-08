import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import Search from '@/components/Search';

describe('Search - unit', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('should mount the component', () => {
    const wrapper = mount(Search, { vuetify });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.vm).toBeDefined();
  });

  it('should emit search event when form is submit', async () => {
    const wrapper = mount(Search, { vuetify });
    const term = 'term to search';

    await wrapper.find('input[type="search"]').setValue(term);
    await wrapper.find('form').trigger('submit');

    // expect(wrapper.emitted().doSearch).toBeFalsy();
    expect(wrapper.emitted().doSearch).toBeTruthy();
    expect(wrapper.emitted().doSearch.length).toBe(1);
    expect(wrapper.emitted().doSearch[0]).toEqual([{ term }]);
  });

  it('should emit search event when search input is cleared', async () => {
    const wrapper = mount(Search, { vuetify });
    const term = 'termo para busca';
    const input = wrapper.find('input[type="search"]');

    await input.setValue(term);
    await input.setValue('');

    expect(wrapper.emitted().doSearch).toBeTruthy();
    expect(wrapper.emitted().doSearch.length).toBe(1);
    expect(wrapper.emitted().doSearch[0]).toEqual([{ term: '' }]);
  });
});

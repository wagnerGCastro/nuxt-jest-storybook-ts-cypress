import { render, screen, fireEvent } from '@testing-library/vue';
import { render as renderUtils } from '@vue/server-test-utils';
import Button from '@/components/Button';

it('renders correctly 1', async () => {
  const wrapper = await renderUtils(Button, { propsData: { text: 'Some Text' } });
  expect(wrapper.text()).toContain('Some Text');
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly 2', () => {
  const wrapper = render(Button, { props: { text: 'Some Text' } });
  expect(wrapper.getByText('Some Text'));
});

it('increments value on click', async () => {
  // The `render` method renders the component into the document.
  // It also binds to `screen` all the available queries to interact with
  // the component.
  render(Button);

  // queryByText returns the first matching node for the provided text
  // or returns null.
  expect(screen.queryByText('Times clicked: 0')).toBeTruthy();

  // getByText returns the first matching node for the provided text
  // or throws an error.
  const button = screen.getByText('increment');

  // Click a couple of times.
  await fireEvent.click(button);
  await fireEvent.click(button);

  expect(screen.queryByText('Times clicked: 2')).toBeTruthy();
});

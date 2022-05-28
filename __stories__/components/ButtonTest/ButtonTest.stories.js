// Button.stories.js
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import ButtonTest from '@/components/ButtonTest'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonTest',
  component: ButtonTest,
}

export const withText = () => ({
  components: { ButtonTest },
  template: '<button-test @click="action">Hello Button</button-test>',
  methods: { action: action('clicked') },
})

// export const withJSX = () => ({
//   render() {
//     return <ButtonTest onClick={linkTo('ButtonTest', 'With Some Emoji')}>With JSX</ButtonTest>;
//   }
// })

export const withSomeEmoji = () => ({
  components: { ButtonTest },
  template: '<button-test>😀 😎 👍 💯</button-test>',
})

export const primaryDecorator = () => ({
  components: { ButtonTest },
  template: '<button-test>😀 😎 👍 💯</button-test>',
})

primaryDecorator.decorators = [() => ({ template: '<div style="margin: 0em;"><story /></div>' })]

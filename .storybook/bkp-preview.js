import { configure } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

configure(require.context('../', true, /\.stories\.ts$/), module)

const vuetifyDecorator = () => ({
  vuetify,
  template: '<v-app><story/></v-app>',
  props: {
    vuetifyDark: {
      type: Boolean,
      default: boolean('Vuetify Dark theme', true),
    },
  },
  watch: {
    vuetifyDark: {
      handler() {
        this.$vuetify.theme.dark = this.vuetifyDark
      },
      immediate: true,
    },
  },
})

addDecorator([vuetifyDecorator, withKnobs])

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['prettier', 'cypress'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-namespace': 'off',

    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
};

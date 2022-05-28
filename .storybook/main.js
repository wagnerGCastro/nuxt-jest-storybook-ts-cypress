const path = require('path')

module.exports = {
  stories: ['../__stories__/**/*.stories.mdx', '../__stories__/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-notes/register',
  ],
  // framework: "@storybook/vue",
  // webpackFinal: async (config, { presets }) => { // 👈 and add this here
  //   const version = await presets.apply('webpackVersion');
  //   const instance = (await presets.apply('webpackInstance'))?.default;

  //   console.table(`=> Running in webpack ${version}: ${instance}`);

  //   return config;
  // },

  webpackFinal: (config) => {
    // 👈 and add this here
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    }

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader','sass-loader'],
    //   include: path.resolver(__dirname, '../')
    // })

    return config
  },
}

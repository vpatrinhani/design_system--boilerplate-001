const rootMain = require('../../../.storybook/main');

const rootWebpackConfig = rootMain.webpackFinal;

// Use the following syntax to add addons!
// rootMain.addons.push('');
// rootMain.stories.push(
//   ...['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
// );

rootMain.webpackFinal = async (config, { mode }) => {
  config = await rootWebpackConfig(config, { mode });

  return config;
};

module.exports = rootMain;

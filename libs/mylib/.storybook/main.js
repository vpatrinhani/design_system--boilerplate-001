const rootMain = require('../../../.storybook/main');

const rootWebpackConfig = rootMain.webpackFinal;

// rootMain.stories.push("./sample_stories/**/*.stories.mdx");
// rootMain.stories.push("./sample_stories/**/*.stories.@(js|jsx|ts|tsx)");

// Use the following syntax to add addons!
rootMain.addons.push(
  '@storybook/addon-essentials',
  '@ljcl/storybook-addon-cssprops'
);
rootMain.addons.push('storybook-addon-themes');
rootMain.addons.push('@geometricpanda/storybook-addon-badges');

rootMain.staticDirs = ['./public', '../../../dist/libs'];

rootMain.stories.push(
  ...['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
);

rootMain.webpackFinal = async (config, { mode }) => {
  config = await rootWebpackConfig(config, { mode });

  return config;
};

module.exports = rootMain;

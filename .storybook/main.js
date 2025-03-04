const projectConfig = require("../webpack/storybook.config.js");

const mergeConfigRules = (originalConfig, newConfigRules) => {
  return {
    ...originalConfig,
    module: { ...originalConfig.module, rules: [...originalConfig.module.rules, ...newConfigRules] },
    resolve: { ...originalConfig.resolve, alias: { ...originalConfig.resolve.alias, ...projectConfig.resolve.alias } }
  };
};

const getProjectConfigRules = () => {
  return projectConfig.module.rules;
};

const getDocsConfigRules = () => {
  return [];
};

const buildConfig = config => {
  config = mergeConfigRules(config, getProjectConfigRules());
  config = mergeConfigRules(config, getDocsConfigRules());
  return config;
};

const getAddons = () => {
  const addons = [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          sassOptions: {
            includePaths: ['./scss', '../node_modules/bootstrap-scss','./src'],
          },
        },
      },
    },
    // "@storybook/addon-controls",
    // "storybook-addon-themes",
    // "@storybook/addon-a11y",
    // "storybook-addon-performance/register",
  ];

  // if (process.env.NODE_ENV !== "production") {
  //   addons.push("@storybook/addon-interactions");
  // }

  return addons;
};

module.exports = {
  stories: [
    "./stories/**/*.stories.mdx",
    "./stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  core: {
    disableTelemetry: true,
  },
  features: {
    interactionsDebugger: true,
    previewMdx2: true
  },
  addons: getAddons(),
  framework: "@storybook/web-components",
  staticDirs: [],
  webpackFinal: async config => {
    return buildConfig(config);
  },
};

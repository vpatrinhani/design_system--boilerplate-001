import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const { version } = require('../package.json');

addons.setConfig({
  theme: create({
    brandTitle: 'DS - Web Components - ' + version,
  }),
  enableShortcuts: false
});


import { create } from '@storybook/theming';

const { version } = require('../package.json');

export default create({
  base: 'dark',

  brandTitle: `My Lib - ${version}`,
  // brandUrl: 'https://example.com',
  // brandImage: 'https://place-hold.it/350x150',
  // brandTarget: '_self',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#016588',
  appContentBg: 'rgba(0, 41, 56, 0.4)',
  appBorderColor: 'silver',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Segoe UI", "Open Sans", Verdana, Arial, Helvetica, sans-serif;',
  // fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'red',
  // textInverseColor: 'rgba(0,0,0,0.9)',
  textMutedColor: 'rgba(255,255,255,0.7)',

  // Toolbar default and active colors
  barTextColor: '#FFFFFFDE',
  barSelectedColor: '#A3D0DC',
  barBg: '#003750',

  // Form colors
  inputBg: 'white',
  inputBorder: '#003750',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});

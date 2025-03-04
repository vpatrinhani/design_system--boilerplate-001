import { iconNamesArray } from '@my-lib-org/mylib-core-styles/src/types/_icons';

import {
  buttonIconPositionsArray,
  buttonIconSizesArray,
  buttonSizesArray,
  buttonTypesArray,
  buttonVariantsArray,
} from '$lib-mylib/src/components/mylib-button/src/_types';
import { themeColorSchemeArray } from '$lib-mylib/src/core/types/MylibThemableComponentInterface';

export const cssProperties = {
  // disable: true,
  'mylib-button--min-width': {
    description:
      'Min-width value of button. This must have a valid css size value.',
    value: 'unset',
    control: 'text',
  },
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
export const argTypes = {
  label: {
    description: 'Label.',
    table: {
      type: { summary: 'string' },
    },
  },
  type: {
    description: 'Type of the Button.',
    control: {
      type: 'select',
      options: buttonTypesArray,
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'button' },
    },
  },
  variant: {
    description: 'Layout variants for the Button.',
    control: {
      type: 'select',
      options: buttonVariantsArray,
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'base' },
    },
  },
  icon: {
    description: 'Icon to be displayed in the button.',
    control: {
      type: 'select',
      options: ['', ...iconNamesArray],
    },
    table: {
      type: { summary: 'string' },
    },
  },
  iconPosition: {
    description:
      'Icon position (obs.: the center position is to be used with no value set on "label" attribute.)',
    control: {
      type: 'select',
      options: buttonIconPositionsArray,
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'left' },
    },
  },
  size: {
    description: 'Size of the button (Text font siez and the Button height).',
    control: {
      type: 'select',
      options: buttonSizesArray,
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'md' },
    },
  },
  iconSize: {
    description: 'Changes the size of the icon that is inserted in the button.',
    control: {
      type: 'select',
      options: buttonIconSizesArray,
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'md' },
    },
  },
  disabled: {
    description: 'Change the state of the button to disabled.',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  colorScheme: {
    description:
      'Sets the color scheme to be applied to the button. If unseted the button component will indentify the scheme based on the parent elements definition.',
    control: {
      type: 'select',
      options: ['', ...themeColorSchemeArray],
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'left' },
    },
  },
  toggled: {
    description: 'Sets the state of the button to pressed/active.',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};

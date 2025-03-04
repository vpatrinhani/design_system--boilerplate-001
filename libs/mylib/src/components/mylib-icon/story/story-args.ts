import { iconNamesArray } from "@my-lib-org/mylib-core-styles/src/types/_icons";

export const cssProperties = {
  '--mylib-icon--color': {
    description: 'Icon color.',
    value: 'unset',
    control: 'color',
  },
  '--mylib-icon--color--light-scheme': {
    description: 'Icon light color scheme.',
    value: 'unset',
    control: 'color'
  },
  '--mylib-icon--color--dark-scheme': {
    description: 'Icon dark color scheme.',
    value: 'unset',
    control: 'color'
  }
};

export const args = {
  name: iconNamesArray[0],
  size: 'md',
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
export const argTypes = {
  name: {
    description: 'The icon name.',
    control: {
      type: 'select',
      options: iconNamesArray,
    },
    table: {
      type: { summary: 'string' },
    },
  },
  size: {
    description: 'The icon size.',
    table: {
      type: { summary: 'string' },
    },
    defaultValue: 'md',
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

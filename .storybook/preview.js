import { BADGES, DIRECTORY } from './constants';

import './scss/preview.scss';

export const parameters = {
  options: {
    storySort: {
      order: [DIRECTORY.TYPOGRAPHY, DIRECTORY.IMAGE_ICONS, DIRECTORY.CORE, DIRECTORY.CONTAINERS, DIRECTORY.CONTENT, DIRECTORY.COMPOSITES, DIRECTORY.INPUTS],
    },
  },
  backgrounds: {
    disable: true,
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#003750',
      },
    ],
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'dsweb-theme--scheme--light', color: '#ffffff' },
      { name: 'dark', class: 'dsweb-theme--scheme--dark', color: '#003750' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  badgesConfig: {
    [BADGES.ALPHA]: {
      contrast: '#bd7d0d',
      color: '#FFF',
      title: BADGES.ALPHA,
    },
    [BADGES.BETA]: {
      contrast: '#0d7fbd',
      color: '#FFF',
      title: BADGES.BETA,
    },
    [BADGES.RELEASE_CANDIDATE]: {
      contrast: '#188e82',
      color: '#FFF',
      title: BADGES.RELEASE_CANDIDATE,
    },
  },
};

import { html } from 'lit-html';

import './scss/preview.scss';

export const parameters = {
  docs: {
    inlineStories: false,
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
};

export const decorators = [
  (Story) => {
    return html`<div class="story-wrapper">${Story()}</div>`;
  },
];

// this is necessarry to show stencil events in storybooks action tab
import { html } from 'lit-html';

export const scriptLoader = (scriptContent = '') => {
  return html`
    <script>
      (function () {
        ${scriptContent};
      })();
    </script>
  `;
};

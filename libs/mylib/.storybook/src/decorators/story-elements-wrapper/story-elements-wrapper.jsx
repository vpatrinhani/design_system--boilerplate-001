import { html } from 'lit-html';
import cx from "classnames";

const styles = html`
<style>
  .mylib-storybook_multiple-story-elements-wrapper {
    display: flex;
    align-items: center;
  }

  .mylib-storybook_focus-trap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>
`;

export const  StoryElementsWrapper = ({ className, children }) => {
  return html`
    ${styles}
    <div class="${cx("mylib-storybook_multiple-story-elements-wrapper", className)}">
      <div data-testid="focusTrap" class="mylib-storybook_focus-trap">
        ${children}
      </div>
    </div>
  `;
};

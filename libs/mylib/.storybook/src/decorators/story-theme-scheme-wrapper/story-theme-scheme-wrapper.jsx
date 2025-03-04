import React from 'react';
import { html } from 'lit-html';
import cx from "classnames";

const styles = html`
<style>
  .mylib-storybook_story-theme-scheme-wrapper {
    display: flex;
    align-items: center;
  }

  .mylib-storybook_story-theme-scheme-wrapper.mylib-storybook-template-container {
    padding: 0;
  }

  .mylib-storybook_story-theme-scheme-wrapper.mylib-storybook-template-container {
    padding: 0;
  }

  .mylib-storybook_story-theme-scheme-wrapper_focus-trap {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .theme-scheme-wrapper__scheme-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px;
  }

  .theme-scheme-wrapper__scheme-container::before {
    position: absolute;
    font-weight: bold;
    left: -2px;
    top: -30px;
    right: 0px;
    padding: 4px 16px;
    border: solid 2px #009999;
    border-bottom-width: 6px;
  }

  .theme-scheme-wrapper__scheme-container.mylib-theme--scheme--light {
    background-color: #ffffff;
  }

  .theme-scheme-wrapper__scheme-container.mylib-theme--scheme--light::before {
    content: 'Light';
    color: #003750;
    background-color: #ffffff;
    border-right: none;
    right: 0px;
  }

  .theme-scheme-wrapper__scheme-container.mylib-theme--scheme--dark {
    background-color: #003750;
  }

  .theme-scheme-wrapper__scheme-container.mylib-theme--scheme--dark::before {
    content: 'Dark';
    color: #ffffff;
    background-color: #003750;
    border-left: none;
    left: 0px;
    right: -2px;
  }
</style>
`;

export const  StoryThemeSchemeWrapper = ({ className, children }) => {
  return html`
    ${styles}
    <div class="${cx("mylib-storybook_story-theme-scheme-wrapper", className, 'mylib-storybook-template-container')}">
      <div data-testid="focusTrap" class="mylib-storybook_story-theme-scheme-wrapper_focus-trap">
        <div class="theme-scheme-wrapper__scheme-container mylib-theme--scheme--light">
          ${children}
        </div>
        <div class="theme-scheme-wrapper__scheme-container mylib-theme--scheme--dark">
          ${children}
        </div>
      </div>
    </div>
  `;
};

export const themeSchemeDecorators = [
  (Story, { className }) => {
    return StoryThemeSchemeWrapper({ className, children: Story() });
  }
];

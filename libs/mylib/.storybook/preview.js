import React from 'react';
import { addons } from '@storybook/addons';
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { DIRECTORY } from './constants';
import { FORCE_REMOUNT, STORY_ARGS_UPDATED } from '@storybook/core-events';
import {
  DocHeader,
  Title,
  SectionName,
  SectionDivider,
  SubTitle,
  Section,
  GridLayout, GridColumn,
  ContentCard,
  DocFooter,
  DISWRefVersionBadge,
  CompDeprecatedBadge,
  Link,
  ListCardContainer,
  ListCardItem
} from "./src/components";

import {
  StoryElementsWrapper,
  StoryThemeSchemeWrapper
} from "./src/decorators";

import './scss/preview.scss';

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: ['Welcome', 'Change Log', 'Get Started', DIRECTORY.BASICS, DIRECTORY.APPLICATION_LAYOUT, DIRECTORY.INPUTS, DIRECTORY.NAVIGATION, DIRECTORY.CONTAINERS, DIRECTORY.DISPLAY, DIRECTORY.DATA_VISUALIZATION, DIRECTORY.CONTENT, DIRECTORY.COMPOSITES, DIRECTORY.DEPRECATED, '*'],
    },
  },
  backgrounds: {
    disable: false,
    values: []
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'mylib-theme--scheme--light', color: '#ffffff' },
      { name: 'dark', class: 'mylib-theme--scheme--dark', color: '#003750' },
    ],
    onChange: (_themeName) => {
      let btnRemount = document.querySelector('.os-viewport .os-content button[title="Remount component"]');
      if (btnRemount)
        btnRemount.click();
      else
        console.warn('[themes]->onChange: Remount button not found!');
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    sort: "requiredFirst",
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        {children}
        {<DocFooter />}
      </DocsContainer>
    ),
    page: DocsPage,
    components: {
      h1: DocHeader,
      h2: SectionName,
      h3: Title,
      h4: SubTitle,
      DocHeader,
      SectionDivider,
      Section,
      GridLayout, GridColumn,
      ContentCard,
      DISWRefVersionBadge,
      Link,
      ListCardContainer,
      ListCardItem,
      StoryThemeSchemeWrapper,
      CompDeprecatedBadge
    }
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
    canvas: { title: "Sandbox" }
  }
}

export const decorators = [
  (Story, { className }) => {
    return StoryElementsWrapper({ className, children: Story() });
  }
];

const channel = addons.getChannel();

const storyListener = (args) => {
  if (window.__Mylib__STORYBOOK && window.__Mylib__STORYBOOK.storiesToBeLoadedOnArgsChange) {
    const checkDic = window.__Mylib__STORYBOOK.storiesToBeLoadedOnArgsChange;
    if (checkDic[args.storyId]) {
      addons.getChannel().emit(FORCE_REMOUNT, { storyId: args.storyId });
    }
  }
};

const setupStoryListener = () => {
    channel.removeListener(STORY_ARGS_UPDATED, storyListener);
    channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupStoryListener();

// Storybook executes this module in both bootstap phase (Node)
// and a story's runtime (browser). However, we cannot call `setupWorker`
// in Node environment, so need to check if we're in a browser.
const { worker } = require('../.test/mocks/browser');

// Start the mocking when each story is loaded.
// Repetitive calls to the `.start()` method do not register a new worker,
// but check whether there's an existing once, reusing it, if so.
worker.start({
  serviceWorker: {
    options: {
      scope: '/'
    }
  }
});

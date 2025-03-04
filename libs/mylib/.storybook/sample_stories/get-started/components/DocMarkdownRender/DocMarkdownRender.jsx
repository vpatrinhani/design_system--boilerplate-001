import React from 'react';
import PropTypes from "prop-types";
// import cx from 'classnames';
// import { Description } from '@storybook/addon-docs';
import ReactMarkdown from 'react-markdown';
import remarkParse from 'remark-parse';
// import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from "rehype-raw";
import remarkStringfy from 'remark-stringify';
// import rehypePrism from '@mapbox/rehype-prism';
import remarkHtml from 'remark-html';
// import rehypeAddClasses from 'rehype-add-classes';

// import remarkPrism from 'remark-prism';
import remarkCodeblocks from 'remark-code-blocks';
// import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table';
// import { useMemo } from "react";
import { BEMClass } from "$root/.storybook/helpers/bem-helper";

import { DocHeader } from '$lib-mylib/.storybook/src/components/doc-header/doc-header';

const CSS_BASE_CLASS = "mylib-storybook-doc-markdown-render";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const DocMarkdownRender = ({markdown}) => {

  return (
    <ReactMarkdown children={markdown} remarkPlugins={[
      remarkParse,
      remarkStringfy,
      remarkHtml,
      remarkRehype,
      rehypeRaw,
    ]} components={{
      h1({node, inline, className, children}) {
        // console.log('h1:', node, inline, className, children);
        return <DocHeader>{children[0]}</DocHeader>
      }
    }}></ReactMarkdown>
  );
};

DocMarkdownRender.propTypes = {
  markdown: PropTypes.string
};

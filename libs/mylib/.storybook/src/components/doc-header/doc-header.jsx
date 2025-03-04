import React from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import { useMemo } from "react";
import { BEMClass } from "$root/.storybook/helpers/bem-helper";

import "./doc-header.scss";

const CSS_BASE_CLASS = "mylib-storybook-header";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const DocHeader = ({className, title, summary, children, ...props}) => {

  const renderTitle = useMemo(() => {
    return  <h1>{title ? title : children}</h1>;
  }, [title]);

  const renderSummary = useMemo(() => {
    if (summary) {
      return <p className={bemHelper({ element: "summary" })}>{summary}</p>;
    }
    return null;
  }, [summary]);

  return (
    <div className={cx(CSS_BASE_CLASS, className)} {...props}>
      {renderTitle}
      {renderSummary}
    </div>
  );
};

DocHeader.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  children: PropTypes.string
};

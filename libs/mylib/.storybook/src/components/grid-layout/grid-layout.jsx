import React from 'react';
import cx from "classnames";
import "./grid-layout.scss";

export const GridColumn = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <div className={cx("mylib-storybook-grid-layout_column")}>
    {
      React.Children.map(children, (child) =>
        <React.Fragment>{child}</React.Fragment>)
    }
  </div>
);

export const GridLayout = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <div className={cx("mylib-storybook-grid-layout")}>
    {
      React.Children.map(children, (child) =>
        <React.Fragment>{child}</React.Fragment>)
    }
  </div>
);

import React from 'react';
import cx from "classnames";
import "./sub-title.scss";

export const SubTitle = ({ className, ...props }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h4 className={cx("mylib-storybook-sub-title", className)} {...props} />
);

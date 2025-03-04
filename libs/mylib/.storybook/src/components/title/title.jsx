import React from 'react';
import cx from "classnames";
import "./title.scss";

export const Title = ({ className, ...props }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3 className={cx("mylib-storybook-title", className)} {...props} />
);

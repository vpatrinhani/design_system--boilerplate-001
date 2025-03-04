import React from 'react';
import cx from "classnames";
import "./section-divider.scss";

export const SectionDivider = ({ className, ...props }) => {
  return (
    <hr className={cx("mylib-storybook-section-divider", className)} {...props} />
  );
};

SectionDivider.propTypes = {
};

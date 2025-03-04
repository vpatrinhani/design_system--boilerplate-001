import React from 'react';
import PropTypes from "prop-types";
import cx from "classnames";
import "./link.scss";

export const Link = ({ label = null, variant = 'default', colorScheme = 'light', href = null, rel = null, target = '_blank' }) => {

  const attrs = {
    href,
    rel,
    target
  };

  return (
    <a className={cx("mylib-storybook-link", `mylib-storybook-link__variant--${variant}`, `mylib-theme--scheme--${colorScheme}`)} {...attrs}>
      {label}
    </a>
  );
};

Link.propTypes = {
  label: PropTypes.string,
  colorScheme: PropTypes.string,
  variant: PropTypes.string,
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string
};

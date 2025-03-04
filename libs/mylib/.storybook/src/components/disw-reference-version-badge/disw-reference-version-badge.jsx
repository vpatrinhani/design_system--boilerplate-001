import React from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';

import "./disw-reference-version-badge.scss";

const CSS_BASE_CLASS = "mylib-storybook-disw-reference-version-badge";

export const DISWRefVersionBadge = ({refName, version, refUrl}) => (
  <div className={cx(CSS_BASE_CLASS)}>
    <a href={refUrl} target="_blank">
      <span>
        <strong>{refName} v{version}</strong>
      </span>
    </a>
  </div>
);

DISWRefVersionBadge.propTypes = {
  refName: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  refUrl: PropTypes.string.isRequired
};

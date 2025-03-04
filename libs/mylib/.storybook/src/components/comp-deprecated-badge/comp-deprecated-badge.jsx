import React from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';

import "./comp-deprecated-badge.scss";

const CSS_BASE_CLASS = "mylib-storybook-comp-deprecated-badge";

export const CompDeprecatedBadge = ({children}) => (
  <div className={cx(CSS_BASE_CLASS)}>
    <h2>DEPRECATED</h2>
    {
      React.Children.map(children, (child) =>
        <React.Fragment>{child}</React.Fragment>)
    }
  </div>
);

CompDeprecatedBadge.propTypes = {
  children: PropTypes.array
};

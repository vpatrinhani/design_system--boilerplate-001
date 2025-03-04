import React from 'react';
import PropTypes from "prop-types";
import cx from "classnames";
// import { useMemo } from "react";
// import { BEMClass } from "$root/.storybook/helpers/bem-helper";

import "./list-card-container.scss";

const CSS_BASE_CLASS = "mylib-storybook-list-card-container";
// const bemHelper = BEMClass(CSS_BASE_CLASS);

export const ListCardContainer = ({ children }) => {

  return (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <div className={cx(CSS_BASE_CLASS)}>
      {
        React.Children.map(children, (child) =>
          <React.Fragment>{child}</React.Fragment>)
      }
    </div>
  );
};

ListCardContainer.propTypes = {
  children: PropTypes.array
};

import React from 'react';
import PropTypes from "prop-types";
import cx from "classnames";
import { useMemo } from "react";
import { BEMClass } from "$root/.storybook/helpers/bem-helper";

import "./content-card.scss";

const CSS_BASE_CLASS = "mylib-storybook-content-card";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const ContentCard = ({ image, title, summary, href, linkTarget = '_blank', children }) => {

  const renderImage = useMemo(() => {
    if (image) {
      return (
        <div className={cx(bemHelper({element: 'imag-container'}))}>
          <img src={image}></img>
        </div>
      );
    }
    return null;
  }, [image]);

  return (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <div className={cx(CSS_BASE_CLASS)}>
      <a href={href} target={linkTarget}>
        {renderImage}
        <span className={cx(bemHelper({element: 'title'}))}>{title}</span>
        <p className={cx(bemHelper({element: 'summary'}))}>{summary}</p>
        <div className={cx(bemHelper({element: 'bottom-container'}))}>
          {
            React.Children.map(children, (child) =>
              <React.Fragment>{child}</React.Fragment>)
          }
        </div>
      </a>
    </div>
  );
};

ContentCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  linkTarget: PropTypes.string,
  children: PropTypes.array
};

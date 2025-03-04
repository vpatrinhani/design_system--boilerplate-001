import React from 'react';
import PropTypes from "prop-types";
import cx from "classnames";
import { useMemo } from "react";
import { BEMClass } from "$root/.storybook/helpers/bem-helper";

import "./list-card-item.scss";

const CSS_BASE_CLASS = "mylib-storybook-list-card-item";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const ListCardItem = ({ image, title, summary, href, linkTarget = '_blank' }) => {

  const renderImage = useMemo(() => {
    if (image) {
      return (
        <div className={cx(bemHelper({element: 'image-container'}))}>
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
        <div className={cx(bemHelper({element: 'content-container'}))}>
          <span className={cx(bemHelper({element: 'title'}))}>{title}</span>
          <p className={cx(bemHelper({element: 'summary'}))}>{summary}</p>
        </div>
      </a>
    </div>
  );
};

ListCardItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  linkTarget: PropTypes.string
};

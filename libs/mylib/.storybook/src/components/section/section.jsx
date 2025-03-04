import React from 'react';
import PropTypes from "prop-types";
import cx from "classnames";
import { useMemo } from "react";
import "./section.scss";

import { SectionName } from '../section-name/section-name';
import { SectionDivider } from '../section-divider/section-divider';

export const Section = ({ title = null, useBottomDivider = true, highlighted = false, children }) => {
  const key = useMemo(() => title?.toLowerCase().split(" ").join("-"), [title]);

  const hostClasses = {
    'highlighted': highlighted
  }

  const renderTitle = useMemo(() => {
    if (title) {
      return <h2>{title}</h2>;
    }
    return null;
  }, [title]);

  const renderDivider = useMemo(() => {
    if (useBottomDivider && !highlighted) {
      return <SectionDivider></SectionDivider>;
    }
    return null;
  }, [useBottomDivider, highlighted]);

  return (
    <div key={key} className={cx("mylib-storybook-section", hostClasses)}>
      {renderTitle}
      {
        React.Children.map(children, (child) =>
          <React.Fragment>{child}</React.Fragment>)
      }
      {renderDivider}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  useBottomDivider: PropTypes.bool,
  highlighted: PropTypes.bool,
  children: PropTypes.element.isRequired
};

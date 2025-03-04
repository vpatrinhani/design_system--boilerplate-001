import React from 'react';
import cx from 'classnames';
import { BEMClass } from "$root/.storybook/helpers/bem-helper";

import "./doc-footer.scss";

const CSS_BASE_CLASS = "mylib-storybook-footer";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const DocFooter = () => (
  <div className={CSS_BASE_CLASS}>
    <img className={bemHelper({ element: "logo" })} alt="Company Logo"></img>
    <div className={cx(bemHelper({ element: "main-content" }), 'mylib-core-layout_grid')}>
      <div className="mylib-core-layout_col">
        <p className={bemHelper({ element: "text" })}>Mylib project provides teams with universal assets that are evolving and growing. Feature requests, requests for new components or any issues can be added to the Web Components Repository in Gitlab.</p>
      </div>
      <div className="mylib-core-layout_col">
        <div className="mylib-core-layout_grid">
          <div className={cx('mylib-core-layout_col', bemHelper({ element: "links-column" }))}>
          </div>
          <div className={cx('mylib-core-layout_col', bemHelper({ element: "links-column" }))}>
          </div>
        </div>
      </div>
    </div>
    <div>
      <span className={cx(bemHelper({ element: "disclaimer" }))}>Restricted © [Company Copy]. All rights reserved.</span>
    </div>
  </div>
);

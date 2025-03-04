import { FunctionalComponent, h, Fragment } from "@stencil/core";

import { CssClassMap } from '$lib-mylib/src/utils';

import { IconElement } from '$lib-mylib/src/components/global/internals/IconElement';

import {filterSlotElements} from '$lib-mylib/src/core/helpers/element'

import { ButtonIconPositions, ButtonIconSizes } from "../_types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IContentElement {
  label: string;
  icon: string;
  iconPosition: ButtonIconPositions | 'center';
  iconSize: ButtonIconSizes | 'md';
  iconType: string;
}

const getIconTag = ({ icon, iconPosition, iconSize, iconType }, children)  => {
  const type = iconType === '' ? 'font' : iconType;
  const size = iconSize === '' ? 'md' : iconSize;

  const iconChildrenSlots = filterSlotElements(children, 'icon--');

  return (
    <IconElement name={icon} type={type} size={size} className={`icon-place--${iconPosition}`}>
      {iconChildrenSlots}
    </IconElement>
  )
}

const getLabelTag = ({ label })=> {
  if (label.trim().length <= 0) {
    return null;
  }

  const spanClassMap: CssClassMap = {};

  return <span class={spanClassMap}>{label}</span>;
}


export const ContentElement: FunctionalComponent<IContentElement> = ({ label, icon, iconPosition, iconSize, iconType }, children) => {

  const computedIconPosition = (label) ? iconPosition : 'center';

  const iconTag = getIconTag({ icon, iconPosition: computedIconPosition, iconSize, iconType }, children);
  const labelTag = getLabelTag({ label });

  if (iconPosition === 'right') {
    return (
      <Fragment>
        {labelTag}
        {iconTag}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {iconTag}
      {labelTag}
    </Fragment>
  );
};

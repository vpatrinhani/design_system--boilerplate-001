import { FunctionalComponent, h } from "@stencil/core";
import cn from 'classnames';

import { JSX } from "$lib-mylib/src/components";

interface IIconElement extends JSX.MylibIcon {
  className?: { [key: string]: boolean} | string | string[];
}

export const IconElement: FunctionalComponent<IIconElement> = ({ name, size = 'md', type = 'font', className = '' }, children) => {
  if ((name.trim().length <= 0) && type === 'font') {
    return null;
  }

  const iconSize = size !== 'xs' ? size : 'sm';

  const icon_exportparts = `mylib-icon__content, mylib-icon__size--${iconSize}`;

  return <mylib-icon exportparts={icon_exportparts} class={cn(className)} name={name} size={iconSize} type={type}>{children}</mylib-icon>;
};

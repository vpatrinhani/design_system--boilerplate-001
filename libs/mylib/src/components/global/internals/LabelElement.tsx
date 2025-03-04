import { FunctionalComponent, h } from '@stencil/core';

import { JSX } from '$lib-mylib/src/components';

interface ILabelElement extends JSX.MylibPropertyValue {
  [key: string]: boolean | string;
  htmlForLabel?: string;
  className?: string;
}

export const LabelElement: FunctionalComponent<ILabelElement> = ({
  label = '',
  colon = false,
  group = false,
  required = false,
  className,
  htmlForLabel,
}) => {
  if (label.trim().length <= 0) {
    return null;
  }

  return (
    <label class={className} htmlfor={htmlForLabel}>
      {required ? <span>*</span>: ''}
      {label}
      {colon && !group ? ':' : ''}
    </label>
  );
};

import BEM, { MODIFIER } from './jsx/bem';
import hostClasses from './jsx/host-classes';
import Fragment from './jsx/fragment';

export {
  BEM,
  MODIFIER,
  hostClasses,
  Fragment,
};

export type CssClassMap = { [className: string]: boolean };

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (el: HTMLElement, attributes: string[] = []) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const attributeObject: { [k: string]: any } = {};

  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
};

export const attrValue = (value) => {
  if ((value === 'undefined') || (value === 'null')) return;

  return value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildElementAttributeMap = (attrObject: { [k: string]: any }): { [k: string]: any } => {
  const resultObject = {...attrObject};

  Object.keys(resultObject).forEach(
    (k) => {
      if ((resultObject[k] === 'undefined') || (resultObject[k] === 'null') || (resultObject[k] === '') || (!resultObject[k])) {
        delete resultObject[k];
      }
    }
  );

  return resultObject;
};

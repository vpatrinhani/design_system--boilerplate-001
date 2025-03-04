/* eslint-disable @typescript-eslint/no-explicit-any */
// created based on https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/helpers.ts

import type { EventEmitter } from '@stencil/core';

declare const __zone_symbol__requestAnimationFrame: any;
declare const requestAnimationFrame: any;

/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
export const componentOnReady = (el: any, callback: any) => {
  if (el.componentOnReady) {
    el.componentOnReady().then((resolvedEl: any) => callback(resolvedEl));
  } else {
    raf(() => callback(el));
  }
};

/**
 * This functions checks if a Stencil component is using
 * the lazy loaded build of Stencil. Returns `true` if
 * the component is lazy loaded. Returns `false` otherwise.
 */
export const hasLazyBuild = (stencilEl: HTMLElement) => {
  return (stencilEl as any).componentOnReady !== undefined;
};

export type Attributes = { [key: string]: any };

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
  const attributeObject: Attributes = {};

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

/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */
const ariaAttributes = [
  'role',
  'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-braillelabel',
  'aria-brailleroledescription',
  'aria-busy',
  'aria-checked',
  'aria-colcount',
  'aria-colindex',
  'aria-colindextext',
  'aria-colspan',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-description',
  'aria-details',
  'aria-disabled',
  'aria-errormessage',
  'aria-expanded',
  'aria-flowto',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-placeholder',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-roledescription',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowindextext',
  'aria-rowspan',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
];

/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 * @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
 * Use this in instances where we manually specify aria attributes on the `<Host>` element.
 */
export const inheritAriaAttributes = (el: HTMLElement, ignoreList?: string[]) => {
  let attributesToInherit = ariaAttributes;
  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter((attr) => !ignoreList.includes(attr));
  }
  return inheritAttributes(el, attributesToInherit);
};

/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
export const renderHiddenInput = (
  always: boolean,
  container: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean
) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.mylib-aux-input') as HTMLInputElement | null;
    if (!input && container.ownerDocument) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('mylib-aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};

/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
export const raf = (h: any) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const deferEvent = (event: EventEmitter): EventEmitter => {
  return debounceEvent(event, 0);
};

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  } as EventEmitter;
};

export const debounce = (func: (...args: any[]) => void, wait = 0) => {
  let timer: any;
  return (...args: any[]): any => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};

/**
 *  Filters slot elements and removes the prefix from it's attributes.
 *  Remember to always define the intial value when you have only one element
 *  in the array, otherwise the callback function for reduce will not be called.
 *
 * @param slotElements Slot elements to be filtered
 * @param slotNamePrefix Slot name to be filtered
 * @param initialValue Reduce initial value, defaults to empty array
 * @returns Filtered slots with the prefix removed from the string
 */
export const filterSlotElements = (slotElements, slotNamePrefix, initialValue = []) => {

  if(!slotElements.length) return

  const attrKey = findSlotAttributes(slotElements[0]);

  return slotElements.reduce((slotObj, currentSlotEl) => {
    if (currentSlotEl[attrKey]?.slot?.startsWith(slotNamePrefix)) {
      slotObj = {
        ...currentSlotEl,
        [attrKey]: {
          ...currentSlotEl[attrKey],
          slot: currentSlotEl[attrKey].slot.replace(slotNamePrefix, '')
        }
      }
    }

    return slotObj;
  }, initialValue);
}

/**
 * When we are referencing the icon using storybook,
 * the attribute name changes, then we have to search for
 * the correct attribute to be used
 *
 * @param slotElement Slot element where we search the correct attribute name
 * @returns The correct key for the slot attribute element
 */
const findSlotAttributes = (slotElement) => {
  let attributeKey = '$attrs$'

  Object.keys(slotElement).forEach((key) => {
    if (slotElement[key]?.slot) {
      attributeKey = key
    }
  })

  return attributeKey
}

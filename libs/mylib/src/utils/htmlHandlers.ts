/**
 * Checks if the `element` is a `DOMElement`
 *
 * @function isDOMNode
 * @param {*} element The object to check
 * @return {boolean} Returns true if the element is a DOMNode, returns false otherwise
 */
export const isDOMNode = (element: HTMLElement) => {
  return element.nodeType === 1
}
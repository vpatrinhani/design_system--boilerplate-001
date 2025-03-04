/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Checks if `value` is `null` or `undefined`
 *
 * @ignore
 * @function isNil
 * @param {*} value The object to check
 * @return {boolean} Returns `true` is `value` is `undefined` or `null`, `false` otherwise
 * REF: https://github.com/panzerdp/voca/blob/master/src/helper/object/is_nil.js
 */
export const isNil = (value: any): boolean => {
return value === undefined || value === null;
}

export const isString = (obj: any): boolean => {
  return ((Object.prototype.toString.call(obj) === "[object String]") || (typeof obj === 'string'));
}

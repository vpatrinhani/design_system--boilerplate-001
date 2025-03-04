import { isNil, isString } from "./object";

const REGEXP_SPECIAL_CHARACTERS = /[-[\]{}()*+!<=:?./\\^$|#,]/g;

/**
 * Get the string representation of the `value`.
 * Converts the `value` to string.
 * If `value` is `null` or `undefined`, return `defaultValue`.
 *
 * @ignore
 * @function toString
 * @param {*} value             The value to convert.
 * @param {*} [defaultValue=''] The default value to return.
 * @return {string|null}        Returns the string representation of `value`. Returns `defaultValue` if `value` is
 *                              `null` or `undefined`.
 * REF: https://github.com/panzerdp/voca/blob/master/src/helper/string/coerce_to_string.js
 */
export const coerceToString = (value, defaultValue = '') => {
  if (isNil(value)) {
    return defaultValue;
  }
  if (isString(value)) {
    return value;
  }
  return String(value);
}

/**
 * Escapes the regular expression special characters `- [ ] / { } ( ) * + ? . \ ^ $ |` in `subject`.
 *
 * @function escapeRegExp
 * @static
 * @since 1.0.0
 * @memberOf Escape
 * @param {string} [subject=''] The string to escape.
 * @return {string} Returns the escaped string.
 * @example
 * v.escapeRegExp('(hours)[minutes]{seconds}');
 * // => '\(hours\)\[minutes\]\{seconds\}'
 *
 * REF: https://github.com/panzerdp/voca/blob/master/src/escape/escape_reg_exp.js
 */
export const escapeRegExp = (subject) => {
  return coerceToString(subject).replace(REGEXP_SPECIAL_CHARACTERS, '\\$&');
}

export const replaceAll = (str: string, search: string, replaceWith: string): string => {
  const searchRegExp = new RegExp(escapeRegExp(search), 'g');
  return str.replace(searchRegExp, replaceWith);
}

export const toPascalCase = (str: string): string => {
  return str.replace(/(\w)(\w*)/g, (_g0,g1,g2) => {
    return g1.toUpperCase() + g2.toLowerCase();
  });
};

export const toKebabCase = (str: string): string => {
  return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
};

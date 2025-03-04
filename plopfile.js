const lo_kebabCase = require('lodash.kebabcase');
const lo_startCase = require('lodash.startcase');

const MylibComponent = require("./.plop/lib/mylib/component");

const properCase = (text) => (lo_startCase(text).replace(/[ ]+/gi,''));

module.exports = plop => {

  plop.setHelper("mylib_componentTagName", (text) => {
    return `mylib-${lo_kebabCase(text)}`;
  });

  plop.setHelper("mylib_componentTypeName", (text) => {
    return `${properCase(text)}`;
  });

  plop.setHelper("mylib_componentHTMLTypeName", (text) => {
    return `HTMLMylib${properCase(text)}Element`;
  });

  MylibComponent(plop);
};

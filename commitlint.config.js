module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Make sure there is never a max-line-length by disabling the rule
    'body-max-line-length': [0, 'always'],
  },
};

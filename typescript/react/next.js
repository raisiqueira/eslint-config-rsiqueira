const baseConfig = require('./index');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    'plugin:@next/next/recommended',
    'next',
    'next/core-web-vitals',
    ...baseConfig.extends,
  ],
};

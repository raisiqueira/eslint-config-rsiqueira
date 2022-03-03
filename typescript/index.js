const baseConfig = require('./base');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: ['airbnb-base', ...baseConfig.extends],
};

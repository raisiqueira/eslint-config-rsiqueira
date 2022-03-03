const baseConfig = require('../base');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...baseConfig,
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    ...baseConfig.settings,
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    ...baseConfig.extends,
  ],
  plugins: [...baseConfig.plugins, 'react'],
  rules: {
    ...baseConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],

    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

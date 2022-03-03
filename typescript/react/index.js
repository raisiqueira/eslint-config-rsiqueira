const baseConfig = require('../base');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    ...baseConfig.extends,
  ],
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    ...baseConfig.settings,
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [...baseConfig.plugins, 'react'],
  rules: {
    ...baseConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

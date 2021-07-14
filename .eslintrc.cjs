module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
  },
};

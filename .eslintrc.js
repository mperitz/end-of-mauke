module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-confusing-arrow': 0,
  },
  'babel-module': {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      app: './app',
    },
  },
};

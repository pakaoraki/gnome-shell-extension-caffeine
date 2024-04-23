// eslint.config.js
module.exports = {
  extends: [
    './lint/eslintrc-gjs.yml',
    './lint/eslintrc-shell.yml',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // Rules overridden to match this codebase
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'all'],
    'prefer-template': 'off',
  },
};

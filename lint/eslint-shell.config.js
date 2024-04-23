// eslint-shell.config.js
module.exports = {
  rules: {
    camelcase: ['error', { properties: 'never', allow: ['^vfunc_', '^on_'] }],
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
  },
  globals: {
    global: 'readonly',
  },
};

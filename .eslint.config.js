// eslint.config.js

import gjsConfig from "./lint/eslintrc-gjs.config.js";
import shellConfig from "./lint/eslintrc-shell.config.js";

export default [
  {
    gjsConfig,
    shellConfig,
    {
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
    }
  }
];

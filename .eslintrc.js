/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
  ].map(require.resolve),
  plugins: ['@typescript-eslint', 'unused-imports'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'import/namespace': 'off',
    'import/order': 'off',
    'react/button-has-type': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/no-named-as-default': 'off',
    'import/no-default-export': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: false,
      },
    ],
    'eslint-comments/require-description': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/display-name': 'off',
  },
  ignorePatterns: ['config-overrides.js'],
};

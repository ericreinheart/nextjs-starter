module.exports = {
  'default-case': 'error',
  'default-case-last': 'error',
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    },
  ],
  'no-var': 'error',
  'no-unused-vars': 'off',
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: ['const', 'let', 'if', 'for', 'function', 'export', 'import'],
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: ['export'],
    },
    {
      blankLine: 'any',
      prev: ['export'],
      next: ['export'],
    },
    {
      blankLine: 'any',
      prev: ['import'],
      next: ['import'],
    },
    {
      blankLine: 'any',
      prev: ['const', 'let'],
      next: ['const', 'let'],
    },
    { blankLine: 'always', prev: '*', next: ['return'] },
  ],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/jsx-sort-props': [
    'warn',
    {
      reservedFirst: true,
      callbacksLast: true,
    },
  ],
  'react-hooks/exhaustive-deps': 'off',
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['can', 'has', 'is', 'should'],
    },
  ],
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  'import/extensions': [
    'error',
    'never',
    {
      css: 'always',
      json: 'always',
      scss: 'always',
    },
  ],
  'import/no-extraneous-dependencies': 'off',
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'sibling', 'index', 'parent'],
      'newlines-between': 'always',
    },
  ],
  'unicorn/filename-case': 'off',
}

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['**/*.config.js', '**/*.config.ts'],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.test.*',
          '**/*.spec.*',
          'jest.setup.ts',
          '**/mocks/*',
        ],
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
  },
}

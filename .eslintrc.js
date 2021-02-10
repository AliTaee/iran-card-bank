module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  rules: {
    strict: 0,
    'linebreak-style': 0,
    'prettier/prettier': 'error',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
  },
  settings: {
    react: {
      version: '17.0.1',
    },
  },
  plugins: ['prettier', 'testing-library', 'jest-dom', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:testing-library/recommended',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
}

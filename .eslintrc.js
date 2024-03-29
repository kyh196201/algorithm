module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  plugins: ['html', 'import', 'prettier'],
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
      {
        usePrettierrc: false,
      },
    ],
    'no-unused-vars': 'error',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
  },
};

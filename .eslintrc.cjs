module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    camelcase: 'off',
    'no-use-before-define': 'off',
    'no-console': ['error', { allow: ['warn'] }],
    'no-var': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/prefer-default-export': ['off'],
    radix: ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'on'
      }
    ]
  }
};

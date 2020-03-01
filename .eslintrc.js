module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    jasmine: true
  },
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    'comma-dangle': 'off',
    'prettier/prettier': ['error'],
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: [0, 'never']
  },
  globals: {
    fetch: false,
    __DEV__: true
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        'rootPathSuffix': 'src'
      }
    }
  }
}

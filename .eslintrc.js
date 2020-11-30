module.exports = {
  root: true,
  plugins: [
    'ember',
    'ember-suave'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    quotes: 'off',
    'import/no-relative-parent-imports': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    semi: 'off',
    'no-spaced-func': 'off',
    'padding-line-between-statements': 'off',
    'spaced-comment': 'off',
    'no-console': 'off',
    'ember-suave/no-direct-property-access': 'off',
    'ember-suave/lines-between-object-properties': 'off'
  }
};

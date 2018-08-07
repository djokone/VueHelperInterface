module.exports = {
  root: true,
  env: {
    node: true,
  },
  "parser": "vue-eslint-parser",
  'extends': [
    // 'plugin:vue/strongly-recommended'
    // 'plugin:vue/essential',
    'plugin:vue/base',
    '@vue/standard'
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  rules: {
    'indent': ['error', 2],
    // 'vue/script-indent': [
    //   'error',
    //   2,
    //   { 'baseIndent': 1 }
    // ]
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
}
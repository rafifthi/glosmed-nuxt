module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'no-console': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off'
  }
}

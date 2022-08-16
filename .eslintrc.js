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
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  "ignorePatterns": ["static/**", "**/vendor/*.js"],
  // add your custom rules here
  rules: {
    'no-console':'off'
  }
}

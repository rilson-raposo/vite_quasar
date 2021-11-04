module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 2021 // Allows for the parsing of modern ECMAScript features
  },
  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },

  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

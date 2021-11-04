import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Settings to material-icons-v6 and lang pt-BR
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/mdi-v6'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// pinia - replacement to vuex
import { createPinia } from 'pinia'

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const pinia = createPinia()

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const myApp = createApp(App)

myApp.use(Quasar,
  {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet
  })

myApp.use(pinia)
myApp.use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')

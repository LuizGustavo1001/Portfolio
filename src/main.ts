import { createApp } from 'vue'

import './assets/styles/global.css'
import './assets/styles/tokens.css'
import './assets/styles/themes.css'
import './assets/styles/utilities.css'
import './assets/styles/typography.css'

import { i18n } from './locales/i18n'

import App from './App.vue'

const app = createApp(App)

app.use(i18n)
app.mount('#app')

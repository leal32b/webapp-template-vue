import { createApp } from 'vue'

import App from '@/App.vue'
import { setDirectives } from '@/directives'
import { setI18n } from '@/i18n'
import { setIcons } from '@/icons'
import Router from '@/router'

import './bulma.scss'

const app = createApp(App)
setDirectives(app)
setI18n(app)
setIcons(app)

app
  .use(Router)
  .mount('#app')

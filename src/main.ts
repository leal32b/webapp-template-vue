import { createApp } from 'vue'

import App from '@/App.vue'
import { setI18n } from '@/i18n'
import Router from '@/router'
import { setDirectives } from '@/set-directives'

import './bulma.scss'

const app = createApp(App)
setDirectives(app)
setI18n(app)

app
  .use(Router)
  .mount('#app')

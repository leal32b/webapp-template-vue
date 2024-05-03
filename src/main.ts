import { Quasar } from 'quasar'
import { createApp } from 'vue'

import '@/quasar.scss'

import App from '@/App.vue'
import Router from '@/router'
import { setDirectives } from '@/set-directives'

const app = createApp(App)
setDirectives(app)

app
  .use(Router)
  .use(Quasar, { config: { dark: true } })
  .mount('#app')

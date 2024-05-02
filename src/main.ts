import { Quasar } from 'quasar'
import { createApp } from 'vue'

import '@/quasar.scss'
import App from '@/app.vue'
import Router from '@/router'

const app = createApp(App)

app
  .use(Router)
  .use(Quasar, { config: { dark: true } })
  .mount('#app')

import { createApp } from 'vue'

import '@/style.scss'
import { setIcons } from '@/common/4.main/setup/set-icons'
import { setRouter } from '@/common/4.main/setup/set-router'

import App from '@/App.vue'

const app = createApp(App)

setIcons(app)
setRouter(app)

app.mount('#app')

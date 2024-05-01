import { createApp } from 'vue'

import { setRouter } from '@/common/4.main/setup/set-router'

import App from '@/App.vue'

const app = createApp(App)

setRouter(app)

app.mount('#app')

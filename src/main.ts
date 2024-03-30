import { createApp } from 'vue'

import '@/style.scss'
import AppVue from '@/app.vue'
import { setIcons } from '@/components/set-icons'

const appVue = createApp(AppVue)
setIcons(appVue)
appVue.mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import '@/style.scss'
import App from '@/app.vue'
import HelloWorldVue from '@/components/HelloWorld.vue'
// import { setIcons } from '@/components/set-icons'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HelloWorldVue }
  ]
})

// setIcons(app)
app.use(router)
app.mount('#app')

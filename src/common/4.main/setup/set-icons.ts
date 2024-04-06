import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaBars, GiMoon, GiSun } from 'oh-vue-icons/icons'
import { type App } from 'vue'

export const setIcons = (app: App<Element>): void => {
  addIcons(FaBars, GiMoon, GiSun)
  app.component('v-icon', OhVueIcon)
}

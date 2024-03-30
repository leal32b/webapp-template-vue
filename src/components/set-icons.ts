import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaBars } from 'oh-vue-icons/icons'
import { type App } from 'vue'

export const setIcons = (app: App<Element>): void => {
  addIcons(FaBars)
  app.component('v-icon', OhVueIcon)
}

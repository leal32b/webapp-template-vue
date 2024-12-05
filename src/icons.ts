import { LanguageIcon, MoonIcon, SunIcon } from '@heroicons/vue/16/solid'
import { type App } from 'vue'

const heroicons = {
  LanguageIcon,
  MoonIcon,
  SunIcon
}

export const setIcons = (app: App): void => {
  Object.entries(heroicons).forEach(([name, component]) => {
    app.component(name, component)
  })
}

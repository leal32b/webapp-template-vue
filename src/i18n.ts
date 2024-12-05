import { type App } from 'vue'
import { createI18n } from 'vue-i18n'

import { common } from '@/common/2.presentation/i18n'

import { identity } from '@/modules/identity/2.presentation/i18n'

export type MessagesType = {
  common: typeof common['en-US']
  identity: typeof identity['en-US']
}

const locales = [
  { common },
  { identity }
]

const messages = locales.reduce((acc: any, locale: any) => {
  Object.entries(locale).forEach(([module, languages]) => {
    Object.keys(languages as any).forEach(lang => {
      if (!acc[lang]) {
        acc[lang] = {}
      }

      acc[lang][module] = locale[module][lang]
    })
  })

  return acc
}, {})

const generateMessageKeys = (obj: any): any => {
  const transform = (o: any, prefix = ''): any => {
    return Object.keys(o).reduce((acc: any, key: any) => {
      const value = o[key]
      const newKey = prefix ? `${prefix}.${key}` : key

      if (typeof value === 'object' && value !== null) {
        acc[key] = transform(value, newKey)
      } else {
        acc[key] = newKey
      }

      return acc
    }, {})
  }

  return transform(obj)
}

const options = {
  locale: 'en-US',
  fallbackLocale: 'en-US',
  legacy: false,
  messages
}

export const i18n = createI18n(options)
export const messageKeys = generateMessageKeys(messages['en-US'])

export const setI18n = (app: App): void => {
  app.use(i18n)
  app.config.globalProperties.$m = messageKeys
}

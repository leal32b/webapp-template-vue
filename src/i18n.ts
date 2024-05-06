/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type App } from 'vue'
import { createI18n } from 'vue-i18n'

import { enUS } from '@/common/2.presentation/i18n/locales/en-US'
import { ptBR } from '@/common/2.presentation/i18n/locales/pt-BR'

const transformObject = (obj: any, prefix = ''): any => {
  const result: any = {}

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = transformObject(obj[key], `${prefix}${key}.`)
    } else {
      result[key] = `${prefix}${key}`
    }
  }

  if (prefix === '') {
    return result.message
  }

  return result
}

const options = {
  locale: 'en-US',
  fallbackLocale: 'en-US',
  legacy: false,
  messages: {
    ...enUS,
    ...ptBR
  }
}

export const i18n = createI18n(options)
export const messageKeys = transformObject(options.messages['en-US'])

export const setI18n = (app: App): void => {
  app.use(i18n)
  app.config.globalProperties.$m = messageKeys
}

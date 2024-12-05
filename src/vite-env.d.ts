import { type MessagesType } from '@/i18n'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $m: MessagesType
    $t: (key: string, params?: Record<string, string>) => string
  }
}

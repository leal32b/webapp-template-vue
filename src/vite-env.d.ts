/// <reference types="vite/client" />

import { type MessageType } from '@/common/2.presentation/i18n/locales/en-US'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $m: MessageType
    $t: (key: string) => string
  }
}

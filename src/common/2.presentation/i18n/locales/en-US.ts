export const enUS = {
  'en-US': {
    message: {
      common: {
        appName: 'Webapp template Vue'
      },
      landingPage: {
        hello: 'Hello world'
      },
      navbar: {
        signUp: 'Sign up',
        signIn: 'Sign in'
      }
    }
  }
}

export type LocaleSchema = Record<string, typeof enUS['en-US']>
export type MessageType = LocaleSchema['en-US']['message']

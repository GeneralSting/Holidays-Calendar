import resources from './resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'global';
    resources: typeof resources
  }
}
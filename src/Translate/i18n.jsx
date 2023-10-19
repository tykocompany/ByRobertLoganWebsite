import i18n from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'

import { messages } from './Languages'

i18n
    .use(I18nextBrowserLanguageDetector)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: ['en'],
        ns: ['tranlations'],
        resources: messages
    })

export { i18n }
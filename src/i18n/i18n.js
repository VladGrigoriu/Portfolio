import { createI18n } from 'vue-i18n'
import getBrowserLocale from './utils/getBrowserLocale'

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })
  if (browserLocale === 'en' || browserLocale === 'it' || browserLocale === 'fr' || browserLocale === 'es' || browserLocale === 'in') {
    localStorage.setItem('lang',browserLocale)
    return browserLocale
  } else {
    localStorage.setItem('lang',import.meta.env.VUE_APP_I18N_LOCALE || "en")
    return import.meta.env.VUE_APP_I18N_LOCALE || "en"
  }
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'it' || localStorage.getItem('lang') === 'fr' || localStorage.getItem('lang') === 'es' || localStorage.getItem('lang') === 'in' ? localStorage.getItem('lang') : getStartingLocale(),
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {}

});

const loadedLanguages = [];

function setI18nLanguage (lang) {
  i18n.global.locale.value = lang
  localStorage.setItem('lang', lang)
  return lang
}


export function loadLanguageAsync (locale) {
    if (loadedLanguages.length > 0 && i18n.locale === locale) {
      return Promise.resolve(locale)
    }
    if (loadedLanguages.includes(locale)) {
      i18n.locale = locale;
      setI18nLanguage(locale)
      return Promise.resolve(locale)
    }
    return import(
      /* webpackChunkName: "locale-[request]" */ `@/i18n/locales/${locale}.json`
    ).then(messages => {
      i18n.global.setLocaleMessage(locale, messages.default)
      loadedLanguages.push(locale)
      setI18nLanguage(locale)
      i18n.locale = locale
      return Promise.resolve(locale)
    })
}

loadLanguageAsync(localStorage.getItem('lang'))
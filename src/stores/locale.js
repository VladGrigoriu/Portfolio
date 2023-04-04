import { defineStore } from 'pinia'
import { loadLanguageAsync } from "@/i18n/i18n";

export const useLocaleStore = defineStore('locale', {
    state: () => {
      return { 
        theme: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
        locales: ["en", "it", "fr", "es", "br","de"]
    }
    },
    

    actions: {
      setLocale(locale) {
        loadLanguageAsync(locale);
      },
     
    },
  })
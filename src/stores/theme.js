import { defineStore } from 'pinia'


export const useThemeStore = defineStore('theme', {
    state: () => {
      return { theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light' }
    },
    

    actions: {
      setInitialTheme() {
        if (localStorage.getItem('theme')){
            document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
        }
      },
      setTheme(theme){
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }
    },
  })
import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
    state: () => {
      return { 
        contacts: [
            {
                name:'Github',
                url: 'https://github.com/VladGrigoriu',
                icon: 'fa-brands fa-github'
            },
            {
                name:'Linkedin',
                url: 'https://it.linkedin.com/in/vladgrigoriu',
                icon: 'fa-brands fa-linkedin'
            },
            {
                name:'Email',
                url: 'mailto:vlad.grigoriu4@gmail.com',
                icon: 'fa-solid fa-envelope'
            }
        ] 
    }
    }
  })
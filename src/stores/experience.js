import { defineStore } from 'pinia'

export const useExperienceStore = defineStore('experience', {
    state: () => {
      return { 
        experiences: [
            {
                name: 'degg',
                description: 'Software and Lead developer experience, the main duties that i has were managing projects, clients and internal team',
                date_from: '04/2021',
                date_to: '04/2023',
                main_image: '/assets/images/logo_degg.png',
                is_screenshot: false,
                links: [
                    {
                        url: 'https://degg.it/',
                        name: 'URL',
                        icon: 'fa-solid fa-arrow-up-right-from-square'
                    }
                ],
                roles:[
                    {
                        name: 'Software Developer',
                        description: "Impostare, sviluppare o controllare la realizzazione dei progetti. Installare programmi o applicativi. Adottare strumenti e procedure per la progettazione funzionale e per lo sviluppo di interfacce. Adottare strumenti e procedure per la progettazione funzionale della base dati. Adottare procedure per la generazione di database con l'ausilio di strumenti di sviluppo. Realizzare siti web.",
                        date_from: '04/2021',
                        date_to: '10/2021'
                    },
                    {
                        name: 'Lead Software Developer',
                        description: "Creare, modificare o verificare software e altri applicativi. Curare i rapporti con i clienti. Fornire assistenza ai clienti. Gestire il team per raggiungere obiettivi e deadlines. Formare le risorse su tecnologie Frontend e Backend. Fornire consulenza ai clienti su software o sistemi informatici.",
                        date_from: '10/2021',
                        date_to: '12/2022'
                    },
                    {
                        name: 'CTO',
                        description: "Gestione dei piani tecnologici dell'azienda. Immaginare come le diverse forme di tecnologia verranno utilizzate in tutta l'azienda. Ricerca di modi per migliorare le risorse tecnologiche dell'azienda. Valutare se le nuove tecnologie sono appropriate per l'azienda da utilizzare. Garantire che le tecnologie attualmente in uso siano efficienti e apportare modifiche ove necessario.",
                        date_from: '12/2022',
                        date_to: '04/2023'
                    }
                ],
                skills: [ 'JavaScript', 'Vue.js', 'React.js', 'PHP', 'Laravel', 'C#', 'ASP.NET', 'REST APIs', 'MySQL', 'SQL', 'Front-end Development', 'Web Standards', 'Git', 'CSS', 'HTML', 'Blockchain Technology', 'Project Management', 'Gestione team', 'Gestione del team in remoto', 'Formazione dei dipendenti', 'Software Design Patterns', 'Software development', 'Software Architecture', 'Software Architectural Design' ]
            },
            {
                name: 'Irradia',
                description: 'Software and Lead developer experience',
                date_from: '04/2021',
                date_to: 'Active',
                main_image: '/assets/images/irradia_logo.png',
                is_screenshot: false,
                links: [
                    {
                        url: '',
                        name: 'URL',
                        icon: 'fa-solid fa-arrow-up-right-from-square'
                    }
                ],
                roles:[
                    {
                        name: 'Web Developer',
                        description: "Creare, modificare o verificare siti web. Curare i rapporti con i clienti. Fornire assistenza ai clienti",
                        date_from: '10/2021',
                        date_to: '12/2022'
                    }
                ],
                skills: [ 'JavaScript', 'PHP', 'Wordpress', 'MySQL', 'SQL', 'Front-end Development', 'Web Standards', 'CSS', 'HTML' ]
            },
            {
                name: 'Freelance developer',
                description: 'Software and Lead developer experience',
                date_from: '04/2021',
                date_to: 'Active',
                main_image: '/me.jpg',
                is_screenshot: true,
                links: [
                    {
                        url: 'https://github.com/VladGrigoriu',
                        name: 'Github',
                        icon: 'fa-brands fa-github'
                    },
                    {
                        url: 'https://it.linkedin.com/in/vladgrigoriu',
                        name: 'Linkedin',
                        icon: 'fa-brands fa-linkedin'
                    }
                ],
                roles:[
                    {
                        name: 'Software developer',
                        description: "Creare, modificare o verificare siti web. Curare i rapporti con i clienti. Fornire assistenza ai clienti",
                        date_from: '10/2021',
                        date_to: '12/2022'
                    }
                ],
                skills: [ 'JavaScript', 'Vue', 'React', 'PHP', 'Laravel', 'MySQL', 'SQL', 'Front-end Development', 'Back-end Development', 'Web Standards', 'CSS', 'HTML' ]
            },
            {
                name: 'Travel Journal',
                description: 'Social application focused on travellers',
                date_from: '02/2022',
                date_to: '05/2022',
                main_image: '/assets/images/travel_journal.jpg',
                is_screenshot: true,
                links: [
                    {
                        url: '',
                        name: 'Frontend Repo',
                        icon: ''
                    }
                ],
                roles:[
                    {
                        name: 'Social Media focused on travellers',
                        description: "Progetto software che consiste in una piattaforma social. Abbiamo un database MySQL con gestione utenti, ruoli, media, profilo e feed. I sistemi sono indipendenti, abbiamo dunque un Back-end in laravel che espone API e per quanto riguarda la parte Front-end consiste in un applicazione Vuejs che si interfaccia con le API",
                        date_from: '10/2021',
                        date_to: '12/2022'
                    }
                ],
                skills: [ 'JavaScript', 'Vue', 'React', 'PHP', 'Laravel', 'MySQL', 'SQL', 'Front-end Development', 'Back-end Development', 'Web Standards', 'CSS', 'HTML' ]
            },
            {
                name: 'Coinsxplorer',
                description: 'Crypto tracking app with data aggregation functionality',
                date_from: '02/2021',
                date_to: '08/2021',
                main_image: '/assets/images/coinsxplorers_logo.jpg',
                is_screenshot: true,
                links: [
                    {
                        url: 'https://nextjs-git-main-vladgrigoriu.vercel.app/',
                        name: 'URL',
                        icon: 'fa-solid fa-arrow-up-right-from-square'
                    }
                ],
                roles:[
                    {
                        name: 'Crypto Tracking App with data aggregation',
                        description: "Progetto software che consiste in una piattaforma per il tracking delle criptovalute. Abbiamo dunque un backend in laravel che si interfaccia con le API di Coingecko per ricevere i prezzi quasi in tempo reale e applicare logiche di aggregazione. Per la parte frontend si ha invece un app react che si interfaccia con le API del backend",
                        date_from: '10/2021',
                        date_to: '12/2022'
                    }
                ],
                skills: [ 'JavaScript', 'Vue', 'React', 'PHP', 'Laravel', 'MySQL', 'SQL', 'Front-end Development', 'Back-end Development', 'Web Standards', 'CSS', 'HTML' ]
            }
        ] 
    }
    }
  })
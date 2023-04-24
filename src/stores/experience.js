import { defineStore } from 'pinia'
import { i18n } from '../i18n/i18n'
import { computed } from 'vue'


const degg_description = computed(() => {
    return i18n.global.t('degg.short_description');
});

const degg_role1_name = computed(() => {
    return i18n.global.t('degg.roles.software_developer.name');
});

const degg_role1_description = computed(() => {
    return i18n.global.t('degg.roles.software_developer.description');
});

const degg_role2_name = computed(() => {
    return i18n.global.t('degg.roles.lead_software_developer.name');
});

const degg_role2_description = computed(() => {
    return i18n.global.t('degg.roles.lead_software_developer.description');
});

const degg_role3_name = computed(() => {
    return i18n.global.t('degg.roles.cto.name');
});

const degg_role3_description = computed(() => {
    return i18n.global.t('degg.roles.cto.description');
});

const irradia_description = computed(() => {
    return i18n.global.t('irradia.short_description');
});

const irradia_role_name = computed(() => {
    return i18n.global.t('irradia.roles.web_developer.name');
});

const irradia_role_description = computed(() => {
    return i18n.global.t('irradia.roles.web_developer.description');
});

const freelance_description = computed(() => {
    return i18n.global.t('freelance_developer.short_description');
});

const freelance_role_name = computed(() => {
    return i18n.global.t('freelance_developer.roles.software_and_web_developer.name');
});

const freelance_role_description = computed(() => {
    return i18n.global.t('freelance_developer.roles.software_and_web_developer.description');
});

const travel_journal_description = computed(() => {
    return i18n.global.t('travel_journal.short_description');
});

const travel_journal_role_name = computed(() => {
    return i18n.global.t('travel_journal.roles.name');
});

const travel_journal_role_description = computed(() => {
    return i18n.global.t('travel_journal.roles.description');
});

const coinsxplorer_description = computed(() => {
    return i18n.global.t('coinsxplorers.short_description');
});

const coinsxplorer_role_name = computed(() => {
    return i18n.global.t('coinsxplorers.roles.name');
});

const coinsxplorer_role_description = computed(() => {
    return i18n.global.t('coinsxplorers.roles.description');
});

export const useExperienceStore = defineStore('experience', {
    state: () => {
      return { 
        experiences: [
            {
                name: 'degg',
                description: degg_description,
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
                        name: degg_role1_name,
                        description: degg_role1_description,
                        date_from: '04/2021',
                        date_to: '10/2021'
                    },
                    {
                        name: degg_role2_name,
                        description: degg_role2_description,
                        date_from: '10/2021',
                        date_to: '12/2022'
                    },
                    {
                        name: degg_role3_name,
                        description: degg_role3_description,
                        date_from: '12/2022',
                        date_to: '04/2023'
                    }
                ],
                skills: [ 'JavaScript', 'Vue.js', 'React.js', 'PHP', 'Laravel', 'C#', 'ASP.NET', 'REST APIs', 'MySQL', 'SQL', 'Front-end Development', 'Web Standards', 'Git', 'CSS', 'HTML', 'Blockchain Technology', 'Project Management', 'Gestione team', 'Gestione del team in remoto', 'Formazione dei dipendenti', 'Software Design Patterns', 'Software development', 'Software Architecture', 'Software Architectural Design' ]
            },
            {
                name: 'Irradia',
                description: irradia_description,
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
                        name: irradia_role_name,
                        description: irradia_role_description,
                        date_from: '10/2021',
                        date_to: '12/2022'
                    }
                ],
                skills: [ 'JavaScript', 'PHP', 'Wordpress', 'MySQL', 'SQL', 'Front-end Development', 'Web Standards', 'CSS', 'HTML' ]
            },
            {
                name: 'Freelance Developer',
                description: freelance_description,
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
                        name: freelance_role_name,
                        description: freelance_role_description,
                        date_from: '10/2021',
                        date_to: '12/2022'
                    }
                ],
                skills: [ 'JavaScript', 'Vue', 'React', 'PHP', 'Laravel', 'MySQL', 'SQL', 'Front-end Development', 'Back-end Development', 'Web Standards', 'CSS', 'HTML' ]
            },
            {
                name: 'Travel Journal',
                description: travel_journal_description,
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
                        name: travel_journal_role_name,
                        description: travel_journal_role_description,
                        date_from: '10/2021',
                        date_to: '12/2022'
                    }
                ],
                skills: [ 'JavaScript', 'Vue', 'React', 'PHP', 'Laravel', 'MySQL', 'SQL', 'Front-end Development', 'Back-end Development', 'Web Standards', 'CSS', 'HTML' ]
            },
            {
                name: 'Coinsxplorer',
                description: coinsxplorer_description,
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
                        name: coinsxplorer_role_name,
                        description: coinsxplorer_role_description,
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

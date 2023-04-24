import { defineStore } from 'pinia';
import { i18n } from '../i18n/i18n'
import { computed } from 'vue'

function getAge() {
    var ageDifMs = Date.now() - new Date('2000-05-09');
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const bio = computed(() => {
    return i18n.global.t('bio', { years: getAge().toString() });
});

const long_bio = computed(() => {
    return i18n.global.t('long_bio', { years: getAge().toString() });
});

export const useMeStore = defineStore('me', {
    state: () => {
      return { 
            bio: bio,
            longBio: long_bio,
            skills: [
                {
                    name: 'Javascript',
                    icon: 'js',
                    isIcon: true
                },
                {
                    name: 'HTML',
                    icon: 'html5',
                    isIcon: true
                },
                {
                    name: 'CSS',
                    icon: 'css3',
                    isIcon: true
                },
                {
                    name: 'React',
                    icon: 'react',
                    isIcon: true
                },
                {
                    name: 'Vue',
                    icon: 'vuejs',
                    isIcon: true
                },
                {
                    name: 'Angular',
                    icon: 'angular',
                    isIcon: true
                },
                {
                    name: 'PHP',
                    icon: 'php',
                    isIcon: true
                },
                {
                    name: 'Laravel',
                    icon: 'laravel',
                    isIcon: true
                },
                {
                    name: 'Node.js',
                    icon: 'node-js',
                    isIcon: true
                },
                {
                    name: 'C#',
                    icon: 'c_sharp.svg',
                    isIcon: false
                },
                {
                    name: 'MySQL',
                    icon: 'mysql.svg',
                    isIcon: false
                },
                {
                    name: 'MongoDB',
                    icon: 'mongodb.svg',
                    isIcon: false
                }
                
            ]
        }
    }
  })
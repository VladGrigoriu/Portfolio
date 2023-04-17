import { defineStore } from 'pinia';

function getAge() {
    var ageDifMs = Date.now() - new Date('2000-05-09');
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const useMeStore = defineStore('me', {
    state: () => {
      return { 
            bio: `I'm a ${ getAge() } years old software developer based in Rome, Italy. I have worked with Front-end and Back-end Systems and Technologies to help build great software on the web. During my work experience I have supported various companies in 𝒅𝒊𝒈𝒊𝒕𝒂𝒍𝒊𝒛𝒊𝒏𝒈 their business. I have experience in development, design, testing, bug fixing, maintenance and optimizations of web or mobile applications using the most modern development 𝒇𝒓𝒂𝒎𝒆𝒘𝒐𝒓𝒌𝒔.`,
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
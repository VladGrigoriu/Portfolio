import { defineStore } from 'pinia';

function getAge() {
    var ageDifMs = Date.now() - new Date('2000-05-09');
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const useMeStore = defineStore('me', {
    state: () => {
      return { 
            bio: `I'm a ${ getAge() } years old software developer based in Rome, Italy. I have worked with Front-end and Back-end Systems and Technologies to help build great software on the web. During my work experience I have supported various companies in 𝒅𝒊𝒈𝒊𝒕𝒂𝒍𝒊𝒛𝒊𝒏𝒈 their business. I have experience in development, design, testing, bug fixing, maintenance and optimizations of web or mobile applications using the most modern development 𝒇𝒓𝒂𝒎𝒆𝒘𝒐𝒓𝒌𝒔.`
        }
    }
  })
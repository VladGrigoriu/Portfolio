import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { i18n } from './i18n/i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faVuejs, faReact, faAngular, faPhp, faLaravel, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown, faEnvelope, faArrowUpRightDots, faArrowUpRightFromSquare, faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import './assets/main.css'

library.add(faGithub, faLinkedin, faCaretDown, faEnvelope, faArrowUpRightDots, faHtml5, faCss3, faJs, faVuejs, faReact, faAngular, faPhp, faLaravel, faNodeJs, faArrowUpRightFromSquare, faStar, faRegularStar, faChevronRight );

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const app = createApp(App);

app.config.globalProperties.$myAge = calculateAge(new Date('2000-05-09'));

const pinia = createPinia();

pinia.use(({ store }) => {
    store.myAge = 'ciao';
});
// pinia.use(() => ({ hello: 'world' }))

app.use(router).use(pinia).use(i18n).component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');

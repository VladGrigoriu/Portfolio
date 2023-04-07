import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { i18n } from './i18n/i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './assets/main.css'

library.add(faGithub, faLinkedin, faCaretDown, faEnvelope);

const pinia = createPinia()

const app = createApp(App)

app.use(router).use(pinia).use(i18n).component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')

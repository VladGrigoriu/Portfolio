import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { i18n } from './i18n/i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'

import { 
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin);

const pinia = createPinia()

const app = createApp(App)

app.use(router).use(pinia).use(i18n).component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')

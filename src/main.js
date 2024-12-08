import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)

import '@fortawesome/fontawesome-svg-core/styles.css';


const app = createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon);
app.use(router);
app.mount('#app');

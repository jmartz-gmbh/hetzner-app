import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPlus, faTimes, faInfo, faSave, faToggleOff, faToggleOn, faRotate, faHeart, faLock, faLockOpen, faServer, faRobot, faGear, faTrashCan, faRotateRight, faEdit, faPowerOff } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/'
import store from './store/'
import translate from './translate/'
import { createI18n } from 'vue-i18n'

import plausible from './plugins/plausible';

const plausibleOptions = { 
  domain: 'hetzner.app',  // Update for your site
  hashMode: false,
  trackLocalhost: false,
};

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: translate,
})

const app = createApp(App);

library.add(faPlus, faTimes, faInfo, faToggleOff, faToggleOn, faSave, faRotate, faHeart, faLock, faLockOpen, faServer, faRobot, faGear, faRotateRight, faPowerOff, faTrashCan, faEdit)
app.component('fa', FontAwesomeIcon);

app.use(i18n);
app.use(router);
app.use(store);
app.use(plausible, plausibleOptions);

app.mount('#app')

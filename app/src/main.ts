import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPlus, faTimes, faInfo, faSave, faRotate, faHeart, faLock, faLockOpen, faServer, faRobot, faGear, faTrashCan, faRotateRight, faEdit, faPowerOff } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/'
import store from './store/'


const app = createApp(App);
app.use(store);

/* add icons to the library */
library.add(faPlus, faTimes, faInfo, faSave, faRotate, faHeart, faLock, faLockOpen, faServer, faRobot, faGear, faRotateRight, faPowerOff, faTrashCan, faEdit)

/* add font awesome icon component */
app.component('fa', FontAwesomeIcon);

app.use(router);

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import FloatingVue from 'floating-vue'

import App from './App.vue'
import router from './router'
import 'floating-vue/dist/style.css'

library.add(faListCheck)
library.add(faCircleXmark)
library.add(faCircleCheck)
library.add(faCirclePlus)
library.add(faPen)
library.add(faCaretDown)
library.add(faCaretUp)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FloatingVue)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

// TODO: refactor components (routing to edit task)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../src/assets/main.css'
import './assets/global.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/scripts/particle-randomizer.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

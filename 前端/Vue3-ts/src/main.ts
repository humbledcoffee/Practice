import './assets/styles/common.scss'
import './assets/main.css'
import 'normalize.css'
import './assets/styles/reset.scss';
import './assets/styles/global.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

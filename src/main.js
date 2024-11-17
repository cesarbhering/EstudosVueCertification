import './assets/main.css'
import MyFirstPlugin from './MyPlugin'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(MyFirstPlugin /* can pass options as second param */)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {
    ElMessageBox
} from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
app.component(ElMessageBox.name,ElMessageBox)
app.use(store).use(router).mount('#app')
app.config.globalProperties.$axios = axios
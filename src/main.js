import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {ElMessageBox,ElCalendar} from 'element-plus'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.component(ElMessageBox.name, ElMessageBox)
app.component(ElCalendar.name,ElCalendar)
app.use(store).use(router).mount('#app')
app.use(ElementPlus, {
    locale: zhCn,
})
app.config.globalProperties.$axios = axios
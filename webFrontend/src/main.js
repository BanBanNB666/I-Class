import {createApp} from 'vue';
import router from './router'
import App from './App.vue'
import VeLine from 'v-charts/lib/line.common'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'

axios.defaults.baseURL='http://101.43.76.179:7070'
const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router).use(VeLine).mount('#app')
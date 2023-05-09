import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./font/bootstrap-icons.css";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(router).use(ElementPlus).mount('#app');

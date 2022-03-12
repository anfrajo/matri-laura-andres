import { createApp } from 'vue'
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'
    

const routes = [
  { path: '/', name: "Home", component: HomePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const axiosBase = axios.create({
  baseURL: "http://localhost:3009"
})
const app = createApp(App)
app.use(VueAxios, axiosBase).use(router).mount('#app')

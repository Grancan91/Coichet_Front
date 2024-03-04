import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import SignIn from '@/components/SignIn.vue'
import MainPage from '@/components/MainPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'MainPage', component: MainPage},
        { path: '/SignIn', name: 'SignIn', component: SignIn }
    ]
})


createApp(App)
.use(router)
.mount('#app')


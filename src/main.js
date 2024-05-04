import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'

import Sortear from './components/Sortear.vue';
import Contagem from './components/Contagem.vue';
import Resultado from './components/Resultado.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component:  Sortear },
        { path: '/contagem', component: Contagem },
        { path: '/resultado', component: Resultado }
    ]
});

const app = createApp(App)

app.use(router)

app.mount('#app')

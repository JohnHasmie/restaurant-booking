import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import components
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Reservations from './views/Reservations.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/reservations', component: Reservations },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app') 
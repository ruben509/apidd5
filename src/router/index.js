import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classes from '../views/Classes.vue'
import Classe from '../views/Classe.vue'
import Montros from '../views/Montros.vue'
import Montro from '../views/Montro.vue'
import Races from '../views/Races.vue'
import Race from '../views/Race.vue'
import Proficiencies from'../views/Proficiencies.vue'
import Proficiencie from '../views/Proficiencie.vue'
import registar from '../views/registar.vue'
import login from '../views/login.vue'
import Admind from '../views/Admind.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Classes',
    component: Classes
  },
  {
    path:'/Classes/:id',
    component: Classe
  },
  {
    path:'/Montros',
    component: Montros
  },
  {
    path:'/Montros/:id',
    component: Montro
  },
  {
    path:'/Races',
    component: Races
  },
  {
    path:'/Races/:id',
    component: Race
  },
  {
    path:'/Proficiencies',
    component: Proficiencies
  },
  {
    path:'/Proficiencies/:id',
    component: Proficiencie
  },
  {
    path:'/registar',
    component: registar
  },
  {
    path:'/login',
    component: login
  },
  {
    path:'/admind',
    component: Admind
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

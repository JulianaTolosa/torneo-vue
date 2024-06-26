import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ("../views/HomeView")
  },
  {
    path: '/info-categoria',
    name: 'InfoCategoria',
    component: () => import ("../views/InfoCategoria")
  },
  {
    path: '/info-institucion',
    name: 'InfoInstitucion',
    component: () => import ("../views/InfoInstitucion")
  },
  {
    path: '/info-equipos',
    name: 'InfoEquipos',
    component: () => import ("../views/InfoEquipos")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ("../views/Login")
  },
  {
    path: '/zonas/:id',
    name: 'Zonas',
    component: () => import ("../views/Zonas")
  },
  {
    path: '/fase-final/:id',
    name: 'FaseFinalView',
    component: () => import ("../views/FaseFinalView")
  },
  {
    path: '/Canchas',
    name: 'MapaView',
    component: () => import ("../views/MapaView")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import fomularioComponent from '../views/fomularioComponent.vue'
import tablaComponent from '../views/tablaComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: fomularioComponent
  },
  {
    path: '/tabla',
    name: 'tabla',
    component: tablaComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

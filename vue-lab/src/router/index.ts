import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'
import Translator from '../views/Translator.vue'
import TinyMCE from '../views/TinyMCE.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/translator',
    name: 'Translator',
    component: Translator
  },
  {
    path: '/tinymce',
    name: 'TinyMCE',
    component: TinyMCE
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

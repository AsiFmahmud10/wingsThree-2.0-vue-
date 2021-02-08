import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Architecture from '@/views/Architecture.vue'
import Graphics from '@/views/Graphics.vue'
import Web from '@/views/Web.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/architecture/:id',
    name: 'Architecture',
    props: true,
    component: Architecture
  },
  {
    path: '/graphics',
    name: 'Graphics',
    component: Graphics
  },
  {
    path: '/web',
    name: 'Web',
    component: Web
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

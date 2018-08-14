import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DetilFilm from '@/components/DetilFilm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/DetilFilm',
      name: 'DetilFilm',
      component: DetilFilm
    }
  ]
})

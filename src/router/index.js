import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DetilFilm from '@/components/DetilFilm'
import MoviePage from '@/components/MoviePage'
import eventHub from '../main.js'
import Login from '@/components/Login'
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
    },
    {
      path: '/movie/:id',
      name: 'movie',
      components: MoviePage,
      beforeEnter: (to, from, next) => {
        if (history.state && history.state.popup && from.name) {
          eventHub.$emit('openMoviePopup', to.params.id, false)
          return
        }
        next()
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DetilFilm from '@/components/DetilFilm'
import MoviesList from '@/components/MoviesList'
import MoviePage from '@/components/MoviePage'
import eventHub from '../main.js'
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
      path: '/movies/category',
      name: 'home-category',
      components: MoviesList
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
    }
  ]
})

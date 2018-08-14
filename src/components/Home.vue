<template>
  <section class="home">
    <movies-list v-for="item in listTypes" v-if="item.isCategory" :type="'component'" :mode="'collection'" :category="item.query" :shortList="true"></movies-list>
  </section>
</template>

<script>
import storage from '../storage.js'
import MoviesList from './MoviesList.vue'

export default {
  components: { MoviesList },
  name: 'home-category',
  data () {
    return {
      listTypes: storage.listTypes
    }
  },
  created () {
    document.title = 'TMDb'
    storage.backTitle = document.title
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      statePage: 'Home'
    }
  },
  methods: {
    chStatePageToResume () {
      this.statePage = 'Resume'
      console.log(this.statePage)
    }
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

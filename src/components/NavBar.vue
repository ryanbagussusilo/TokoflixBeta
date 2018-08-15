<template>
 <div id ="NavBar">
  <nav class="navbar navbar-default navbar-fixed-top">
                  <div class="container">
                      <div class="navbar-header">
                        <router-link to="/" tag="img" src="static/tokoflix.png"></router-link>
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                      </div>
                      <div class="collapse navbar-collapse" id="myNavbar">
                              <ul class="nav navbar-nav navbar-right">
                                    <li><router-link to="/Login">Login</router-link></li>
                              </ul>
                          </div>
                  </div>
              </nav>
    <div class="jumbotron text-center">
      <br>
      <h1>Watch Now!</h1>
    </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  methods: {
    setSaldo (saldo) {
      this.saldo = saldo
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 480px) {
  .logo {
      font-size: 200px;
  }
}

.logo{
  height: 50px;
}
.navbar {
    margin-bottom: 0;
    background-color: rgb(255, 255, 255);
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
    font-family: Montserrat, sans-serif;
}
.navbar li a, .navbar .navbar-brand {
    color: rgb(0, 149, 218) !important;
}
.navbar-nav li a:hover, .navbar-nav li.active a {
    color: rgb(0, 120, 199) !important;
    background-color: #fff !important;
}
.navbar-default .navbar-toggle {
    border-color: transparent;
    color: #fff !important;
}
.wizard .nav-tabs {
    position: relative;
    margin: 40px auto;
    margin-bottom: 0;
    border-bottom-color: #e0e0e0;
}

</style>

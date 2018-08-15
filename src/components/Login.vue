<template>
  <div id="Login">
    <span class="top-strip"></span>
    <div class="container">
      <div class="header-section">
        <div class="col-lg-12 col-md-12 col-sm-12 ">
          <div class="inner-header">
          </div>
        </div>
      </div>

      <div class="body-section">
        <div>
        </div>
        <div class="row">
          <div class="inner-body">
            <div class="col-lg-3 col-md-12 col-sm-12 ">
              <div class="left-section">
                <div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 ">
              <div class="right-section">
                <div class="information-bar">
                  <h3 class="">Login</h3>
                  <p>Tokoflix, please login below</p>
                </div>
                <br>
                <form class="" v-on:submit.prevent method="post">
                  <div class="form-group">
                    <input type="text" class="form-control" name="internalEmail" id="author-name" v-model="email" required="true" placeholder="email / username" />
                  </div>
                  <br/>
                  <div class="form-group">
                    <input type="password" class="form-control" name="internalPassword" placeholder="password" id="message-text" required="true" v-model="password"/>
                  </div>
                  <br/>
                  <br/>
                  <div class="form-group">
                    <button class="btn-login btn btn-success" v-on:click="login()">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      message: 'login',
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.email === 'admin@gmail.com' && this.password === 'admin') {
        this.$router.push('/')
        this.$cookie.set('saldo', 100000, 1)
      } else {
        alert('Sorry username/password not correct')
      }
    }
  }
}
</script>

<style scoped>

h3{
  text-align: center;
  font-size: 32pt;
  font-style: italic;
}

#Login {
  /*width: 600px;*/
  /*height: 400px;*/
  width: 100%;
  height: 100%;
  /*background-color: #3c8dbc;*/
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width:100%;
  max-height: 100%;
    text-align: center;
  /*box-shadow: 10px 10px 10px #888888;*/
}

.btn-login {
  display: block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.information-bar {
  /*background-color: rgba(255,255,255,0.6);*/
  /*padding-top:20px;*/
  /*margin-left: -15px;*/
  /*margin-right: -15px;*/

}

.information-bar>p{
  text-align: center;
}
.top-strip {
  display: block;
  height: 25px;
  background-color: #007fc7;
}
.right-section {
  border: 1px solid #e5e5e5;
  padding: 15px;
  min-height: 430px;

}

</style>

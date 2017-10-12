<template lang="html">
  <div class="wrapper">
  <form class="form-signin" @submit.prevent='Login(dataLogin)'>
    <h2 class="form-signin-heading">Please login</h2>
    <input  v-model='dataLogin.name' type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="" />
    <input v-model='dataLogin.password' type="password" class="form-control" name="password" placeholder="Password" required=""/>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
    <br> <p>
      OR
      </p>
    <form class="form-signin" @submit.prevent='Register(dataUser)'>
      <input  v-model='dataUser.nameUp' type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="" />
      <input v-model='dataUser.passwordUp' type="password" class="form-control" name="password" placeholder="Password" required=""/>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dataLogin: {
        name: '',
        password: ''
      },
      dataUser: {
        nameUp: '',
        passwordUp: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'Login',
      'Register'
    ])
  }
}
</script>

<style lang="css">
body {
  background: #eee !important;
}

.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 30px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index'
vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Login: [],
    Register: []
  },
  mutations: {
    Login (state, payload) {
      state.Login = payload
    },
    Register (state, payload) {
      state.Register = payload
    }
  },
  actions: {
    Login (store, payload) {
      console.log('ini action login')
      axios.post('http://localhost:3000/api/auth', {
        name: payload.name,
        password: payload.password
      })
      .then(response => {
        console.log(response.data)
        if (response.data !== 'please type your correct password') {
          store.commit('Login', response.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', response.data.name)
          router.push('/hello')
        } else {
          alert(response.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    Register (store, payload) {
      axios.post('http://localhost:3000/api/users/', {
        name: payload.nameUp,
        password: payload.passwordUp
      })
      .then(response => {
        alert('data sudah masuk silahkan login')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})

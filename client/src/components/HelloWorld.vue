<template>
  <div class="hello">
    <div v-for = 'art in Articles'>
      <h1> {{ art.content }}</h1>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    Articles () {
      return this.$store.state.getAllArticles
    }
  },
  methods: {
    ...mapActions([
      'AllArticles'
    ])
  },
  mounted () {
    this.AllArticles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

<template>
  <div class="hello">
    <div v-for = 'art in Articles'>
      <h2>judul:</h2>
      <h1>{{ art.title}}</h1>
      <h2>content</h2>
      <p> {{ art.content }}</p>
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
      return this.$store.state.getArticles
    }
  },
  methods: {
    ...mapActions([
      'getArticles'
    ])
  },
  mounted () {
    this.getArticles()
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

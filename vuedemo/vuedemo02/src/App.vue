<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <han_export msg="Welcome to Your Vue.js App"/>
    <han_export msg="Welcome2 to Your Vue.js App"/>
  </div>
</template>

<script>
import han_export from './components/han.vue'

export default {
  name: '韩静',
  components: {
    han_export
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

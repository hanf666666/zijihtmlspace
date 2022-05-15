<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld_import msg="Welcome to Your Vue.js App==============>"/>
  </div>
</template>

<script>
import HelloWorld_import from './components/HelloWorld.vue'

export default {
  name: 'app2',
  components: {
    HelloWorld_import
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

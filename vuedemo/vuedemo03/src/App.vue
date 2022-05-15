<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <han1_export msg="Welcome to Your Vue.js App"/>
      <han2_export msg="Welcome to Your Vue.js App"/>
    <hanaxios_export info="fasdfasdfp"/>
  </div>
</template>

<script>
import han1_export from './components/han1.vue'
import han2_export from './components/han2.vue'
import hanaxios_export from './components/hanaxios.vue'


export default {
  name: '韩静',
  components: {
    han1_export,
    han2_export,
    hanaxios_export
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

<template>
  <div id="app">
    <img src="./assets/m3.png">
    <img src="./assets/logo.png" style="width:40px;">
    <img src="./assets/el.png" style="width:50px;">
    
    <HelloWorld msg="Welcome to Your Vue App For M³"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

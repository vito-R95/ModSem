<template> 
  <div class="app"> 
   
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
  </div> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld
  },
   data () {
    return {
      user:'./assets/user.png',
      public: process.env.BASE_URL
    }
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

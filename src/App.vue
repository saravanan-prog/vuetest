<template>
  <div id="app">
   
    <!-- <img alt="Vue logo" src="./assets/logo.png">
sssssssssssssss -->
   
    
    <router-link to="about">about</router-link>
    <router-link to="Register">Register</router-link>


    <router-view></router-view>


  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'



export default {
  name: 'App',
  // component loadpart
  components: {
    //HelloWorld,
    

  },
  //data retun path
  data(){
    console.log("saravanan")
       return{
         user:{ name:'saravanan',
                schools:['ifet','Tcas','Au']},
         userFlag : {a: true} ,
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
router-link{
 

}
</style>

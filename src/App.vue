<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<primer-ejercicio />-->
    <!--<todo-list />-->
    <!--<pruebas />-->
    <!--<crud />-->
    <!---<router-link to="/HelloWorld">
      <a href="">Hello World</a>
    </router-link>-->
    <menu-principal />
    <main-view />
    
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import PrimerEjercicio from './components/PrimerEjercicio.vue'
//import Pruebas from './components/Pruebas.vue'
//import Crud from './components/Crud.vue'
import MenuPrincipal from './components/MenuPrincipal.vue'
import MainView from './components/MainView.vue'



export default {
  name: 'App',
  components: {
    MenuPrincipal,
    MainView
    //HelloWorld
    //PrimerEjercicio
    //TodoList
    //Pruebas,
    //Crud
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
body{
  background: gainsboro;
}
</style>

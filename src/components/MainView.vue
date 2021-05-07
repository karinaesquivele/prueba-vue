<template>
  <div id="main">
    
    <router-view />
  </div>
</template>

<script>
//import ApiPrueba from './ApiPrueba.vue'
export default {
  name: "MainView",
  components: {
    //ApiPrueba
  },
};
</script>


<style scoped>
#main{
    margin-top:100px!important
}
</style>
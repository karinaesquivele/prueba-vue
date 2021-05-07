<template>
  <div>
    <h1>Titulo</h1>
    <mdb-btn color="primary" @click="contador++">Primary</mdb-btn>
    
    <div class="progress">
      <div
        class="progress-bar "
        role="progressbar"
        :style="{'width': contador+'%'}"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        :class="cambiarColor"

      >{{contador}}</div>
    </div>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";

export default {
  name: "Pruebas",
  data (){
      return{
          contador:0
      }
  },
  components: {
    mdbBtn,
  },
  computed:{
      cambiarColor(){
          return {'danger':this.contador==10,
                   'success':this.contador==2
                }


      }
  }
};
</script>

<style scoped>
</style>
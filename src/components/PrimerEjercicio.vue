<template>
    <div id="cont" class="container">
        <h1>Primer ejercicio</h1>
        <div class="ejercicios">
          <h2 class="subtitulo">Condicion if</h2>
            <h4>Ejemplo 1 </h4>
            <b v-if="condicion">Este texto no se muestra</b>
            <b v-else>Este texto si se muestra</b>
            <br>
            <hr>
            <h2 class="subtitulo">For</h2>
            <h4>Ejemplo 2</h4> 
            <p ><b>Números del 1 al 10</b></p>
            <button @click="numeroPar"  class="btn btn-primary">{{par == 'p' ? 'Par' : 'Impar'}}</button>
            <button v-on:click="numeroImpar" class="btn btn-danger">Impares</button>
            <p>Numeros: <b class="numeros" v-for="(num, index) in filtro" :key="index">{{num}} </b></p>
            <br>
            <hr>
            <h4>Ejemplo 3</h4>
            <p><b>Frutas</b></p>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Color</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fr, index) in frutas" :key="index">
                  <td>{{fr.nombre}}</td>
                  <td>{{fr.color}}</td>
                  <td>{{fr.precio}}</td>
                </tr>
              </tbody>         
            </table>
            <hr>
            <label for="mujer">Mujer: </label>
            <input name="mujer" type="radio" class="form-check-input" v-model="genero" value="M">
            <label for="hombre">Hombre: </label>
            <input name="hombre" type="radio" class="form-check-input" v-model="genero" value="H">

            <h1 v-if="nombre">{{genero == 'M' ? 'Bienvenida' : 'Bienvenido'}}: {{nombre}}</h1>
            <input type="text" class="form-control" v-model="nombre">
            <p class="alert alert-danger" v-if="nombre==''">El campo no puede ir vacío</p>

            <button @click="contador++" class="btn btn-primary"> +</button>
            {{contador}}
            <button @click="disminuir" class="btn btn-danger" 
            v-bind:disabled="contador==0" :class="{'texto':contador==3}"> -</button>
            <h1>Hola</h1>
        </div>
        

       
    </div>
</template>

<script>
export default {
    name: 'PrimerEjercicio',
    data: function() {
      return {
        condicion: false,
        nums: [1,2,3,4,5,6,7,8,9,10],
        filtro:0,
        contador:0,
        par:'i',
        impar:1,
        frutas: [
          {nombre:"Uva",color:"Morado",precio:35.00},
          {nombre:"Guayaba",color:"Amarillo",precio:16.90},
          {nombre:"Naranja",color:"Naranja",precio:5.90},
          {nombre:"Mango bola",color:"Amarillo",precio:36.00}
        ],
        nombre:'',
        genero:'',

      }
    },
      methods: {
        numeroPar: function(){
          this.filtro = this.nums.filter(num => num % 2 == 0)
          //console.log(this.filtro);
          
        },
        numeroImpar: function(){
          this.filtro = this.nums.filter(num => num % 2 != 0)
          //console.log(this.filtro);
          
        },
        disminuir: function(){
          if(this.contador<=0){
              this.contador=0;
          }else{
            this.contador--;
          }
        }
    }

}
</script>

<style scoped>
.ejercicios{
  text-align: left;
}
.subtitulo{
  font-weight: bolder;
}
.texto{
  color:#ffff;
  background: green;
}
</style>
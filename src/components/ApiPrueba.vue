<template>
  <div>
    <!--<section v-if="errored">
      <p>
        Lo sentimos, no es posible obtener la información en este momento, por
        favor intente nuevamente mas tarde
      </p>
    </section>
    <section v-else>
      <div v-if="loading">Cargando...</div>
      <div v-else>
        <table>
          <tr v-for="(personaje, index) in personajes" :key="index">
            <td>{{ personaje.name }}</td>
          </tr>
        </table>
      </div>
    </section>

    <table>
      <tr v-for="(personaje, index) in personajes" :key="index">
        <td>{{ personaje.name }}</td>
      </tr>
    </table>-->

    <div class="row">
      <div
        class="col-lg-4"
        v-for="(personaje, index) in personajes"
        :key="index"
      >
        <mdb-card dark class="ml-3 mr-3 mb-4 ">
          <mdb-card-image
            v-bind:src="personaje.image"
            alt="Card image cap"
          ></mdb-card-image>
          <mdb-card-body color="elegant" class="white-text">
            <mdb-card-title>{{personaje.name}}</mdb-card-title>
            <mdb-card-text class="white-text text-left">
              <p>{{personaje.species}}</p>
              <p :class="{ 'text-danger':personaje.status == 'Dead'}">{{personaje.status}}</p>
              <p>{{personaje.gender}}</p>
            </mdb-card-text>
            
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
 
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ApiPrueba",
  data() {
    return {
      //personajes: null,
      errored: false,
      loading: true,
      estadoP:'',
    };
  },
  computed: {
    //...mapState(["frutas"]),
    ...mapGetters({
      personajes: "getPersonajes",
    }),
    verEstado(){
      return {
              'text-success':this.estadoP=='Alive',
              'text-danger':this.estadoP=='Dead',
              'font-italic':this.estadoP=='unknown'
            }
    }
  },
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
  },
  methods: {
    ...mapActions(["verPersonajes"]),
    /*async getPersonajes() {
      try {
        let response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        this.personajes = response.data.results;
        //console.log(this.personajes);
      } catch (e) {
        this.errored = true;
      } finally {
          this.loading=false;
      }
    },*/
  },
  created() {
    //this.getPersonajes();
  },
  mounted() {
    //console.log(this.frutas);
    console.log(this.verPersonajes());
  },
};
</script>

<style scoped>
</style>